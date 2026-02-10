# Interactive Submit: Chat UI — Active Recall Questions

**Purpose:** Spaced repetition for chat UI patterns, useReducer state machines, and mobile-first CSS.

**How to use:** Answer without looking at the code. Then check your work against the source files.

---

## Question 1: useReducer vs useState

**Scenario:** A colleague asks why you used `useReducer` instead of `useState` for the chat state. The state has 11 fields and 11 action types.

Explain:
1. What problem does useReducer solve that useState doesn't?
2. Why is "page-local" state important here — why not React Context or Zustand?
3. What makes the reducer "pure" and why does that matter for testing?
4. How does the `ADVANCE_STEP` action work? Why is forward-only simpler?

**Extension:** If you needed to add an "undo last message" feature, what would change in the reducer? Why did the plan explicitly exclude this?

---

## Question 2: Mobile Chat CSS

**Scenario:** You're debugging the chat UI on an iPhone and the input area is hidden behind the home indicator bar.

Walk through:
1. What is `h-dvh` and why is it better than `h-screen` for mobile?
2. What does `env(safe-area-inset-bottom)` do? Where is the `pb-safe` class defined?
3. Why is the input area `sticky bottom-0` instead of `fixed bottom-0`?
4. How does the textarea auto-grow work? What's the max height cap and why?

**Challenge:** Without looking at the code, write the CSS for `pb-safe` from memory.

---

## Question 3: Component Architecture

**Scenario:** You need to explain the ChatShell component tree to someone new to the project.

Diagram from memory:
1. What does ChatShell own? (state, effects, callbacks)
2. Why are PipelineSelect and StoryReview rendered as children of ChatMessageList instead of separate sections?
3. How does ChatInput know when to show/hide? What are "coached steps"?
4. Why is HelpButton a separate floating component rather than part of ChatInput?

**Extension:** If you were adding a "skip this step" button, where would it go in the tree and what action would it dispatch?

---

## Question 4: Mock-First Development

**Scenario:** You're explaining your approach to a team that always builds API-first.

Defend the mock-first approach:
1. What does `mock-coach.ts` provide? How long did it take vs. building the real API?
2. How do mock responses simulate the real Gemini flow? What's the delay for and why 800ms?
3. When you switch to Phase 2 (real Gemini), what changes in ChatShell? What stays the same?
4. What's the `advanceStep` boolean in the mock response? How will the real API signal this differently?

---

## Question 5: Motivational Interviewing in UI

**Scenario:** A designer asks how the UI reflects the MI/OARS framework.

Connect the dots:
1. What are the four OARS techniques? How does each show up in the coached steps?
2. What happens when the user clicks the Help button? How is Socratic questioning different from giving them an answer?
3. Why does the coach "reflect back" before advancing? What would change if it just said "thanks, next"?
4. Why is the review step handled by Agent 2 (Structurer) instead of the coach?

---

## Question 6: State Machine Design

**Scenario:** You're adding Phase 2 (Gemini integration). The API returns `{ response, advanceStep }`.

Think through:
1. How does `ADD_USER_MESSAGE` populate `stageResponses`? What's the `STEP_TO_STAGE` mapping for?
2. What happens in the reducer when `SET_PUBLIC` is toggled off? Why clear identity?
3. Why does `SET_SUBMITTED` not clear any state? What if the user tries to submit twice?
4. If Gemini returns `advanceStep: false`, what does the UI do? How many exchanges per step are possible?

**Extension:** Draw the full state machine on paper: pipeline → barrier → reflection → action → transformation → review. Mark which steps show ChatInput, which show HelpButton, and which show inline cards.
