# 🚀 HOW TO USE THIS WITH ANTIGRAVITY
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## First Time Setup (Fresh Build)

1. Open Antigravity and start a new agent session
2. Upload BOTH files:
   - `MASTER_PROMPT.md`  
   - `AI_STATE.md`
3. Type this message:
   ```
   Read AI_STATE.md first to understand the project. 
   Then read MASTER_PROMPT.md completely. 
   Then begin building from Phase 0. 
   Update AI_STATE.md after every task.
   ```
4. Let the agent work. It will build the full website step by step.

---

## If Agent Stops Mid-Build (Token Limit / Crash / Power Cut)

1. Open Antigravity, start new session
2. Upload the LATEST version of `AI_STATE.md` (agent should have updated it before stopping)
3. Type this message:
   ```
   Read AI_STATE.md. It contains the full project context and 
   the state of where the build was interrupted. Continue from 
   exactly where the NEXT ACTION field says to start. 
   Do not redo completed work.
   ```
4. Agent resumes from exactly where it stopped

---

## If You Want a Different AI Model to Continue Work

1. Export `AI_STATE.md` from your project
2. Open the new model's interface
3. Upload `AI_STATE.md` + `MASTER_PROMPT.md`
4. Type:
   ```
   You are taking over a build from another AI agent. 
   Read AI_STATE.md to understand the full context, 
   completed work, and where to continue. 
   Then read MASTER_PROMPT.md for the full specification. 
   Continue from the NEXT ACTION in AI_STATE.md.
   ```

---

## After the Build is Complete

1. Replace placeholder values in `.env.local`:
   - Your actual WhatsApp number: `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX`
   - Your Amazon Affiliate tag: `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=yourtag-21`
   - Your GA4 ID: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

2. Replace Amazon ASIN placeholders in `products.json`:
   - Find: `"B0PLACEHOLDER1"` through `"B0PLACEHOLDER20"`
   - Replace with your actual Amazon product ASINs

3. Add your product images to `/public/images/products/`

4. Deploy to Vercel:
   ```bash
   npm run build
   npx vercel --prod
   ```

5. Connect your domain in Vercel dashboard

---

## Files Reference

| File | Purpose |
|------|---------|
| `AI_STATE.md` | Agent memory — updated after every task |
| `MASTER_PROMPT.md` | Full build specification |
| `HOW_TO_USE.md` | This file — instructions for you |

---

*Keep AI_STATE.md updated and you'll never lose progress.*
