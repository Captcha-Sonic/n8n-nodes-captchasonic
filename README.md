# CaptchaSonic — AI CAPTCHA Solver Node for n8n Workflow Automation

[![npm version](https://img.shields.io/npm/v/n8n-nodes-captchasonic)](https://www.npmjs.com/package/n8n-nodes-captchasonic)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-captchasonic)](https://www.npmjs.com/package/n8n-nodes-captchasonic)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![n8n community node](https://img.shields.io/badge/n8n-community%20node-ff6d5a)](https://www.npmjs.com/package/n8n-nodes-captchasonic)

> **Solve any CAPTCHA inside n8n** — reCAPTCHA v2/v3, Cloudflare Turnstile, GeeTest, AWS WAF, DataDome, TikTok, and 20+ more types. AI-powered, no proxies required.

**CaptchaSonic** is the official n8n community node for automated CAPTCHA solving. It integrates directly into your n8n workflows to handle reCAPTCHA v2, reCAPTCHA v3, reCAPTCHA Enterprise, PopularCaptcha, Cloudflare Turnstile, GeeTest V3/V4, DataDome Slider, AWS WAF, MTCaptcha, Tencent CAPTCHA, CaptchaFox, Prosopo/Procaptcha, and image recognition (OCR, classification) — all without writing code.

---

## ⚡ Quick Start

### Install in n8n (30 seconds)

1. Open n8n → **Settings** → **Community Nodes** → **Install**
2. Enter `n8n-nodes-captchasonic`
3. Click **Install** — done!

Or follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/).

### Get Your API Key

1. Sign up at **[my.captchasonic.com](https://my.captchasonic.com)** (free credits included)
2. Copy your API key from the dashboard
3. In n8n → **Credentials** → **New** → **CaptchaSonic API** → paste key → **Save**

### Solve Your First CAPTCHA

```
Manual Trigger → CaptchaSonic → HTTP Request
```

1. Add a **CaptchaSonic** node
2. Set **Resource** = `Token`, **Operation** = `reCAPTCHA v2`
3. Enter the target site URL and site key
4. Execute — get back a solved token in seconds

---

## 🆚 Why CaptchaSonic for n8n?

| Feature | CaptchaSonic | CapSolver | 2Captcha | Anti-Captcha |
|:---|:---:|:---:|:---:|:---:|
| **Official n8n node** | ✅ | ✅ | ❌ | ❌ |
| **ProxyLess solving** | ✅ | ✅ | ⚠️ Limited | ⚠️ Limited |
| **reCAPTCHA v2/v3** | ✅ | ✅ | ✅ | ✅ |
| **reCAPTCHA Enterprise** | ✅ | ✅ | ⚠️ Partial | ✅ |
| **Cloudflare Turnstile** | ✅ | ✅ | ⚠️ Partial | ⚠️ Partial |
| **GeeTest V4** | ✅ | ✅ | ⚠️ Partial | ❌ |
| **AWS WAF** | ✅ | ✅ | ❌ | ❌ |
| **DataDome** | ✅ | ✅ | ❌ | ❌ |
| **Prosopo / Procaptcha** | ✅ | ❌ | ❌ | ❌ |
| **TikTok CAPTCHA** | ✅ | ❌ | ❌ | ❌ |
| **Image classification** | ✅ | ✅ | ✅ | ✅ |
| **AI-powered engine** | ✅ | ✅ | ❌ | ❌ |
| **Ready-made workflow templates** | ✅ | ✅ | ❌ | ❌ |
| **Avg. solve time** | ~8s | ~12s | ~20s | ~15s |

---

## 🎯 Supported CAPTCHA Types

### Token-Based (Async Polling)

The node creates a task, polls every 3 seconds, and returns the solved token. Timeout: 120 seconds.

| CAPTCHA Type | Task Types | Proxy Required? |
|:---|:---|:---:|
| **reCAPTCHA v2** | `ReCaptchaV2Task`, `ReCaptchaV2TaskProxyLess`, `ReCaptchaV2EnterpriseTask`, `ReCaptchaV2EnterpriseTaskProxyLess` | Optional |
| **reCAPTCHA v3** | `ReCaptchaV3Task`, `ReCaptchaV3TaskProxyLess`, `ReCaptchaV3EnterpriseTask`, `ReCaptchaV3EnterpriseTaskProxyLess` | Optional |
| **PopularCaptcha** | `PopularCaptchaTask`, `PopularCaptchaTaskProxyLess`, `PopularCaptchaEnterpriseTask`, `PopularCaptchaEnterpriseTaskProxyLess` | Optional |
| **Cloudflare Turnstile** | `AntiTurnstileTaskProxyLess` | No |
| **GeeTest V3** | `GeeTestTask`, `GeeTestTaskProxyLess` | Optional |
| **GeeTest V4** | `GeeTestTask`, `GeeTestTaskProxyLess` | Optional |
| **DataDome Slider** | `DatadomeSliderTask` | Yes |
| **AWS WAF** | `AntiAwsWafTask`, `AntiAwsWafTaskProxyLess` | Optional |
| **MTCaptcha** | `MtCaptchaTask`, `MtCaptchaTaskProxyLess` | Optional |
| **Tencent CAPTCHA** | `TencentTask`, `TencentTaskProxyLess` | Optional |
| **CaptchaFox** | `CaptchaFoxTask`, `CaptchaFoxTaskProxyLess` | Optional |
| **Prosopo / Procaptcha** | `ProsopoTask`, `ProsopoTaskProxyLess` | Optional |

### Image Recognition (Immediate Response)

These return the result instantly — no polling, no waiting.

| CAPTCHA Type | Task Type | Input |
|:---|:---|:---|
| **Image To Text** | `ImageToTextTask` | Base64 image |
| **reCAPTCHA v2 Classification** | `ReCaptchaV2Classification` | Image grid + question |
| **PopularCaptcha Classification** | `PopularCaptchaClassification` | Image + question + choices |
| **AWS WAF Classification** | `AwsWafClassification` | Image + question |
| **BLS / OCR** | `BLSTask` | Image(s) + module |
| **TikTok CAPTCHA** | `TikTokTask` | Image + question |
| **Binance CAPTCHA** | `BinanceTask` | Image + question |
| **Vision Engine** | `VisionEngine` | Image + prompt |

---

## 📖 Usage Examples

### Example 1: Solve reCAPTCHA v2 and Submit a Form

```
Webhook (POST) → CaptchaSonic (reCAPTCHA v2) → HTTP Request (submit form) → Respond to Webhook
```

**CaptchaSonic node config:**
- **Resource:** Token
- **Operation:** reCAPTCHA v2
- **Task Type:** `ReCaptchaV2TaskProxyLess`
- **Website URL:** `https://example.com/login`
- **Website Key:** `6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-`

**Output:** `{ "solution": { "gRecaptchaResponse": "03AGdBq25..." } }`

### Example 2: Bypass Cloudflare Turnstile Protection

```
Schedule Trigger (every 1h) → CaptchaSonic (Turnstile) → HTTP Request (access protected page) → Process Data
```

**CaptchaSonic node config:**
- **Resource:** Token
- **Operation:** Cloudflare Turnstile
- **Task Type:** `AntiTurnstileTaskProxyLess`
- **Website URL:** `https://protected-site.com`
- **Website Key:** `0x4AAAAAAA...`

### Example 3: OCR — Read Text from CAPTCHA Image

```
Manual Trigger → Set Image (base64) → CaptchaSonic (Image To Text) → Format Result
```

**CaptchaSonic node config:**
- **Resource:** Recognition
- **Operation:** Image To Text
- **Task Type:** `ImageToTextTask`
- **Image:** `{{ $json.imageBase64 }}`

**Output:** `{ "solution": { "text": "Xk9pQ2" } }`

### Example 4: Classify reCAPTCHA v2 Image Grid

```
Webhook → CaptchaSonic (reCAPTCHA v2 Classification) → Respond to Webhook
```

**CaptchaSonic node config:**
- **Resource:** Recognition
- **Operation:** reCAPTCHA v2 Classification
- **Image:** base64-encoded 3×3 grid
- **Question:** `traffic lights`

**Output:** `{ "solution": { "objects": [true, false, true, ...] } }`

---

## 🔧 Ready-Made Workflow Templates

Import these directly into n8n — each includes a webhook endpoint, manual test trigger, and hardcoded sample images for one-click testing.

| Workflow | CAPTCHA Type | Mode | Webhook Path |
|:---|:---|:---|:---|
| [`recaptcha-v2.json`](sonic-workflows/recaptcha-v2.json) | reCAPTCHA v2 Classification | Recognition | `/solve-recaptcha-v2` |
| [`bls-ocr.json`](sonic-workflows/bls-ocr.json) | BLS / OCR | Recognition | `/solve-bls-ocr` |
| [`popularcaptcha.json`](sonic-workflows/popularcaptcha.json) | PopularCaptcha Classification | Recognition | `/solve-popularcaptcha` |
| [`mtcaptcha.json`](sonic-workflows/mtcaptcha.json) | MTCaptcha OCR | Recognition | `/solve-mtcaptcha` |
| [`tiktok.json`](sonic-workflows/tiktok.json) | TikTok CAPTCHA | Recognition | `/solve-tiktok` |

### How to Use a Template

1. Download the `.json` file
2. In n8n → **Workflows** → **Import from File**
3. Add your **CaptchaSonic API** credential to the CaptchaSonic nodes
4. Click **Manual Trigger** → **Test Workflow** to verify it works
5. Activate the webhook for production use

---

## ⚙️ Node Parameters Reference

### Token Resource

| Parameter | Required | Description |
|:---|:---:|:---|
| **Operation** | ✅ | CAPTCHA type (reCAPTCHA v2, Turnstile, etc.) |
| **Task Type** | ✅ | Specific task variant (ProxyLess, Enterprise, etc.) |
| **Website URL** | ✅ | URL of the page with the CAPTCHA |
| **Website Key** | ✅ | Site key from the CAPTCHA element |
| **Proxy** | ❌ | Proxy URL (only for non-ProxyLess types) |
| **User Agent** | ❌ | Custom user agent string |

**Optional fields** (varies by type):
- `isInvisible` — for invisible reCAPTCHA
- `apiDomain` — custom API domain
- `pageAction` — reCAPTCHA v3 action
- `minScore` — reCAPTCHA v3 minimum score
- `enterprisePayload` — Enterprise additional data

### Recognition Resource

| Parameter | Required | Description |
|:---|:---:|:---|
| **Operation** | ✅ | Recognition type (Image To Text, BLS/OCR, etc.) |
| **Task Type** | ✅ | API task type identifier |
| **Image** | ✅ | Base64-encoded CAPTCHA image |
| **Question** | ❌ | Classification question (e.g. "traffic lights") |
| **Module** | ❌ | OCR module (e.g. `bls`, `mtcaptcha`) |
| **Images 1–9** | ❌ | Additional grid images for multi-image tasks |

---

## ❓ FAQ

<details>
<summary><strong>How do I install CaptchaSonic in n8n?</strong></summary>

Go to **Settings → Community Nodes → Install**, enter `n8n-nodes-captchasonic`, and click Install. The node will appear in your node panel immediately.
</details>

<details>
<summary><strong>Do I need a proxy to solve reCAPTCHA?</strong></summary>

No. Use `ProxyLess` task types (e.g. `ReCaptchaV2TaskProxyLess`) and CaptchaSonic handles everything server-side. Proxies are only needed for `DatadomeSliderTask` and non-ProxyLess variants.
</details>

<details>
<summary><strong>How long does it take to solve a CAPTCHA?</strong></summary>

- **Token tasks:** Polled every 3s, 120s timeout. Most solve in **5–15 seconds**.
- **Recognition tasks:** Return immediately, typically **1–3 seconds**.
</details>

<details>
<summary><strong>What is the difference between Token and Recognition?</strong></summary>

- **Token** = the node solves a live CAPTCHA on a website and returns a token string (e.g. `gRecaptchaResponse`) that you submit to the target site.
- **Recognition** = the node analyzes a CAPTCHA image you provide and returns the text, classification, or object detection result immediately.
</details>

<details>
<summary><strong>Can I solve reCAPTCHA Enterprise?</strong></summary>

Yes. Use `ReCaptchaV2EnterpriseTaskProxyLess` or `ReCaptchaV3EnterpriseTaskProxyLess`. Set the `enterprisePayload` field if the site requires additional parameters.
</details>

<details>
<summary><strong>How do I solve Cloudflare Turnstile in n8n?</strong></summary>

Add a CaptchaSonic node → set **Operation** to `Cloudflare Turnstile` → set **Task Type** to `AntiTurnstileTaskProxyLess` → enter the Website URL and Website Key → execute. The node returns the Turnstile token.
</details>

<details>
<summary><strong>Does CaptchaSonic support GeeTest V4?</strong></summary>

Yes. Use **Operation** = `GeeTest V4` with `GeeTestTaskProxyLess`. Provide the `captchaId` and `websiteURL`. The node returns `captcha_id`, `lot_number`, `pass_token`, `gen_time`, and `captcha_output`.
</details>

<details>
<summary><strong>How do I solve AWS WAF CAPTCHAs?</strong></summary>

Use **Operation** = `AWS WAF` with `AntiAwsWafTaskProxyLess`. The node returns a session cookie you pass to subsequent HTTP requests via the `Cookie` header.
</details>

<details>
<summary><strong>Is there a free trial?</strong></summary>

Yes — sign up at [my.captchasonic.com](https://my.captchasonic.com) to get free credits for testing.
</details>

<details>
<summary><strong>Where do I find the Website Key for a CAPTCHA?</strong></summary>

Open the browser DevTools (F12) on the target page and search for `sitekey`, `data-sitekey`, or `data-widget-id` in the HTML. The value is typically a long alphanumeric string.
</details>

<details>
<summary><strong>Can I use this node in n8n Cloud?</strong></summary>

Yes. CaptchaSonic works on both self-hosted n8n and n8n Cloud. Install it as a community node from Settings.
</details>

<details>
<summary><strong>What happens if solving fails?</strong></summary>

The node throws an error by default. Enable **Continue On Fail** in node settings to handle errors gracefully in your workflow.
</details>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                  n8n Workflow                    │
│                                                 │
│  ┌──────────┐   ┌──────────────┐   ┌─────────┐ │
│  │ Trigger  │──▶│ CaptchaSonic │──▶│ Use     │ │
│  │ (any)    │   │    Node      │   │ Result  │ │
│  └──────────┘   └──────┬───────┘   └─────────┘ │
│                        │                         │
└────────────────────────┼─────────────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │  CaptchaSonic    │
              │  API Server      │
              │                  │
              │  ┌────────────┐  │
              │  │ AI Engine  │  │
              │  └────────────┘  │
              └──────────────────┘
```

**Token flow:** `createTask` → poll `getTaskResult` every 3s → return solution
**Recognition flow:** `createTask` → immediate result (no polling)

---

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/Captcha-Sonic/n8n-nodes-captchasonic.git
cd n8n-nodes-captchasonic

# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Lint
npm run lint
```

### Link for Local Testing

```bash
# In this project
npm link

# In your n8n installation
cd ~/.n8n/nodes
npm link n8n-nodes-captchasonic

# Restart n8n
```

---

## 📝 Resources

| Resource | Link |
|:---|:---|
| 🌐 **Website** | [captchasonic.com](https://captchasonic.com) |
| 📊 **Dashboard** | [my.captchasonic.com](https://my.captchasonic.com) |
| 📚 **API Docs** | [docs.captchasonic.com](https://docs.captchasonic.com) |
| 💬 **Discord** | [discord.captchasonic.com](https://discord.captchasonic.com) |
| ✈️ **Telegram** | [telegram.captchasonic.com](https://telegram.captchasonic.com) |
| 📦 **npm** | [npmjs.com/package/n8n-nodes-captchasonic](https://www.npmjs.com/package/n8n-nodes-captchasonic) |
| 🔗 **n8n Docs** | [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/) |

---

## 📄 License

[MIT](LICENSE.md) © [CaptchaSonic](https://captchasonic.com)

---

<p align="center">
  <strong>Built with ❤️ by <a href="https://captchasonic.com">CaptchaSonic</a></strong><br>
  <sub>The fastest AI-powered CAPTCHA solver for n8n workflow automation</sub>
</p>
