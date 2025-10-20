# GOO-12: Database Schema Design

This one was different. Not just "run these commands" - this required thinking about what the product actually *is*.

## Day 1: Design & Documentation (19 Oct)

Started by going deep on product vision. Wrote a whole philosophy document (468 lines) because I realized: the schema design reveals whether you understand your own product. Get this wrong and you're building storage for trauma dumps. Get it right and you're building a reframing tool.

The big design decision: one `story_text` field vs. four separate fields (barrier, reflection, action, transformation). Chose one field because stories need to flow as narratives, not read like forms. The frontend will guide the structure through prompts, but the backend stores cohesive stories. Readers shouldn't see seams.

Added `current_status` (stayed in tech / left tech / still navigating) as optional metadata. Carefully designed the UX: asked AFTER the story is written, framed as reflection not categorization, "prefer not to say" option, doesn't affect display. Both paths are valid. The question serves the storytelling - if answering makes someone realize they need to refine their story, going back is *working as intended*.

Pipeline stages: student, early_career, mid_career. Resisted the urge to add more categories. Three stages = clear patterns. Ten stages = fragmented noise.

**Created schema.sql (111 lines):**
- `stories` table with transformation narrative structure
- `learning_journal` table for tracking learning from each ticket
- Check constraints (story length 100-5000 chars, valid enum values)
- Indexes for performance (approved stories, pipeline filtering, recent-first sorting)
- Auto-update triggers for timestamps
- Comprehensive SQL comments documenting every decision

**Created seed-data.sql (126 lines):**
- Three transformation stories (one for each pipeline stage)
- Three learning journal entries (GOO-9, GOO-10, GOO-11)
- Verification queries to check data loaded correctly

**Created comprehensive project documentation (1782 lines across 4 files):**
- `docs/api/README.md` - Complete n8n webhook endpoint documentation
- `docs/ARCHITECTURE.md` - System architecture with ASCII diagrams and data flow
- `docs/SETUP.md` - Step-by-step VPS setup guide (consolidating GOO-9, 10, 11)
- `docs/CHANGELOG.md` - Version history from v0.1.0 to v0.3.0

**Updated README.md:**
- Clarified visual-first, AI-assisted development approach
- Explained transformation narrative model
- Made product vision explicit

**Three commits made:**
1. `docs(GOO-12): add schema design philosophy and update product vision`
2. `feat(GOO-12): create database schema for stories and learning journal`
3. `docs: add core project documentation`

## Day 2: Execution & Validation (20 Oct)

Transferred schema files to VPS and executed them on PostgreSQL database.

Hit a validation error: seed data included a short placeholder story (85 chars) that violated the 100-character minimum constraint. Rather than weaken the constraint, removed the invalid story. The constraint is protecting the product vision.

Executed `schema.sql` via psql as `goodsomeday_user`:
- Tables created successfully
- Indexes built
- Triggers configured
- Comments applied

Executed `seed-data.sql` (after fixing validation issue):
- 3 stories loaded (student, early_career, mid_career)
- 3 learning journal entries loaded (GOO-9, GOO-10, GOO-11)

Verified with queries:
- Tables exist and owned by `goodsomeday_user`
- All indexes present
- Check constraints active
- Triggers working
- Sample data displaying correctly

Schema is live. n8n workflows can now connect to it.

—

**One learning:** Database design isn't just technical - it's product strategy encoded in SQL. Every field, every constraint, every index tells a story about what you're building and who it's for. Get clear on the vision before you write `CREATE TABLE`.

**One struggle:** Initially tried to SSH and run commands without re-reading the project philosophy. Claude Code (rightfully) called me out. Needed to understand the *whole* project - the README, the schema philosophy doc, all the GitHub issues - before executing. Technical work without product context is just typing.

**One decision:** Removed the short placeholder story from seed data when it failed validation. Could have changed the constraint, but the 100-character minimum exists for a reason: transformation narratives need space to breathe. The constraint is protecting the product vision. Don't break it for convenience.

—

**Time:** ~3 hours total (documentation + schema design + execution + troubleshooting)
**Difficulty:** 3/5 (Not technically complex, but required deep product thinking)
**Next:** GOO-13 - Create n8n workflow for story submission (now the schema exists, workflows can use it)
