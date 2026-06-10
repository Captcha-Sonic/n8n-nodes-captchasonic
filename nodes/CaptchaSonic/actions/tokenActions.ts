import { INodeContext } from '../libs';
import { resourceToken } from '../config';
import { INodeExecutionData } from 'n8n-workflow';

export async function handleTokenActions(context: INodeContext): Promise<INodeExecutionData> {
	try {
		// Public fields
		const taskType = context.functionThis.getNodeParameter('type', context.i) as string;
		const websiteURL = context.functionThis.getNodeParameter('websiteURL', context.i) as string;
		const websiteKey = context.functionThis.getNodeParameter('websiteKey', context.i, '') as string;
		const proxy = context.functionThis.getNodeParameter('proxy', context.i, '') as string;
		const userAgent = context.functionThis.getNodeParameter('userAgent', context.i, '') as string;

		// GeeTest fields
		const gt = context.functionThis.getNodeParameter('gt', context.i, '') as string;
		const challenge = context.functionThis.getNodeParameter('challenge', context.i, '') as string;
		const captchaId = context.functionThis.getNodeParameter('captchaId', context.i, '') as string;

		// DataDome fields
		const captchaUrl = context.functionThis.getNodeParameter('captchaUrl', context.i, '') as string;

		// Optional fields
		const optional = context.functionThis.getNodeParameter('optional', context.i, {}) as any;

		const taskData = {
			taskType,
			websiteURL,
			websiteKey,
			proxy,
			userAgent,
			gt,
			challenge,
			captchaId,
			captchaUrl,
			optional,
		};

		const task = buildTaskData(taskData);
		const result = await context.solver.solve(task, resourceToken);
		return {
			json: {
				success: true,
				data: result,
			},
			pairedItem: { item: context.i },
		};
	} catch (error: any) {
		if (context.functionThis.continueOnFail()) {
			return {
				json: {
					error: error.message,
				},
				pairedItem: context.i,
			};
		}
		throw error;
	}
}

function buildTaskData(taskData: any): any {
	const task: any = {
		type: taskData.taskType,
		websiteURL: taskData.websiteURL,
	};

	if (taskData.websiteKey) task.websiteKey = taskData.websiteKey;
	if (taskData.proxy) task.proxy = taskData.proxy;
	if (taskData.userAgent) task.userAgent = taskData.userAgent;
	if (taskData.gt) task.gt = taskData.gt;
	if (taskData.challenge) task.challenge = taskData.challenge;
	if (taskData.captchaId) task.captchaId = taskData.captchaId;
	if (taskData.captchaUrl) task.captchaUrl = taskData.captchaUrl;

	// Process optional fields
	if (taskData.optional) {
		for (const [key, value] of Object.entries(taskData.optional)) {
			if (value === undefined || value === null || value === '') {
				continue;
			}
			if (key === 'action') {
				if (!task.metadata) task.metadata = {};
				task.metadata.action = value;
				continue;
			}
			if (key === 'cdata') {
				if (!task.metadata) task.metadata = {};
				task.metadata.cdata = value;
				continue;
			}
			if (key === 'enterprisePayload') {
				task[key] = typeof value === 'string' ? JSON.parse(value as string) : value;
				continue;
			}
			task[key] = value;
		}
	}

	return task;
}
