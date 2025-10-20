# Claude Code Context Primer

**When to use:** At the START of every Claude Code session, BEFORE asking for help

**Purpose:** Front-load context so Claude Code understands your project approach and doesn't waste your time

---

## Copy-Paste This Into Every New Claude Code Chat:

```
Before we start, please read and confirm you understand:

1. docs/learning-resources/foundation.md - My learning approach
2. docs/schema-design-philosophy.md - Product vision (if exists)
3. README.md - Project overview
4. Current branch commit history: git log main..HEAD --oneline

Key points about my approach:
- I'm a VISUAL learner (not step-by-step tutorial style)
- I use AI-assisted development (Claude Code generates boilerplate I don't want to write)
- I use n8n for backend (NOT hand-coded Express.js APIs)
- I access PostgreSQL via n8n nodes (NOT writing raw SQL queries)
- I focus on: frontend, accessibility, design systems
- I learn JUST ENOUGH backend to use modern tools effectively
- Tools adapt to me, not vice versa

My workflow:
- Feature branch → Document learning → PR → Merge
- Small, focused commits with good messages
- Active recall questions for spaced repetition
- Personal reflections in docs/updates/

What I need from you:
- Read context FIRST before suggesting solutions
- Check commit history to see what's already done
- Execute efficiently using my tools (don't reinvent the wheel)
- Help me document learnings (that's where the value is)
- Get out of my way for things I don't care about (backend minutiae)

What I DON'T need:
- Step-by-step tutorials on basic concepts
- "Let me teach you PostgreSQL" approach
- Slow, guided explanations of every command
- Hand-holding through things tools can do for me

Confirm you've read these docs and understand my approach before we proceed.
```

---

## Why This Matters

**Without context, Claude Code will:**
- Assume you want traditional learning (explain every step)
- Suggest hand-coded solutions instead of using your tools
- Jump to execution before understanding what's already done
- Miss that you're building in public with learning docs

**With context, Claude Code will:**
- Check commit history first
- Use your tools (n8n, Claude Code generated components)
- Focus on product/learning documentation
- Execute efficiently and get out of your way

---

## Red Flags That Claude Doesn't Have Context

If Claude says/does any of these, STOP and re-share context:

❌ "Let me guide you through this step by step"
❌ "Let me explain how PostgreSQL works"
❌ Suggests writing Express.js API routes
❌ Suggests writing raw SQL queries manually
❌ Starts executing without checking commit history
❌ Doesn't reference your foundation.md or README
❌ Treats you like a beginner learning traditional full-stack

---

## Example: Good vs Bad Claude Responses

### BAD (No Context):
```
User: "Help me with GOO-12"
Claude: "Sure! Let me teach you about database schema design.
First, let's understand what a primary key is..."
```

### GOOD (Has Context):
```
User: "Help me with GOO-12"
Claude: "Let me first check your commit history and foundation.md.
[reads context]
I see you've already created schema.sql and design philosophy doc.
What's left: execute on VPS, create learning docs. Let me help with that."
```

---

## Related Documentation

- foundation.md - Full project approach
- schema-design-philosophy.md - Example of product-first thinking
- 07-strategic-prompting.md - How to get the most from Claude Code

---

*Created: 2025-10-20*
*Use this at the START of EVERY Claude Code session*
*Saves 30+ minutes of context correction per session*
