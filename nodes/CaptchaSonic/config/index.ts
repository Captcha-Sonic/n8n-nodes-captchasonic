export const API_URL = 'https://api.captchasonic.com';
export const TIME_OUT = 120000; // 120 seconds
export const POLL_INTERVAL = 3000; // 3 seconds (matches extension behavior)

// Resource categories
export const resourceRecognition = 'Recognition';
export const resourceToken = 'Token';

// Captcha types (user-facing labels)
export enum captchaTypes {
	// Token-based
	recaptchaV2 = 'reCAPTCHA v2',
	recaptchaV3 = 'reCAPTCHA v3',
	popularCaptcha = 'PopularCaptcha',
	cloudflareTurnstile = 'Cloudflare Turnstile',
	geeTestV3 = 'GeeTest V3',
	geeTestV4 = 'GeeTest V4',
	dataDome = 'DataDome',
	awsWaf = 'AWS WAF',
	mtCaptcha = 'MTCaptcha',
	tencentCaptcha = 'Tencent CAPTCHA',
	captchaFox = 'CaptchaFox',
	prosopo = 'Prosopo / Procaptcha',

	// Recognition-based
	imageToText = 'Image To Text',
	recaptchaV2Classification = 'reCAPTCHA v2 Classification',
	popularCaptchaClassification = 'PopularCaptcha Classification',
	awsWafClassification = 'AWS WAF Classification',
	blsOcr = 'BLS / OCR',
	tikTokCaptcha = 'TikTok CAPTCHA',
	binanceCaptcha = 'Binance CAPTCHA',
	visionEngine = 'Vision Engine',
}

// Task types (API-level identifiers sent to backend)
export enum TaskTypes {
	// Token: reCAPTCHA v2
	ReCaptchaV2Task = 'ReCaptchaV2Task',
	ReCaptchaV2TaskProxyLess = 'ReCaptchaV2TaskProxyLess',
	ReCaptchaV2EnterpriseTask = 'ReCaptchaV2EnterpriseTask',
	ReCaptchaV2EnterpriseTaskProxyLess = 'ReCaptchaV2EnterpriseTaskProxyLess',

	// Token: reCAPTCHA v3
	ReCaptchaV3Task = 'ReCaptchaV3Task',
	ReCaptchaV3TaskProxyLess = 'ReCaptchaV3TaskProxyLess',
	ReCaptchaV3EnterpriseTask = 'ReCaptchaV3EnterpriseTask',
	ReCaptchaV3EnterpriseTaskProxyLess = 'ReCaptchaV3EnterpriseTaskProxyLess',

	// Token: PopularCaptcha
	PopularCaptchaTask = 'PopularCaptchaTask',
	PopularCaptchaTaskProxyLess = 'PopularCaptchaTaskProxyLess',
	PopularCaptchaEnterpriseTask = 'PopularCaptchaEnterpriseTask',
	PopularCaptchaEnterpriseTaskProxyLess = 'PopularCaptchaEnterpriseTaskProxyLess',

	// Token: Cloudflare
	AntiTurnstileTaskProxyLess = 'AntiTurnstileTaskProxyLess',

	// Token: GeeTest (V3/V4 share the same task type, version is determined by fields)
	GeeTestTask = 'GeeTestTask',
	GeeTestTaskProxyLess = 'GeeTestTaskProxyLess',

	// Token: DataDome
	DatadomeSliderTask = 'DatadomeSliderTask',

	// Token: AWS WAF
	AntiAwsWafTask = 'AntiAwsWafTask',
	AntiAwsWafTaskProxyLess = 'AntiAwsWafTaskProxyLess',

	// Token: MTCaptcha
	MtCaptchaTask = 'MtCaptchaTask',
	MtCaptchaTaskProxyLess = 'MtCaptchaTaskProxyLess',

	// Token: Tencent
	TencentTask = 'TencentTask',
	TencentTaskProxyLess = 'TencentTaskProxyLess',

	// Token: CaptchaFox
	CaptchaFoxTask = 'CaptchaFoxTask',
	CaptchaFoxTaskProxyLess = 'CaptchaFoxTaskProxyLess',

	// Token: Prosopo
	ProsopoTask = 'ProsopoTask',
	ProsopoTaskProxyLess = 'ProsopoTaskProxyLess',

	// Recognition
	ImageToTextTask = 'ImageToTextTask',
	ReCaptchaV2Classification = 'ReCaptchaV2Classification',
	PopularCaptchaClassification = 'PopularCaptchaClassification',
	AwsWafClassification = 'AwsWafClassification',
	BLSTask = 'BLSTask',
	TikTokTask = 'TikTokTask',
	BinanceTask = 'BinanceTask',
	VisionEngine = 'VisionEngine',
}
