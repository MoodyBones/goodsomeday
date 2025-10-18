# GOO-11: PostgreSQL Setup - Active Recall Questions

**Purpose:** Spaced repetition learning for PostgreSQL installation, database management, and permissions.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the server configuration or documentation.

---

## Question 1: The Database Hierarchy

**Scenario:** You're explaining to a frontend dev friend what you just set up with PostgreSQL.

Without looking, describe the hierarchy:
1. What's the difference between the PostgreSQL *server*, a *database*, and a *user*?
2. You created `goodsomeday_user` and `goodsomeday_prod`. Why create a separate user instead of just using the `postgres` superuser?
3. Walk through what happens when n8n connects to PostgreSQL using that credential you saved. What's checking the password? What database does it access?
4. You ran `GRANT ALL PRIVILEGES ON DATABASE` and then `GRANT ALL ON SCHEMA public`. Why two separate grants? What does each one do?

**Extension:** If you later need to add a `dev` database for testing, what would you create?

---

## Question 2: Connection Strings and Localhost

**Scenario:** A friend asks, "Why did you set the host to 'localhost' in n8n? Isn't your database on the VPS?"

Explain without looking:
1. Where is PostgreSQL running? Where is n8n running? Why can they use `localhost`?
2. What port does PostgreSQL listen on by default?
3. The `lsof` command showed PostgreSQL listening on `localhost:postgresql`. What does that mean for external connections?
4. If you wanted to connect to this database from your local computer (not the VPS), what would you need to change?

**Bonus:** Why did you disable SSL in the n8n credential settings?

---

## Question 3: Backups and Data Safety

**Scenario:** You wake up and the VPS has crashed. All data is gone. How screwed are you?

Think through the backup strategy:
1. What command creates a PostgreSQL backup? What file does it produce?
2. The backup file is a `.sql` file. What's actually in there? (Hint: it's not a binary format)
3. Your backup strategy stores backups on the same VPS. What's the problem with this approach?
4. You documented a future automation using cron. Explain what `0 2 * * *` means in a cron schedule.

**Challenge:** If you had to restore a backup right now, walk through the exact commands you'd run.

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

*Created: 2025-10-18*
*Ticket: GOO-11 - Set up PostgreSQL database*
*Related docs: foundation.md, BACKUP-STRATEGY.md*
