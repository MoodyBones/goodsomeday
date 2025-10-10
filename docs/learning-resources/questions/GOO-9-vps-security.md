# GOO-9: VPS Security - Active Recall Questions

**Purpose:** Spaced repetition learning for VPS provisioning and security hardening concepts.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the server configuration or documentation.

---

## Question 1: The Security Chain

**Scenario:** A friend asks, "Why did you disable root login AND password authentication? Isn't one enough?"

Walk through your reasoning:
1. What specific threat does disabling root login prevent?
2. What different threat does disabling password authentication prevent?
3. How do these two measures work together to create defense-in-depth?
4. What would happen if you only did one but not the other?

**Hint:** Think about brute-force attacks, privilege escalation, and the principle of least privilege.

---

## Question 2: The UFW Mental Model

**Scenario:** You need to explain to a non-technical stakeholder how UFW protects your server.

Without looking at documentation:
1. Draw (or describe) the default UFW policy you set up. What's allowed in? What's allowed out?
2. You opened ports 22, 80, and 443. For each port, explain:
   - What service uses it?
   - Why does it need to be open?
   - What would break if you closed it?
3. Someone tries to connect to port 5432 (PostgreSQL). What happens and why is this secure?

**Extension:** How does this firewall configuration support the "principle of least exposure"?

---

## Question 3: The SSH Key Architecture

**Scenario:** You're teaching someone how SSH key authentication works using a real-world analogy.

Explain without looking:
1. Where does your private key live? Where does your public key live?
2. Why can't someone else connect to your server even if they know your username?
3. Walk through what happens step-by-step when you run `ssh mel@72.60.78.175`
4. You created user `mel` and copied SSH keys with `rsync --archive --chown=mel:mel ~/.ssh /home/mel`. What exactly did this command do? Why was this necessary before disabling root login?

**Bonus:** What's the difference between this and password authentication? Why is key-based auth more secure?

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

*Created: [Date]*
*Ticket: GOO-9 - Provision and secure VPS*
*Related docs: foundation.md, VPS setup guide*
