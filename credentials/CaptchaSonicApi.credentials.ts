import {
	ICredentialType,
	INodeProperties,
	Icon,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class CaptchaSonicApi implements ICredentialType {
	name = 'captchaSonicApi';
	displayName = 'CaptchaSonic API';
	documentationUrl = 'https://docs.captchasonic.com/';
	icon = 'file:captchasonic.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
			description: 'Your CaptchaSonic API Key. Get one at https://my.captchasonic.com',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: '={{`https://api.captchasonic.com/balance?apiKey=${$credentials.apiKey}`}}',
		},
	};
}
