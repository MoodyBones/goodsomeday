# Someday Project: Schema Design Philosophy

**Document Purpose:** Technical reference and product vision alignment for database schema design  
**Created:** 19 October 2025  
**Ticket:** GOO-12 - Design PostgreSQL schema for stories, moderation, and learning journal

---

## The Pivot: From Data Storage to Transformation Tool

### What Changed

During initial schema design, we discovered a critical misalignment between technical implementation and product vision.

**Initial approach:**
- Stories as unstructured text blobs
- Generic "leaky pipeline" categories
- Passive data collection mindset

**Actual vision:**
- Stories as guided transformation narratives
- Specific life-phase categories
- Active pedagogical tool that teaches people how to reframe their experiences

### Why It Matters

This isn't a story-sharing platform. **This is a reframing tool.**

The database schema must support the product's deeper mission: helping people move from victimhood to agency through structured storytelling.

---

## Core Product Principles

### 1. Anti-Victim Stance

Stories must demonstrate transformation, not just document trauma.

**Schema Implication:**  
The structure must capture both the barrier AND the growth - the narrative arc is non-negotiable.

**What this means:**
- Stories aren't just "what happened to me"
- They're "what happened, what I learnt, what I did, how I grew"
- The format itself teaches people to see their own agency

### 2. Hope Through Action

Passive waiting doesn't create hope. Taking action creates hope.

**Schema Implication:**  
We must capture what people *did* and what *changed as a result* - not just how they felt.

**What this means:**
- Action is a required element of every story
- Outcome/transformation must be visible
- Both "staying in tech" and "leaving tech" can be empowered choices

### 3. Both Paths Are Valid

There is no single "right" outcome. Growth is the constant.

**Schema Implication:**  
Don't force stories into binary categories. The transformation matters more than the destination.

**Valid story arcs:**
- Stayed in tech with new boundaries/environment
- Left tech and found fulfilment elsewhere
- Still navigating but taking intentional steps
- Changed careers multiple times while learning

### 4. Guided But Not Rigid

The frontend provides narrative prompts. The backend stores cohesive narratives.

**Schema Implication:**  
One `story_text` field (not separate fields for each narrative element) to preserve flow and readability.

**How it works:**
- Frontend: Guided prompts help users structure their thinking
  - "What happened?" 
  - "What did you realise?"
  - "What action did you take?"
  - "How did things change?"
- Backend: Complete narrative stored as one text field
- Reading experience: Flows as a cohesive story, not a form

---

## The Transformation Narrative Model

Every story follows this arc:

```
BARRIER → REFLECTION → ACTION → TRANSFORMATION
```

### 1. Barrier (What Happened)

The negative experience that caused someone to drop out or almost drop out of the pipeline.

**Examples:**
- Burnout from toxic workplace culture
- Discrimination based on gender/race/disability
- Imposter syndrome with no support system
- Lack of mentorship or role models
- Work-life balance crisis
- Economic barriers to education/entry

**Not just:** "I had a bad experience"  
**But rather:** "This specific thing happened that made me question whether I belonged in tech"

### 2. Reflection (Realisation)

How the experience made them think and what they learnt about themselves or the system.

**Examples:**
- "I realised the problem wasn't me, it was the system"
- "I learnt I was sacrificing my health for a job that didn't value me"
- "I understood that representation matters more than I thought"
- "I saw that I was trying to fit into someone else's definition of success"

**Not just:** "I felt bad"  
**But rather:** "I gained this specific insight about myself/the industry"

### 3. Action (Response)

What they actually *did* about it - concrete steps taken.

**Examples:**
- Changed companies or teams
- Set new boundaries around work hours
- Found or created community/mentorship
- Left tech for a different field
- Took a break to recover
- Advocated for policy changes
- Started learning something new
- Went to therapy or sought support

**Not just:** "I thought about changing"  
**But rather:** "I took these specific steps"

### 4. Transformation (Outcome)

How they've grown and what actually changed as a result of their actions.

**Examples:**
- "I'm now thriving in a company that values work-life balance"
- "I left tech and I've never been happier"
- "I'm still in tech but I lead with boundaries now"
- "I'm rebuilding my relationship with the industry on my terms"
- "I'm advocating so others don't face what I faced"

**Not just:** "Things are different now"  
**But rather:** "Here's the tangible change that resulted from my actions"

---

## Pipeline Stage Categories

### Why These Matter

The "leaky pipeline" research shows that women (and other underrepresented groups) leave tech at specific points in their journey. Understanding *when* people leave helps identify systemic patterns.

### The Categories

**Student** - Barriers during education
- High school CS classes
- University/college programmes  
- Bootcamps or self-study
- Internship experiences

**Early Career** - First 0-5 years in industry
- First job experiences
- Junior → mid-level transition
- Finding your footing
- Building professional identity

**Mid-Career** - 5+ years, experienced professionals
- Leadership transition challenges
- Senior-level discrimination
- Long-term sustainability questions
- Veteran burnout

### Why Not More Categories?

**Intentional simplicity.** 

Too many categories fragment the data and make patterns harder to see. These three phases capture the major transition points where people commonly leave.

**Alternative considered:** "Senior" or "Leadership" category  
**Decided against:** Mid-career already captures this, and having too many buckets reduces the power of each category's stories.

---

## Schema Design Decisions

### Story Structure

**Decision:** One `story_text` field with frontend prompts

**Rationale:**
- Stories read as cohesive narratives (better user experience)
- Frontend can still guide structure through UI prompts
- Simpler database design
- Easier for moderation to review complete stories
- More flexible for people who write non-linearly

**Alternative considered:** Separate fields for barrier/reflection/action/transformation  
**Why rejected:** Would create stilted, form-like reading experience. Loses narrative flow.

### What Changed Field

**Decision:** Captured implicitly within the story narrative, not as separate field

**Rationale:**
- The transformation is the climax of the story - it should flow naturally
- Redundant to store separately when it's already in the narrative
- Keeps schema simpler
- Better reading experience

**Alternative considered:** Dedicated `what_changed` field  
**Why rejected:** Creates duplicate content and breaks narrative flow

### Outcome Tracking

**Decision:** Track "stayed in tech" vs "left tech" vs "still navigating" as optional metadata

**Implementation:** `current_status` field - nullable, collected at end of story flow (see Open Questions #1 for UX details)

**Rationale:**
- Enables pattern analysis across pipeline stages
- Helps readers find relevant stories
- Collected **after** story is written to minimize bias
- Framed as reflection prompt, not categorization
- "Prefer not to say" option + nullable field = truly optional
- Both staying and leaving presented as equally valid paths

**Safeguards:**
- Does not affect story display or ranking
- Cannot be filtered to exclude either outcome
- Used only for aggregate analytics and personal reflection

---

## Content Guidelines Implications

### What Gets Moderated

**Remove:**
- Hate speech or harassment
- Spam or promotional content  
- Content that endangers minors
- Personal attacks on named individuals
- Content that violates legal/safety requirements

**Do NOT remove:**
- Stories that feel "too negative" (barriers are real)
- Stories without a clear transformation arc (YET - prompt for revision)
- Stories that end with "still figuring it out" (that's valid)
- Raw emotions or difficult content (within safety boundaries)

### Moderation Philosophy

**Goal:** Surface stories that help others, not police perfectionism

**Approach:**
- If a story lacks the transformation arc, prompt the author to add it rather than rejecting
- If a story is all trauma/no agency, guide them to reframe
- Focus on safety and community guidelines, not narrative perfection

**Why:** The act of reframing is itself therapeutic. We want to support that process, not gatekeep it.

---

## Learning Journal Connection

### How Stories Feed Into Learning

**The vision:** People don't just read stories - they process them.

**Possible flows:**
1. **Read → Reflect:** User reads a story and journals about how it relates to their experience
2. **Write → Process:** User writes their story, then continues reflecting on it over time  
3. **Compare → Learn:** User sees patterns across multiple stories and identifies systemic issues

**Schema consideration for future:**  
Learning journal entries may need to reference specific stories (foreign key relationship) to enable:
- "Stories that resonated with me"
- "How my thinking evolved after reading X"
- Tracking which stories create the most reflection/impact

**Current state:** Learning journal and stories are separate. Connection TBD based on usage patterns.

---

## Open Questions for Future Iteration

### 1. Outcome Metadata

**Question:** Should we track whether someone stayed/left tech as optional metadata?

**Decision:** Yes, include in MVP with careful UX design.

**Chosen Approach:** Option 5 - At End of Story Flow, Before Review Screen

**Flow:**
1. User completes all story prompts (barrier → reflection → action → transformation)
2. Before review screen: "One last question to help us track pipeline patterns: Where are you today?"
   - Radio buttons: Stayed in tech / Left tech / Still navigating / Prefer not to say
   - Explanatory text: "This helps us understand patterns - it won't change your story or how it's displayed"
3. Review screen shows complete story + their selection
4. User can iterate, go back, refine story based on any new insights
5. Submit when ready

**Why This Works:**
- **It's a conversation, not a test** - The question prompts reflection at the natural end of their narrative
- **Iteration is encouraged** - If answering "where are you today?" makes them realize something's missing from their story, going back to refine is *working as intended*
- **The question serves the storytelling** - Acts as a final reflection prompt: "Did I actually capture my transformation?"
- **Dance, don't lock** - Multiple passes = deeper thinking. This is a reframing tool, not a form submission
- **Minimal bias** - Story is written before categorization, but refinement based on reflection is valuable
- **Optional** - "Prefer not to say" removes pressure

**Data Benefits:**
- Enables pattern analysis (e.g., "40% of mid-career stories involve leaving tech")
- Could help match readers with relevant story types
- Tracks whether platform serves both paths equally

**Safeguards:**
- Clearly framed as pattern-tracking, not judgment
- Doesn't affect how story is displayed to readers
- Both paths presented as equally valid choices
- Optional field (prefer not to say + can be null in database)

### 2. Story Updates Over Time

**Question:** Should people be able to update their stories as their journey continues?

**Considerations:**
- **Pro:** Reflects reality (perspectives change, new chapters emerge)
- **Pro:** Shows continued growth
- **Con:** Complicates moderation (re-review needed?)
- **Con:** Changes the permanence/authenticity of archived stories

**Recommendation:** Start with one-time submissions. Consider "story updates" or "where are they now" as separate feature later.

### 3. Anonymous vs. Named Stories

**Question:** How does attribution affect the transformation narrative?

**Considerations:**
- **Anonymous:** Safer for vulnerable stories, removes ego
- **Named:** Builds community, enables follow-up, shows courage
- **Both:** Gives authors control, but complicates moderation

**Current state:** TBD - needs user research and safety analysis

### 4. Comments and Community Interaction

**Question:** Should stories have comments? How does that affect the pedagogical goal?

**Considerations:**
- **Pro:** Community support, shared experiences, reduces isolation
- **Con:** Risk of invalidation, toxic positivity, or derailment
- **Con:** Moderation complexity increases exponentially

**Recommendation:** Start without comments. Focus on the story quality first. Add community features only when ready to support them well.

---

## Implementation Checklist

### Phase 1: Core Schema (Current)
- [ ] Stories table with transformation narrative structure
- [ ] Pipeline stage categories (student/early_career/mid_career)
- [ ] Moderation workflow
- [ ] Frontend prompts that guide narrative arc
- [ ] Single `story_text` field storing complete narrative

### Phase 2: Enhancement (Future)
- [ ] Learning journal integration
- [ ] Story analytics (what resonates most?)
- [ ] Optional outcome metadata (if validated by research)
- [ ] Story revision workflow (guided reframing)
- [ ] Search by pipeline stage and themes

### Phase 3: Community (Way Future)
- [ ] Comments with strong moderation
- [ ] User profiles (if needed)
- [ ] "Stories like this" recommendations
- [ ] Impact tracking (stories that changed perspectives)

---

## Design System Alignment

### Accessibility Considerations

**Must-haves:**
- Clear visual hierarchy in story display (barrier → reflection → action → transformation)
- Sufficient colour contrast for text at all sizes
- Keyboard navigation through story prompts
- Screen reader friendly semantic HTML
- Alt text for any images in stories

**Nice-to-haves:**
- Text size controls for long-form reading
- Dyslexia-friendly font options
- Reading time estimates
- Progress indicators for multi-step submission

### Visual Language

**Tone:** Warm, hopeful, empowering (not corporate, not overly clinical)

**Elements:**
- Generous white space around stories
- Soft, accessible colour palette
- Clear typography for long-form reading
- Subtle visual cues for narrative transitions
- Encouraging microcopy in prompts

---

## Success Metrics

### How We'll Know This Is Working

**Quantitative:**
- Stories submitted vs. stories that complete the transformation arc
- Time spent reading stories (engagement)
- Return visits (people come back to read more)
- Completion rate of submission flow

**Qualitative:**
- Stories show genuine reflection and agency (not just venting)
- Readers report feeling hopeful after reading
- Authors report clarity gained through writing
- Moderation sees quality improving over time (community learns the format)

**The North Star:** People leave feeling "I'm not alone AND I have agency"

Not just: "Others have suffered too" (solidarity without hope)  
But rather: "Others faced this, took action, and grew - so can I" (solidarity WITH hope)

---

## Related Documentation

- [README.md](../README.md) - Updated with transformation narrative vision
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [API Documentation](api/README.md) - Backend endpoints
- [Learning Resources](learning-resources/) - Build process documentation

---

## Document Maintenance

**This is a living document.** As the product evolves, update this document to reflect:

- New insights from user research
- Schema changes and their rationale  
- Resolved open questions
- Emerging patterns in story submissions
- Moderation policy updates

**Last updated:** 19 October 2025  
**Next review:** After MVP launch and first 50 stories submitted