# Changelog

All notable changes to Oolong will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Planned
- Phase 2: Gemini API integration for Story Coach + Story Structurer
- Phase 3: PostgreSQL submission storage
- Push to Steep integration

---

## [0.6.0] - 2026-02-10

### Added — Interactive Story Submission (Phase 1)
- **Chat-style submit UI** (`/submit`) replacing the placeholder page
  - 6-step forward-only flow: pipeline → barrier → reflection → action → transformation → review
  - Mobile-first messaging interface (coach left, user right)
  - Auto-growing textarea with Enter to send, Shift+Enter for newlines
  - Help button with Socratic questioning during coached steps
  - Progress dots tracking conversation stage
  - Typing indicator animation during coach "thinking"
- **Pipeline selection card** with career stage buttons + pronouns input
- **Story review screen** with structured story display, consent checkbox, optional public toggle (reveals name + email fields)
- **Mock coach** with canned motivational interviewing responses (800ms delay)
- **Chat state machine** (`useReducer`) handling all conversation state page-locally
- **New types:** `ChatStep`, `ChatState`, `ChatMessage`, `PipelineStage`, `StorySubmission`
- **shadcn/ui components:** input, textarea, label, checkbox
- **`pb-safe` CSS utility** for iPhone safe area bottom padding

### Documentation
- Updated `docs/prd-interactive-submit.md` to reflect anonymous-first design
- PR #31: full architecture diagram, design decisions, and test plan

---

## [0.5.0] - 2026-01-29

### Added — Oolong Landing Page
- **Mirror Selector** — pick a career stage, see a matched story fragment
- **Story cards** — browsable collection with barrier/reflection/action/transformation arcs
- **Submit CTA** — links to `/submit` flow
- **Design tokens** — golden `#F9D762`, surface `#f5f5f5`, black/white palette
- **shadcn/ui setup** with Oolong design tokens (button, card variants)
- **5 seed stories** covering student, early career, and mid-career pipeline stages

### Documentation
- Strategy reference (`docs/strategy-oolong-steep.md`)
- Interactive submit PRD (`docs/prd-interactive-submit.md`)
- Project glossary (`docs/glossary.md`)
- Learning resources for GOO-6 and GOO-7

### Changed
- Rebranded from Goodsomeday to **Oolong**
- Upgraded to Next.js 16, React 19, Tailwind CSS v4

---

## [0.3.0] - 2025-10-19

### Added — Infrastructure Complete
- **VPS provisioning:** Hostinger Ubuntu 22.04, SSH key auth, UFW firewall
- **n8n installation:** Visual workflow engine with Nginx reverse proxy and SSL
- **PostgreSQL 16:** Database setup with restricted user permissions
- **PM2 process management** for n8n

### Documentation
- Backup strategy, n8n setup reflection, PostgreSQL setup reflection
- Active recall questions for GOO-9, GOO-10, GOO-11

---

## [0.2.0] - 2025-10-17

### Added — Project Foundation
- **Next.js 14 setup** with TypeScript and Tailwind CSS
- **Project structure:** components, hooks, lib, types, contexts
- **Core documentation:** README, learning resources, foundation doc
- **Development workflow:** Git branching, Linear integration, learning journal

---

## [0.1.0] - 2025-10-10

### Added — Initial Concept
- Project conception: career transformation story platform
- Inspired by Australia's Leaky Pipeline Report
- Transformation narrative arc: barrier → reflection → action → transformation
- Visual-first, AI-assisted development approach

---

## Version Summary

| Version | Date | Milestone |
|---------|------|-----------|
| 0.6.0 | 2026-02-10 | Interactive submit UI (Phase 1 — mock coach) |
| 0.5.0 | 2026-01-29 | Oolong landing page + rebrand |
| 0.3.0 | 2025-10-19 | Infrastructure (VPS, n8n, PostgreSQL) |
| 0.2.0 | 2025-10-17 | Project foundation |
| 0.1.0 | 2025-10-10 | Initial concept |

---

**Last Updated:** 10 February 2026
**Current Version:** 0.6.0 (Interactive Submit — Phase 1)
**Next:** Phase 2 (Gemini integration)
