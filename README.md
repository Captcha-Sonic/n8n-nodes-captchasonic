# CaptchaSonic n8n Node — AI CAPTCHA Solver for Workflow Automation

[![npm version](https://img.shields.io/npm/v/n8n-nodes-captchasonic)](https://www.npmjs.com/package/n8n-nodes-captchasonic)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-captchasonic)](https://www.npmjs.com/package/n8n-nodes-captchasonic)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

**CaptchaSonic** is the official n8n community node for AI-powered CAPTCHA solving. It supports reCAPTCHA v2/v3, PopularCaptcha, Cloudflare Turnstile, GeeTest V3/V4, DataDome, AWS WAF, and 15+ more types — directly inside your n8n automation workflows. No proxies needed for ProxyLess task types.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Or install directly in n8n:
1. Go to **Settings → Community Nodes → Install**
2. Enter `n8n-nodes-captchasonic`
3. Click Install

## Credentials

You need a CaptchaSonic API key to use this node.

1. Register for an account at [my.captchasonic.com](https://my.captchasonic.com)
2. Copy your API key from the dashboard
3. In n8n, go to **Credentials → New → CaptchaSonic API**
4. Paste your API key and save

## Why CaptchaSonic vs Other n8n CAPTCHA Nodes?

| Feature | CaptchaSonic | Traditional Solvers | API-based Solvers |
|---|:---:|:---:|:---:|
| ProxyLess task types | ✅ | ✅ | ✅ |
| GeeTest V4 | ✅ | ⚠️ Partial | ✅ |
| Cloudflare Turnstile | ✅ | ⚠️ Partial | ✅ |
| AWS WAF | ✅ | ❌ | ⚠️ Partial |
| Prosopo / Procaptcha | ✅ | ❌ | ❌ |
| AI-powered solving engine | ✅ | ❌ | ❌ |
| Official n8n integration | ✅ | Community | Community |

## 🎯 Supported CAPTCHA Types

### Token (Async Polling)

These captcha types return a token after solving. The node creates a task and polls until the solution is ready.

| CAPTCHA Type | Task Types |
|:---|:---|
| reCAPTCHA v2 | `ReCaptchaV2Task`, `ReCaptchaV2TaskProxyLess`, Enterprise variants |
| reCAPTCHA v3 | `ReCaptchaV3Task`, `ReCaptchaV3TaskProxyLess`, Enterprise variants |
| PopularCaptcha | `PopularCaptchaTask`, `PopularCaptchaTaskProxyLess`, Enterprise variants |
| Cloudflare Turnstile | `AntiTurnstileTaskProxyLess` |
| GeeTest V3 | `GeeTestV3Task`, `GeeTestV3TaskProxyLess` |
| GeeTest V4 | `GeeTestV4Task`, `GeeTestV4TaskProxyLess` |
| DataDome | `DatadomeSliderTask` |
| AWS WAF | `AntiAwsWafTask`, `AntiAwsWafTaskProxyLess` |
| MTCaptcha | `MtCaptchaTask`, `MtCaptchaTaskProxyLess` |
| Tencent CAPTCHA | `TencentTask`, `TencentTaskProxyLess` |
| CaptchaFox | `CaptchaFoxTask`, `CaptchaFoxTaskProxyLess` |
| Prosopo / Procaptcha | `ProsopoTask`, `ProsopoTaskProxyLess` |

### Recognition (Immediate)

These captcha types return the result immediately — no polling required.

| CAPTCHA Type | Task Type |
|:---|:---|
| Image To Text | `ImageToTextTask` |
| reCAPTCHA v2 Classification | `ReCaptchaV2Classification` |
| PopularCaptcha Classification | `PopularCaptchaClassification` |
| AWS WAF Classification | `AwsWafClassification` |
| BLS / OCR | `BLSTask` |
| TikTok CAPTCHA | `TikTokTask` |
| Binance CAPTCHA | `BinanceTask` |
| Vision Engine | `VisionEngine` |

## 📖 Usage

1. Add the **CaptchaSonic** node to your workflow
2. Select the **Resource**: `Token` or `Recognition`
3. Select the **Operation**: the specific CAPTCHA type
4. Configure the required parameters (Website URL, Site Key, etc.)
5. Click **Execute step** to solve

### Example: Solve reCAPTCHA v2 in n8n

```
Manual Trigger → CaptchaSonic (reCAPTCHA v2, ProxyLess) → HTTP Request (submit form with token)
```

Configure the CaptchaSonic node:
- **Resource:** Token
- **Operation:** reCAPTCHA v2
- **Task Type:** ReCaptchaV2TaskProxyLess
- **Website URL:** `https://example.com/login`
- **Website Key:** `6Le-...` (found in page source)

The node returns `{ "token": "03AGdBq25..." }` — pass this to your next step.

## FAQ

**How do I install this node in n8n?**
Go to Settings → Community Nodes → Install, and enter `n8n-nodes-captchasonic`.

**Do I need a proxy to solve reCAPTCHA?**
No. Use the `ProxyLess` task types (e.g. `ReCaptchaV2TaskProxyLess`) and CaptchaSonic handles everything server-side.

**What CAPTCHA types are supported?**
reCAPTCHA v2/v3 (including Enterprise), PopularCaptcha, Cloudflare Turnstile, GeeTest V3/V4, DataDome, AWS WAF, MTCaptcha, TikTok CAPTCHA, Binance CAPTCHA, Prosopo, CaptchaFox, and image recognition types.

**How long does solving take?**
Token tasks are polled every 3 seconds with a 120-second timeout. Most tasks solve in under 15 seconds.

**What is the difference between Token and Recognition tasks?**
Token tasks (reCAPTCHA, PopularCaptcha, etc.) return a token string you submit to the target website. Recognition tasks (image classification, OCR) return the text or classification result immediately.

**Is there a free trial?**
Yes — register at [my.captchasonic.com](https://my.captchasonic.com) to get started.

**Where can I get my API key?**
Log in to [my.captchasonic.com](https://my.captchasonic.com) and find your API key in the dashboard.

## 📝 Resources

- [CaptchaSonic](https://captchasonic.com)
- [CaptchaSonic Dashboard](https://my.captchasonic.com)
- [CaptchaSonic Docs](https://docs.captchasonic.com)
- [Discord Community](https://discord.captchasonic.com)
- [Telegram](https://telegram.captchasonic.com)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)
