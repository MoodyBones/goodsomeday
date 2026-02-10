# Interactive Story Submission — Phase 1

**Completed:** 2026-02-10
**PR:** #31
**Branch:** `feature/oolong-landing-page`

---

## What I Built

Replaced the `/submit` placeholder with a full chat-style story submission UI. The entire flow works with mock responses — no API key needed.

**Components built (9):**
- ChatShell (orchestrator), ChatBubble, ChatMessageList, ChatInput, PipelineSelect, StoryReview, StageProgress, HelpButton, TypingIndicator

**State management:**
- `useReducer` with 11 actions, forward-only step progression
- All state page-local — no context providers, no global store

**User flow:**
1. Coach welcomes, PipelineSelect card appears
2. User picks career stage + pronouns
3. Coach acknowledges, transitions through barrier → reflection → action → transformation
4. Each coached step: prompt → user writes → coach reflects → advance
5. Review: structured story, consent checkbox, optional public identity

## What I Learned

**`useReducer` is underrated for complex local state.** The chat flow has 11 distinct actions and a state object with 11 fields. useState would have been a mess. useReducer kept the state transitions predictable and the component logic clean. The reducer is pure — easy to test later.

**Mock-first development pays off immediately.** Building the entire UI with canned responses meant I could test the full user flow, fix layout issues, and nail the mobile experience without worrying about API integration. The mock coach took 30 minutes to write and saved hours of debugging UI + API simultaneously.

**Mobile chat UIs have specific CSS needs:**
- `h-dvh` instead of `h-screen` — dynamic viewport height handles the mobile browser chrome correctly
- `env(safe-area-inset-bottom)` for iPhone notch — without this the input gets hidden behind the home indicator
- `sticky bottom-0` on the input area keeps it above the keyboard
- Textarea auto-grow needs manual height calculation (`scrollHeight` with a max cap)

**Forward-only simplifies everything.** No back button means no "restore previous state" logic, no "which step was I on" ambiguity, no stale data from re-entering a step. The reducer just increments an index.

## Challenges

**Auto-scroll timing.** The message list needs to scroll to bottom when new messages appear, but the scroll has to happen after the DOM updates. Using `useEffect` on `messages.length` with `scrollIntoView({ behavior: "smooth" })` handles this cleanly.

**Inline components in message flow.** PipelineSelect and StoryReview aren't chat bubbles — they're interactive cards rendered inline in the message list. Threading them through as `children` of ChatMessageList kept the scroll container unified without special-casing the layout.

## Files Created/Modified

- 13 new source files (types, hooks, lib, 9 components)
- 4 new shadcn components (input, textarea, label, checkbox)
- 3 modified files (submit page, story types, globals.css)
- 1 updated doc (PRD)

## What's Next

- **Phase 2:** Wire up Gemini API — `/api/coach` route with MI system prompts per step, `[READY_TO_ADVANCE]` token for step transitions, `/api/structure` route for Agent 2
- **Phase 3:** PostgreSQL storage for submissions
