import { INodeProperties } from 'n8n-workflow';
import { captchaTypes, TaskTypes, resourceToken } from '../config';

/**
 * UI field definitions for Token-based captcha operations.
 * These fields are shown when the user selects Resource = "Token".
 */
export const tokenDescriptions: INodeProperties[] = [
	// ─── Task Type Dropdowns (per captcha type) ───

	// reCAPTCHA v2 task types
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.ReCaptchaV2TaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.recaptchaV2],
			},
		},
		options: [
			{ name: 'ReCaptchaV2TaskProxyLess', value: TaskTypes.ReCaptchaV2TaskProxyLess },
			{ name: 'ReCaptchaV2Task', value: TaskTypes.ReCaptchaV2Task },
			{ name: 'ReCaptchaV2EnterpriseTaskProxyLess', value: TaskTypes.ReCaptchaV2EnterpriseTaskProxyLess },
			{ name: 'ReCaptchaV2EnterpriseTask', value: TaskTypes.ReCaptchaV2EnterpriseTask },
		],
		description: 'The task type. Use ProxyLess variants if you don\'t have a proxy.',
	},

	// reCAPTCHA v3 task types
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.ReCaptchaV3TaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.recaptchaV3],
			},
		},
		options: [
			{ name: 'ReCaptchaV3TaskProxyLess', value: TaskTypes.ReCaptchaV3TaskProxyLess },
			{ name: 'ReCaptchaV3Task', value: TaskTypes.ReCaptchaV3Task },
			{ name: 'ReCaptchaV3EnterpriseTaskProxyLess', value: TaskTypes.ReCaptchaV3EnterpriseTaskProxyLess },
			{ name: 'ReCaptchaV3EnterpriseTask', value: TaskTypes.ReCaptchaV3EnterpriseTask },
		],
		description: 'The task type for reCAPTCHA v3',
	},

	// PopularCaptcha task types
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.PopularCaptchaTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.popularCaptcha],
			},
		},
		options: [
			{ name: 'PopularCaptchaTaskProxyLess', value: TaskTypes.PopularCaptchaTaskProxyLess },
			{ name: 'PopularCaptchaTask', value: TaskTypes.PopularCaptchaTask },
			{ name: 'PopularCaptchaEnterpriseTaskProxyLess', value: TaskTypes.PopularCaptchaEnterpriseTaskProxyLess },
			{ name: 'PopularCaptchaEnterpriseTask', value: TaskTypes.PopularCaptchaEnterpriseTask },
		],
		description: 'The task type for PopularCaptcha',
	},

	// Cloudflare Turnstile
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.AntiTurnstileTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.cloudflareTurnstile],
			},
		},
		options: [
			{ name: 'AntiTurnstileTaskProxyLess', value: TaskTypes.AntiTurnstileTaskProxyLess },
		],
		description: 'The task type for Cloudflare Turnstile',
	},

	// GeeTest (V3 and V4 share the same task types)
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.GeeTestTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.geeTestV3, captchaTypes.geeTestV4],
			},
		},
		options: [
			{ name: 'GeeTestTaskProxyLess', value: TaskTypes.GeeTestTaskProxyLess },
			{ name: 'GeeTestTask', value: TaskTypes.GeeTestTask },
		],
		description: 'The task type for GeeTest. V3/V4 is determined by the fields you provide.',
	},

	// DataDome
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.DatadomeSliderTask,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.dataDome],
			},
		},
		options: [
			{ name: 'DatadomeSliderTask', value: TaskTypes.DatadomeSliderTask },
		],
		description: 'The task type for DataDome',
	},

	// AWS WAF
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.AntiAwsWafTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.awsWaf],
			},
		},
		options: [
			{ name: 'AntiAwsWafTaskProxyLess', value: TaskTypes.AntiAwsWafTaskProxyLess },
			{ name: 'AntiAwsWafTask', value: TaskTypes.AntiAwsWafTask },
		],
		description: 'The task type for AWS WAF',
	},

	// MTCaptcha
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.MtCaptchaTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.mtCaptcha],
			},
		},
		options: [
			{ name: 'MtCaptchaTaskProxyLess', value: TaskTypes.MtCaptchaTaskProxyLess },
			{ name: 'MtCaptchaTask', value: TaskTypes.MtCaptchaTask },
		],
		description: 'The task type for MTCaptcha',
	},

	// Tencent CAPTCHA
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.TencentTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.tencentCaptcha],
			},
		},
		options: [
			{ name: 'TencentTaskProxyLess', value: TaskTypes.TencentTaskProxyLess },
			{ name: 'TencentTask', value: TaskTypes.TencentTask },
		],
		description: 'The task type for Tencent CAPTCHA',
	},

	// CaptchaFox
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.CaptchaFoxTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.captchaFox],
			},
		},
		options: [
			{ name: 'CaptchaFoxTaskProxyLess', value: TaskTypes.CaptchaFoxTaskProxyLess },
			{ name: 'CaptchaFoxTask', value: TaskTypes.CaptchaFoxTask },
		],
		description: 'The task type for CaptchaFox',
	},

	// Prosopo / Procaptcha
	{
		displayName: 'Task Type',
		name: 'type',
		type: 'options',
		default: TaskTypes.ProsopoTaskProxyLess,
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.prosopo],
			},
		},
		options: [
			{ name: 'ProsopoTaskProxyLess', value: TaskTypes.ProsopoTaskProxyLess },
			{ name: 'ProsopoTask', value: TaskTypes.ProsopoTask },
		],
		description: 'The task type for Prosopo / Procaptcha',
	},

	// ─── Common Fields (shown for all Token operations) ───

	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [resourceToken],
			},
		},
		description: 'The URL of the page where the CAPTCHA is located',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [
					captchaTypes.recaptchaV2,
					captchaTypes.recaptchaV3,
					captchaTypes.popularCaptcha,
					captchaTypes.cloudflareTurnstile,
					captchaTypes.awsWaf,
					captchaTypes.mtCaptcha,
					captchaTypes.tencentCaptcha,
					captchaTypes.captchaFox,
					captchaTypes.prosopo,
				],
			},
		},
		description: 'The sitekey / website key for the CAPTCHA widget',
	},
	{
		displayName: 'Proxy',
		name: 'proxy',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
			},
		},
		description:
			'Proxy in the format protocol://user:password@host:port (e.g. http://user:pass@1.2.3.4:8080). Required for non-ProxyLess task types.',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
			},
		},
		description: 'Browser User-Agent string to use when solving',
	},

	// ─── GeeTest-specific Fields ───

	{
		displayName: 'GT (GeeTest Key)',
		name: 'gt',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.geeTestV3],
			},
		},
		description: 'The gt parameter from the GeeTest widget',
	},
	{
		displayName: 'Challenge',
		name: 'challenge',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.geeTestV3],
			},
		},
		description: 'The challenge parameter from GeeTest V3',
	},
	{
		displayName: 'Website Key',
		name: 'captchaId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.geeTestV4],
			},
		},
		description: 'The captcha_id (website key) parameter from GeeTest V4',
	},

	// ─── DataDome-specific Fields ───

	{
		displayName: 'Captcha URL',
		name: 'captchaUrl',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [resourceToken],
				operation: [captchaTypes.dataDome],
			},
		},
		description: 'The full URL of the DataDome CAPTCHA page',
	},
];
