import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	NodeOperationError,
} from 'n8n-workflow';
import { INodeContext, Solver } from './libs';
import { handleRecognitionActions, handleTokenActions } from './actions';
import { captchaTypes, resourceRecognition, resourceToken } from './config';
import { optionalDescriptions, recognitionDescriptions, tokenDescriptions } from './descriptions';

const inputs = [NodeConnectionTypes.Main];
const outputs = [NodeConnectionTypes.Main];

export class CaptchaSonic implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CaptchaSonic',
		name: 'captchaSonic',
		icon: 'file:captchasonic.svg',
		group: ['transform'],
		version: [1],
		subtitle: '={{$parameter["operation"]}} - {{$parameter["type"]}}',
		description: 'AI-powered CAPTCHA solving — Supports reCAPTCHA, popularcaptcha, Turnstile, GeeTest, DataDome, AWS WAF, and more',
		defaults: {
			name: 'CaptchaSonic',
		},
		inputs,
		outputs,
		credentials: [
			{
				name: 'captchaSonicApi',
				required: true,
			},
		],
		properties: [
			// ─── Resource Selection ───
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: resourceToken,
						value: resourceToken,
					},
					{
						name: resourceRecognition,
						value: resourceRecognition,
					},
				],
				noDataExpression: true,
				default: resourceToken,
			},

			// ─── Token Operations ───
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				default: captchaTypes.recaptchaV2,
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resourceToken],
					},
				},
				options: [
					{
						name: captchaTypes.recaptchaV2,
						value: captchaTypes.recaptchaV2,
						action: captchaTypes.recaptchaV2,
					},
					{
						name: captchaTypes.recaptchaV3,
						value: captchaTypes.recaptchaV3,
						action: captchaTypes.recaptchaV3,
					},
					{
						name: captchaTypes.popularCaptcha,
						value: captchaTypes.popularCaptcha,
						action: captchaTypes.popularCaptcha,
					},
					{
						name: captchaTypes.cloudflareTurnstile,
						value: captchaTypes.cloudflareTurnstile,
						action: captchaTypes.cloudflareTurnstile,
					},
					{
						name: captchaTypes.geeTestV3,
						value: captchaTypes.geeTestV3,
						action: captchaTypes.geeTestV3,
					},
					{
						name: captchaTypes.geeTestV4,
						value: captchaTypes.geeTestV4,
						action: captchaTypes.geeTestV4,
					},
					{
						name: captchaTypes.dataDome,
						value: captchaTypes.dataDome,
						action: captchaTypes.dataDome,
					},
					{
						name: captchaTypes.awsWaf,
						value: captchaTypes.awsWaf,
						action: captchaTypes.awsWaf,
					},
					{
						name: captchaTypes.mtCaptcha,
						value: captchaTypes.mtCaptcha,
						action: captchaTypes.mtCaptcha,
					},
					{
						name: captchaTypes.tencentCaptcha,
						value: captchaTypes.tencentCaptcha,
						action: captchaTypes.tencentCaptcha,
					},
					{
						name: captchaTypes.captchaFox,
						value: captchaTypes.captchaFox,
						action: captchaTypes.captchaFox,
					},
					{
						name: captchaTypes.prosopo,
						value: captchaTypes.prosopo,
						action: captchaTypes.prosopo,
					},
				],
			},

			// ─── Recognition Operations ───
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				default: captchaTypes.imageToText,
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resourceRecognition],
					},
				},
				options: [
					{
						name: captchaTypes.imageToText,
						value: captchaTypes.imageToText,
						action: captchaTypes.imageToText,
					},
					{
						name: captchaTypes.recaptchaV2Classification,
						value: captchaTypes.recaptchaV2Classification,
						action: captchaTypes.recaptchaV2Classification,
					},
					{
						name: captchaTypes.popularCaptchaClassification,
						value: captchaTypes.popularCaptchaClassification,
						action: captchaTypes.popularCaptchaClassification,
					},
					{
						name: captchaTypes.awsWafClassification,
						value: captchaTypes.awsWafClassification,
						action: captchaTypes.awsWafClassification,
					},
					{
						name: captchaTypes.blsOcr,
						value: captchaTypes.blsOcr,
						action: captchaTypes.blsOcr,
					},
					{
						name: captchaTypes.tikTokCaptcha,
						value: captchaTypes.tikTokCaptcha,
						action: captchaTypes.tikTokCaptcha,
					},
					{
						name: captchaTypes.binanceCaptcha,
						value: captchaTypes.binanceCaptcha,
						action: captchaTypes.binanceCaptcha,
					},
					{
						name: captchaTypes.visionEngine,
						value: captchaTypes.visionEngine,
						action: captchaTypes.visionEngine,
					},
				],
			},

			// ─── Spread description fields ───
			...tokenDescriptions,
			...recognitionDescriptions,
			...optionalDescriptions,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Get credentials
		const credentials = await this.getCredentials('captchaSonicApi');
		const apiKey = credentials.apiKey as string;
		const solver = new Solver(this, apiKey);

		for (let i = 0; i < items.length; i++) {
			try {
				const context: INodeContext = {
					functionThis: this,
					solver,
					items,
					i,
				};

				const resource = this.getNodeParameter('resource', i) as string;
				let responseItem: INodeExecutionData = { json: {} };

				switch (resource) {
					case resourceToken:
						responseItem = await handleTokenActions(context);
						break;
					case resourceRecognition:
						responseItem = await handleRecognitionActions(context);
						break;
					default:
						throw new NodeOperationError(this.getNode(), `Unsupported resource: ${resource}`);
				}

				returnData.push(responseItem);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: (error as Error).message,
						},
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
