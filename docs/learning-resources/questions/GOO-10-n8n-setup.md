# GOO-10: n8n Setup - Active Recall Questions

**Purpose:** Spaced repetition learning for n8n installation, reverse proxy, and SSL concepts.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the server configuration or documentation.

---

## Question 1: The Reverse Proxy Mental Model

**Scenario:** You're explaining to a frontend dev friend why you needed Nginx when n8n already runs on port 5678.

Walk through the architecture:
1. Draw (or describe) the flow: `https://n8n.goodsomeday.com` → what happens at each step until it reaches n8n?
2. What is Nginx actually doing here? Why not just access `http://72.60.78.175:5678` directly?
3. You had to stop Docker because it was using port 80. Why does Nginx need port 80 AND port 443?
4. What's the difference between a reverse proxy and a forward proxy?

**Extension:** How does this setup allow you to run multiple services (n8n now, Next.js later) on the same VPS?

---

## Question 2: SSL/TLS and Let's Encrypt

**Scenario:** A non-technical friend asks, "What's the padlock icon in the browser and why did you need Certbot?"

Explain without looking:
1. What does SSL/TLS actually do? (Use a real-world analogy)
2. Why did Certbot need your domain name to work? Why couldn't it work with just an IP address?
3. SSL certificates expire every 90 days with Let's Encrypt. How does renewal work? What command did you run to test it?
4. Before SSL was configured, n8n was accessible via HTTP. What security risks did that create?

**Bonus:** The Nginx config has both a `:443` block and a `:80` block. What does the `:80` block do?

---

## Question 3: Process Management and Auto-Start

**Scenario:** Your VPS just rebooted (power outage, updates, whatever). How does n8n come back online automatically?

Map out the chain:
1. What is PM2's job? Why not just run `n8n start` and leave it?
2. What's the difference between running n8n under your user vs. running it as a systemd service?
3. You ran `pm2 startup` which created `pm2-mel.service`. Walk through what happens when the server boots:
   - What starts first?
   - What starts PM2?
   - How does PM2 know to start n8n?
4. You ran `pm2 save` - what did that actually save and where?

**Challenge:** If n8n crashes, what happens? If the whole server crashes and reboots, what happens?

---

## Self-Assessment

After answering, rate yourself:
- ✅ **Confident:** Could explain to someone else
- 🤔 **Partial:** Got the concept but missed details
- ❌ **Unclear:** Need to review the material

**Review schedule:**
- First review: Tomorrow (24 hours)
- Second review: 3 days after completion
- Third review: 1 week after completion
- Fourth review: 1 month after completion

---

## Learning Notes Space

Use this space to write down what you learned from attempting these questions:

**What I understood well:**
-

**What I need to review:**
-

**Resources to check:**
-

---

*Created: 2025-10-15*
*Ticket: GOO-10 - Install and configure n8n*
*Related docs: foundation.md, n8n documentation*
