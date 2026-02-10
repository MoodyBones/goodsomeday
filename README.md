# Oolong

Clinical archive of career barriers and transformations. Data collection that feeds [Steep's](https://github.com/MoodyBones/meljonesai) job matching engine.

"Spill the tea."

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://goodsomeday.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## What is this?

Oolong collects real career stories — not inspiration, pattern recognition. Each story follows a four-stage arc:

1. **Barrier** — What happened. The wall you hit.
2. **Reflection** — What you noticed. How your thinking shifted.
3. **Action** — What you did about it.
4. **Transformation** — What changed.

Stories are categorised by pipeline stage: **Student**, **Early Career** (0–5 yrs), **Mid-Career** (5+ yrs). Anonymous by default. Identity only collected if you opt to make your story public.

**Inspired by:** Australia's [Leaky Pipeline Report](https://www.vic.gov.au/leaky-tech-pipeline-report) — where we lose women in tech careers.

---

## Current state

### Landing page (`/`) — shipped
- Mirror Selector: pick a career stage, see a matched story fragment
- Story browse: all stories with barrier/reflection/action/transformation arcs
- CTA to submit flow

### Interactive submit (`/submit`) — Phase 1 complete
Chat-style story submission. A Story Coach guides you through telling your career story using motivational interviewing (OARS). Mobile-first, looks like a messaging app.

| Step | What happens |
|------|-------------|
| Pipeline + Pronouns | Select career stage, enter pronouns |
| Barrier | Coach prompts, you write, coach reflects back |
| Reflection | Same pattern |
| Action | Same pattern |
| Transformation | Same pattern |
| Review | Structured story displayed, consent checkbox, optional public toggle |

Currently running with mock responses (canned, 800ms delay). Gemini integration is Phase 2.

**Key details:**
- Forward-only flow (no going back)
- Help button during coached steps (Socratic questioning)
- `useReducer` state machine — all state is page-local
- Anonymous by default — name/email only collected if user toggles "make public"

### Not yet built
- **Phase 2:** Gemini API integration (Story Coach + Story Structurer agents)
- **Phase 3:** PostgreSQL submission storage
- Push to Steep integration
- User auth
- Story moderation

---

## Tech stack

| Layer | Tool |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| AI (planned) | [Gemini API](https://ai.google.dev/) (REST, no SDK) |
| Hosting | [Vercel](https://vercel.com/) |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Design tokens + Tailwind theme
│   ├── page.tsx                # Landing page
│   └── submit/
│       └── page.tsx            # Interactive submit (ChatShell)
├── components/
│   ├── ui/                     # shadcn primitives (button, card, input, etc.)
│   └── features/
│       ├── MirrorSelector.tsx  # Stage picker on landing page
│       ├── StoryCard.tsx       # Story display card
│       ├── StoryFragment.tsx   # Single stage fragment
│       └── submit/             # Chat submission components
│           ├── ChatShell.tsx   # Main orchestrator (owns useReducer)
│           ├── ChatBubble.tsx  # Coach/user message bubbles
│           ├── ChatInput.tsx   # Auto-growing textarea + send
│           ├── ChatMessageList.tsx
│           ├── PipelineSelect.tsx
│           ├── StoryReview.tsx
│           ├── StageProgress.tsx
│           ├── HelpButton.tsx
│           └── TypingIndicator.tsx
├── hooks/
│   └── use-chat-reducer.ts    # Chat state machine
├── lib/
│   ├── utils.ts               # cn() helper
│   └── mock-coach.ts          # Canned responses for Phase 1
├── types/
│   ├── story.ts               # StoryStage, Story, StorySubmission
│   └── chat.ts                # ChatStep, ChatState, ChatMessage
└── data/
    └── stories.ts             # Seed stories
```

---

## Local development

```bash
git clone https://github.com/MoodyBones/goodsomeday.git
cd goodsomeday
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Navigate to `/submit` to test the interactive flow.

---

## Design tokens

Defined in `src/app/globals.css` using Tailwind v4 `@theme inline`:

| Token | Value | Usage |
|-------|-------|-------|
| `--golden` | `#F9D762` | Accent, user chat bubbles, CTAs |
| `--surface` | `#f5f5f5` | Coach chat bubbles, section backgrounds |
| `--primary` | `#000000` | Text, buttons |
| `--muted-foreground` | `#4d4d4d` | Secondary text |

---

## Architecture: Two-Agent Arc

Adapted from [Steep's two-agent pattern](https://github.com/MoodyBones/meljonesai/tree/main/.gemini).

**Agent 1 — Story Coach (The Inquisitor):** Real-time conversational agent. Guides users through 4 story stages using motivational interviewing (OARS). Listens, acknowledges, reflects back. Doesn't lecture.

**Agent 2 — Story Structurer (The Architect):** Post-submission agent. Takes raw responses and structures them into clean Barrier/Reflection/Action/Transformation format. Applies the Grounded Constitution: direct, preserves voice, no additions.

See [`docs/prd-interactive-submit.md`](docs/prd-interactive-submit.md) for the full spec and [`docs/strategy-oolong-steep.md`](docs/strategy-oolong-steep.md) for how Oolong feeds into Steep.

---

## Docs

| Document | What it covers |
|----------|---------------|
| [`docs/prd-interactive-submit.md`](docs/prd-interactive-submit.md) | Full PRD for the chat submission flow |
| [`docs/strategy-oolong-steep.md`](docs/strategy-oolong-steep.md) | How Oolong + Steep work together |
| [`docs/glossary.md`](docs/glossary.md) | Project terminology in plain language |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | Version history |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | System architecture |
| [`docs/learning-resources/`](docs/learning-resources/) | Active recall questions, learning journal |
| [`docs/updates/`](docs/updates/) | Session reflections and progress updates |

---

## Contributing

This is a learning project built in public. Feedback welcome.

1. Check existing issues or create a new one
2. Fork the repo
3. Create a feature branch (`git checkout -b feature/your-feature`)
4. Commit with conventional commits (`feat:`, `fix:`, `docs:`)
5. Open a Pull Request

---

## License

MIT — see [LICENSE](LICENSE).

---

**Mel Jones** ([@MoodyBones](https://github.com/MoodyBones)) — Melbourne, Australia
