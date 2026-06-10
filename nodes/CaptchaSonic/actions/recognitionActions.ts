import { INodeContext } from '../libs';
import { resourceRecognition } from '../config';
import { INodeExecutionData } from 'n8n-workflow';

export async function handleRecognitionActions(context: INodeContext): Promise<INodeExecutionData> {
	try {
		const taskType = context.functionThis.getNodeParameter('type', context.i) as string;
		const websiteURL = context.functionThis.getNodeParameter('websiteURL', context.i, '') as string;
		const websiteKey = context.functionThis.getNodeParameter('websiteKey', context.i, '') as string;
		const module = context.functionThis.getNodeParameter('module', context.i, '') as string;
		const question = context.functionThis.getNodeParameter('question', context.i, '') as string;
		const body = context.functionThis.getNodeParameter('body', context.i, '') as string;
		const image = context.functionThis.getNodeParameter('image', context.i, '') as string;
		const imageBackground = context.functionThis.getNodeParameter(
			'imageBackground',
			context.i,
			'',
		) as string;

		// Multi-image grid fields
		const images1 = context.functionThis.getNodeParameter('images 1', context.i, '') as string;
		const images2 = context.functionThis.getNodeParameter('images 2', context.i, '') as string;
		const images3 = context.functionThis.getNodeParameter('images 3', context.i, '') as string;
		const images4 = context.functionThis.getNodeParameter('images 4', context.i, '') as string;
		const images5 = context.functionThis.getNodeParameter('images 5', context.i, '') as string;
		const images6 = context.functionThis.getNodeParameter('images 6', context.i, '') as string;
		const images7 = context.functionThis.getNodeParameter('images 7', context.i, '') as string;
		const images8 = context.functionThis.getNodeParameter('images 8', context.i, '') as string;
		const images9 = context.functionThis.getNodeParameter('images 9', context.i, '') as string;
		const images = [
			images1, images2, images3, images4, images5,
			images6, images7, images8, images9,
		];

		const taskData = {
			taskType,
			websiteURL,
			websiteKey,
			image,
			body,
			question,
			module,
			imageBackground,
			images,
		};

		const task = buildTaskData(taskData);
		const result = await context.solver.solve(task, resourceRecognition);
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
	};

	if (taskData.websiteURL) task.websiteURL = taskData.websiteURL;
	if (taskData.websiteKey) task.websiteKey = taskData.websiteKey;
	if (taskData.body) task.body = taskData.body;
	if (taskData.module) task.module = taskData.module;
	if (taskData.image) task.image = taskData.image;
	if (taskData.question) task.question = taskData.question;
	if (taskData.imageBackground) task.imageBackground = taskData.imageBackground;

	// Only include images array if at least the first image is provided
	const validImages = taskData.images.filter((img: string) => img !== '');
	if (validImages.length > 0) {
		task.images = validImages;
	}

	return task;
}
