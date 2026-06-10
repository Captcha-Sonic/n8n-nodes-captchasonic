import { IExecuteFunctions, NodeOperationError, sleep } from 'n8n-workflow';
import { Task } from './task';
import { resourceRecognition, TIME_OUT, POLL_INTERVAL } from '../config';

export class Solver {
	private task: Task;
	private readonly apiKey: string;

	constructor(
		private executeFunctions: IExecuteFunctions,
		apiKey: string,
	) {
		this.task = new Task(executeFunctions);
		this.apiKey = apiKey;
	}

	/**
	 * Solve a captcha task.
	 *
	 * For Recognition tasks: returns immediately from createTask (result is inline).
	 * For Token tasks: polls getTaskResult every 3 seconds until ready or timeout.
	 */
	async solve(task: any, resource: string): Promise<any> {
		// Step 1: Create task
		const createTaskResponse = await this.task.createTask(this.apiKey, task);

		// Recognition tasks return the result immediately
		if (resource === resourceRecognition) {
			return createTaskResponse;
		}

		// Token tasks require polling
		const taskId = createTaskResponse.taskId;
		if (!taskId) {
			throw new NodeOperationError(
				this.executeFunctions.getNode(),
				`No taskId returned: ${JSON.stringify(createTaskResponse)}`,
			);
		}

		// Step 2: Poll for result
		const startTime = Date.now();
		while (true) {
			const resultResponse = await this.task.getTaskResult(this.apiKey, taskId);
			const status = resultResponse.status;

			if (status === 'ready') {
				return resultResponse;
			} else if (status === 'failed' || (resultResponse.errorId && resultResponse.errorId !== 0)) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Solve failed: ${resultResponse.errorDescription || resultResponse.msg || JSON.stringify(resultResponse)}`,
				);
			}

			if (Date.now() - startTime >= TIME_OUT) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Task result timeout: unable to solve within ${TIME_OUT / 1000} seconds`,
				);
			}

			await sleep(POLL_INTERVAL);
		}
	}
}
