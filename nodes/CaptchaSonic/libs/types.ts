import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export interface INodeContext {
	functionThis: IExecuteFunctions;
	solver: any;
	items: INodeExecutionData[];
	i: number;
}
