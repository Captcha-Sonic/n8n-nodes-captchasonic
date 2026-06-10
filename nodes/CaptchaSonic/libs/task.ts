import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { API_URL } from '../config';

export class Task {
	constructor(private executeFunctions: IExecuteFunctions) {}

	/**
	 * Create a captcha-solving task via CaptchaSonic API.
	 * POST /createTask with { apiKey, task }
	 */
	async createTask(apiKey: string, task: any) {
		const createTaskPayload = {
			clientKey: apiKey,  // Try both field names
			apiKey,
			task,
		};

		try {
			const response = await this.executeFunctions.helpers.httpRequest({
				method: 'POST',
				url: `${API_URL}/createTask`,
				body: createTaskPayload,
				json: true,
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.errorId && response.errorId !== 0) {
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Failed to create task: ${response.errorDescription || response.msg || JSON.stringify(response)}`,
				);
			}

			return response;
		} catch (error: any) {
			if (error instanceof NodeOperationError) throw error;
			throw new NodeOperationError(
				this.executeFunctions.getNode(),
				`Failed to create task: ${error.message}`,
			);
		}
	}

	/**
	 * Poll for task result via CaptchaSonic API.
	 * Tries /getTaskResult first, falls back to /createTask with taskId.
	 */
	async getTaskResult(apiKey: string, taskId: string) {
		// Try dedicated getTaskResult endpoint first
		const pollEndpoints = [
			`${API_URL}/getTaskResult`,
			`${API_URL}/createTask`,
		];

		for (const url of pollEndpoints) {
			try {
				const result = await this.executeFunctions.helpers.httpRequest({
					method: 'POST',
					url,
					body: {
						clientKey: apiKey,
						apiKey,
						taskId,
					},
					json: true,
					headers: {
						'Content-Type': 'application/json',
					},
				});
				return result;
			} catch (error: any) {
				// If this endpoint returns 4xx, try the next one
				const statusCode = error?.response?.status || error?.statusCode;
				if (statusCode && statusCode >= 400 && statusCode < 500) {
					continue;
				}
				throw new NodeOperationError(
					this.executeFunctions.getNode(),
					`Failed to get task result: ${error.message}`,
				);
			}
		}

		throw new NodeOperationError(
			this.executeFunctions.getNode(),
			'Failed to get task result: all endpoints returned an error',
		);
	}
}
