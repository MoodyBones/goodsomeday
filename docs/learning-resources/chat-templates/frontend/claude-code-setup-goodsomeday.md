# Claude Code Context Primer - Goodsomeday Frontend Extension

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

## Additional Context for Goodsomeday Frontend

**IMPORTANT:** Add this section to the copy-paste prompt above when working on frontend:

```
---

## Goodsomeday Frontend Specific Context

TECH STACK:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components (https://ui.shadcn.com)
- Mock data for now (backend integration later)

DESIGN SYSTEM (from Figma):
- Colors: Black (#000000), Golden Yellow (#F9D762), White (#FFFFFF), Grey (#F5F5F5)
- Spacing: 8px base unit (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px)
- Typography: Sans-serif, 16px base, 1.5 line-height
- Dark mode: Supported with theme toggle

LAYOUT STRUCTURE (IMPORTANT):
- Desktop: Sidebar (240px fixed left) + main content (max 840px)
- Mobile: Filters stacked above content (no sidebar, accordions closed by default)
- Story cards: VERTICAL stack (NOT grid)
- Header: Black background, white text, navigation right-aligned
- Hero: Golden yellow full-width, outline button
- Footer: Black background, theme toggle on right

KEY COMPONENTS ALREADY DESIGNED:
1. StoryCard - White background, 12px border radius, NO shadows
   - Badge (pipeline stage) - different colors per stage
   - Story text - readable with good line-height
   - Timestamp - subtle, bottom right
   
2. Sidebar filters - Collapsible sections, yellow headers when open
   - Focus area (High School, University, Mid Career)
   - Story themes (Career Change, First Job, etc.)
   - Industry (Technology, Healthcare, etc.)
   
3. Hero - Yellow background, large heading (72px), outline button
4. Search bar - Full width before two-column layout starts

ACCESSIBILITY REQUIREMENTS:
- WCAG AA contrast
- Keyboard navigation with focus states
- Semantic HTML
- ARIA labels
- Never color alone to convey info
- Min 44px touch targets

ADDITIONAL RED FLAGS FOR GOODSOMEDAY:
❌ Suggests design changes without asking
❌ Makes cards a grid layout (they're vertical stack!)
❌ Adds shadows to cards (design has NO shadows)
❌ Shows sidebar on mobile (should be stacked accordions)
❌ Makes mobile accordions open by default (closed by default!)

---

CURRENT STATE CHECK:
Before suggesting anything, please:
1. Check git log to see what's already implemented
2. Look for existing components in src/components/
3. Check if shadcn components are already installed
4. Review package.json for dependencies
5. Check Tailwind config for color tokens

Then tell me what you found and what's left to build.
```

---

### Example: Good Goodsomeday Frontend Response

```
User: "Help me with GOO-16: StoryCard"

Claude Code:
"Let me check current state first...

[reads git log, checks src/components/]

I see:
- Next.js initialized ✅
- shadcn/ui Card component installed ✅
- Tailwind config has your colors ✅
- No StoryCard component yet

Your Figma shows:
- White background card
- No shadows (unlike default shadcn Card)
- 12px border radius
- Badge, text, timestamp
- Vertical stack in feed

Questions before I build:
1. Do you want me to override shadcn Card styling to remove shadows?
2. Badge colors - should I create custom variants or use Tailwind directly?
3. Text truncation - line-clamp-6 good, or different?

Once you confirm, I'll build and test with your mock data."
```

---

## Related Documentation

- foundation.md - Full project approach
- schema-design-philosophy.md - Example of product-first thinking
- 07-strategic-prompting.md - How to get the most from Claude Code
- strategic-build-plan.md - Goodsomeday high-level roadmap
- visual-design-mapping.md - Figma design specifications

---

*Original created: 2025-10-20*
*Goodsomeday extension added: 2025-11-05*
*Use this at the START of EVERY Claude Code session*
*Saves 30+ minutes of context correction per session*
