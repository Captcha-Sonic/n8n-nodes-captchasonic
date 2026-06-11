import { INodeProperties } from 'n8n-workflow';
import { resourceToken } from '../config';

/**
 * Optional/advanced field definitions shared across operations.
 * Shown as a collection that users can expand for advanced configuration.
 */
export const optionalDescriptions: INodeProperties[] = [
	{
		displayName: 'Optional Fields',
		name: 'optional',
		type: 'collection',
		placeholder: 'Add Optional Field',
		default: {},
		displayOptions: {
			show: {
				resource: [resourceToken],
			},
		},
		options: [
			{
				displayName: 'API Domain',
				name: 'apiDomain',
				type: 'string',
				default: '',
				description: 'Custom API domain for reCAPTCHA (e.g. "recaptcha.net")',
			},
			{
				displayName: 'CData',
				name: 'cdata',
				type: 'string',
				default: '',
				description: 'Custom data parameter for the CAPTCHA',
			},
			{
				displayName: 'Cookies',
				name: 'cookies',
				type: 'string',
				default: '',
				description: 'Cookies string to include with the solve request',
			},
			{
				displayName: 'Enterprise Payload (JSON)',
				name: 'enterprisePayload',
				type: 'string',
				default: '',
				description: 'Enterprise payload as JSON string (will be parsed)',
			},
			{
				displayName: 'Is Invisible',
				name: 'isInvisible',
				type: 'boolean',
				default: false,
				description: 'Whether the reCAPTCHA v2 is invisible',
			},
			{
				displayName: 'Min Score',
				name: 'minScore',
				type: 'number',
				default: 0.7,
				typeOptions: {
					minValue: 0.1,
					maxValue: 0.9,
					numberPrecision: 1,
				},
				description: 'Minimum score for reCAPTCHA v3 (0.1 to 0.9)',
			},
			{
				displayName: 'Page Action',
				name: 'action',
				type: 'string',
				default: '',
				description: 'The action parameter for reCAPTCHA v3 (e.g. "submit", "login")',
			},
		],
	},
];
