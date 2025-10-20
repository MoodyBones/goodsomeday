# GOO-12: Database Schema Design - Active Recall Questions

**Purpose:** Spaced repetition learning for database schema design, constraints, indexes, and aligning technical implementation with product vision.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the schema files or documentation.

---

## Question 1: Schema Design Philosophy

**Scenario:** A developer suggests splitting `story_text` into separate fields: `barrier`, `reflection`, `action`, `transformation`.

Explain why you designed it differently:
1. Why one `story_text` field instead of four separate fields?
2. How does the frontend guide users to follow the transformation arc if the backend doesn't enforce it structurally?
3. You included `current_status` (stayed/left tech) but not as a required field. Why is it optional? What safeguards did you build in?
4. Look at the `pipeline_stage` field. Why these three categories (student/early_career/mid_career) and not more granular ones?

**Extension:** How does this schema design support the core mission: "reframing tool, not just story collection"?

---

## Question 2: Constraints and Data Validation

**Scenario:** A story submission fails with "violates check constraint stories_story_text_check".

Debug without looking:
1. What are the three check constraints on the `stories` table? What does each one validate?
2. The seed data initially failed. What was the problem and how did you fix it?
3. Why set a minimum of 100 characters for stories? Why a maximum of 5000?
4. The `approved` field defaults to `FALSE`. Walk through the moderation workflow: what changes when a story gets approved?

**Bonus:** What happens if someone tries to insert `pipeline_stage = 'senior'`? Why?

---

## Question 3: Indexes and Performance

**Scenario:** You're explaining to your future self (in 6 months) why you added specific indexes.

Recall without looking:
1. What three indexes did you create on the `stories` table? What query pattern does each one optimize?
2. The `idx_stories_approved` has a `WHERE approved = TRUE` clause. What is this called and why is it better than indexing all rows?
3. You indexed `submitted_at DESC` (descending). Why DESC? What does that optimize?
4. The `learning_journal` has a UNIQUE constraint on `issue_id`. What would happen if you tried to insert GOO-9 twice?

**Challenge:** Imagine the stories table grows to 10,000 stories. Which queries will be fast vs slow with your current indexes?

---

## Question 4: The Learning Journal Connection

**Scenario:** You're reviewing what you built and thinking about future enhancements.

Reflect on the design:
1. The `learning_journal` table tracks your learning from Linear tickets. What fields capture "what went wrong" vs "what you learned"?
2. You included `time_estimated` and `time_actual`. Why track both? What pattern might emerge over time?
3. The `difficulty_rating` is 1-5. After completing GOO-9 (VPS), GOO-10 (n8n), GOO-11 (PostgreSQL), and now GOO-12 (schema) - which was hardest? Does that match what you estimated?
4. There's no foreign key relationship between `stories` and `learning_journal` yet. In the future, how might you connect them?

**Extension:** What story would you write about your own learning journey building this project?

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

**Aha moments from this ticket:**
-

**How this connects to product vision:**
-

**Resources to check:**
-

---

*Created: 2025-10-20*
*Ticket: GOO-12 - Design and implement database schema*
*Related docs: schema-design-philosophy.md, schema.sql, seed-data.sql*
