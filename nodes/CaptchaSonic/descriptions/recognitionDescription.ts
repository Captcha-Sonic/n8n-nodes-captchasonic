import { INodeProperties } from 'n8n-workflow';
import { captchaTypes, TaskTypes, resourceRecognition } from '../config';

/**
 * UI field definitions for Recognition-based captcha operations.
 * These fields are shown when the user selects Resource = "Recognition".
 */
export const recognitionDescriptions: INodeProperties[] = [
	// ─── Task Type Dropdowns (per captcha type) ───

	// ImageToText
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.ImageToTextTask,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.imageToText],
			},
		},
		options: [
			{ name: 'Image to Text', value: TaskTypes.ImageToTextTask },
		],
		description: 'OCR task type for converting image to text',
	},

	// reCAPTCHA v2 Classification
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.ReCaptchaV2Classification,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.recaptchaV2Classification],
			},
		},
		options: [
			{ name: 'reCAPTCHA V2 Classification', value: TaskTypes.ReCaptchaV2Classification },
		],
		description: 'Classification task for reCAPTCHA v2 image challenges',
	},

	// PopularCaptcha Classification
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.PopularCaptchaClassification,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.popularCaptchaClassification],
			},
		},
		options: [
			{ name: 'PopularCaptcha Classification', value: TaskTypes.PopularCaptchaClassification },
		],
		description: 'Classification task for PopularCaptcha image challenges',
	},

	// AWS WAF Classification
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.AwsWafClassification,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.awsWafClassification],
			},
		},
		options: [
			{ name: 'AWS WAF Classification', value: TaskTypes.AwsWafClassification },
		],
		description: 'Classification task for AWS WAF challenges',
	},

	// BLS / OCR
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.BLSTask,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.blsOcr],
			},
		},
		options: [
			{ name: 'BLS / OCR', value: TaskTypes.BLSTask },
		],
		description: 'OCR task for BLS and similar text CAPTCHAs',
	},

	// TikTok CAPTCHA
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.TikTokTask,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.tikTokCaptcha],
			},
		},
		options: [
			{ name: 'TikTok CAPTCHA', value: TaskTypes.TikTokTask },
		],
		description: 'Recognition task for TikTok CAPTCHAs (slide, circle, click)',
	},

	// Binance CAPTCHA
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.BinanceTask,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.binanceCaptcha],
			},
		},
		options: [
			{ name: 'Binance CAPTCHA', value: TaskTypes.BinanceTask },
		],
		description: 'Recognition task for Binance puzzle CAPTCHAs',
	},

	// Vision Engine
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.VisionEngine,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [captchaTypes.visionEngine],
			},
		},
		options: [
			{ name: 'Vision Engine', value: TaskTypes.VisionEngine },
		],
		description: 'AI vision engine for complex image challenges',
	},

	// ─── Common Recognition Fields ───

	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
			},
		},
		description: 'The URL of the page where the CAPTCHA is located (optional for some task types)',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
			},
		},
		description: 'The sitekey / website key for the CAPTCHA widget (if applicable)',
	},

	// ─── Image Fields ───

	{
		displayName: 'Image (Base64)',
		name: 'image',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
			},
		},
		description: 'Base64-encoded image of the CAPTCHA to solve',
	},
	{
		displayName: 'Image Background (Base64)',
		name: 'imageBackground',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
					captchaTypes.tikTokCaptcha,
					captchaTypes.binanceCaptcha,
				],
			},
		},
		description: 'Base64-encoded background image (for slide CAPTCHAs)',
	},
	{
		displayName: 'Question',
		name: 'question',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
			},
		},
		description: 'The question or instruction text for the CAPTCHA (e.g. "Select all images with cars")',
	},
	{
		displayName: 'Module',
		name: 'module',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.imageToText,
					captchaTypes.blsOcr,
				],
			},
		},
		description: 'OCR module name (e.g. "bls", "amazon", "probot")',
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
			},
		},
		description: 'Raw body data (if applicable)',
	},

	// ─── Multi-Image Fields (for grid challenges) ───

	{
		displayName: 'Image 1 (Base64)',
		name: 'images 1',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 1',
	},
	{
		displayName: 'Image 2 (Base64)',
		name: 'images 2',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 2',
	},
	{
		displayName: 'Image 3 (Base64)',
		name: 'images 3',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 3',
	},
	{
		displayName: 'Image 4 (Base64)',
		name: 'images 4',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 4',
	},
	{
		displayName: 'Image 5 (Base64)',
		name: 'images 5',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 5',
	},
	{
		displayName: 'Image 6 (Base64)',
		name: 'images 6',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 6',
	},
	{
		displayName: 'Image 7 (Base64)',
		name: 'images 7',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 7',
	},
	{
		displayName: 'Image 8 (Base64)',
		name: 'images 8',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 8',
	},
	{
		displayName: 'Image 9 (Base64)',
		name: 'images 9',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceRecognition],
				operation: [
					captchaTypes.recaptchaV2Classification,
					captchaTypes.popularCaptchaClassification,
					captchaTypes.awsWafClassification,
				],
			},
		},
		description: 'Base64-encoded grid image 9',
	},
];
