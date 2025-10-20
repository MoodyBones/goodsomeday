# Contributing Guidelines Analysis: Annie Duke Decision Framework

**Document Purpose:** Strategic analysis of contribution policies for Goodsomeday open source project
**Created:** 20 October 2025
**Framework:** Annie Duke's probabilistic decision-making approach

---

## Common Open Source Contributing Guidelines

**Standard elements:**
1. Code of Conduct
2. How to report bugs/issues
3. How to suggest features
4. Pull request process
5. Code style/standards
6. Testing requirements
7. Documentation requirements
8. License acknowledgment

---

## Strategic Analysis: Annie Duke Style

### The Key Question
**"What are the probable outcomes of different contribution policies, and what would a pre-mortem reveal about each approach?"**

---

## Option 1: Fully Open Contributions

**Policy:** Anyone can contribute code, stories, features

**Base Rate (What usually happens):**
- Open source projects often get low-quality PRs
- Maintainer burnout is extremely common
- Mission drift happens when contributors don't understand vision
- Moderation becomes overwhelming

**Upside Scenarios (10% probability):**
- Amazing contributors who "get it" find the project
- Community self-moderates and maintains quality
- Diverse perspectives improve the product

**Downside Scenarios (40% probability):**
- Contributors add features that undermine "both paths are valid" philosophy
- PRs that don't follow transformation narrative structure
- You spend more time reviewing/rejecting than building
- Toxic contributors who don't respect the mission

**Most Likely Scenario (50% probability):**
- Few contributions initially (most projects get little engagement)
- You maintain it mostly solo for first 6-12 months
- Occasional good PR, occasional time-wasting PR

**Annie Duke insight:** *"What's the cost of being wrong?"*
- If you're too open, you burn out moderating
- Hard to reverse once you've set expectations

---

## Option 2: Closed Until Product-Market Fit

**Policy:** "Not accepting contributions yet - watch this space"

**Upside Scenarios (60% probability):**
- You maintain clarity of vision through MVP
- No distraction from building
- Can establish quality bar before opening gates
- Learn what the product actually needs first

**Downside Scenarios (20% probability):**
- Miss out on amazing early contributor
- Seems unfriendly/unwelcoming
- Slower development (just you)

**Most Likely Scenario (20% probability):**
- No one tries to contribute anyway (pre-launch product)
- You build MVP, then open strategically

**Annie Duke insight:** *"This is a reversible decision"*
- You can always open it later
- Much harder to close once open

---

## Option 3: Selective Open (Hybrid)

**Policy:**
- Stories: Community can submit (that's the point!)
- Documentation: Open to contributions
- Code: Invite-only or approval-required until stable

**Upside Scenarios (50% probability):**
- Stories come in (which you want)
- Helpful docs improvements
- You control core product quality

**Downside Scenarios (30% probability):**
- Confusion about what's open vs closed
- Still need moderation for stories (always was the plan)
- Documentation PRs might not match your voice

**Most Likely Scenario (20% probability):**
- Story submissions work as designed
- Few docs PRs (most projects don't get many)
- No one tries to contribute code yet anyway

---

## Pre-Mortem: "It's 6 months from now and I deeply regret my contribution policy..."

### Scenario 1: Too Open Too Fast
**"I'm drowning in low-quality PRs and it's killing my motivation"**

**What went wrong:**
- Didn't set clear quality bar upfront
- No automated checks (linting, tests)
- Didn't require issues before PRs
- Said yes to contributions that diluted mission
- Contributor added "stayed in tech filter" that created hierarchy

**Prevention:**
- Require issue discussion before PR
- Clear acceptance criteria in CONTRIBUTING.md
- Automated quality checks
- Reserve right to close PRs that don't align with mission

---

### Scenario 2: Stayed Closed Too Long
**"Someone built a competitor because I seemed closed to collaboration"**

**What went wrong:**
- Gave impression project was proprietary
- Missed passionate contributors who could help
- Community didn't form because felt unwelcome
- Burned out doing everything alone

**Prevention:**
- Clear communication: "Not yet, but soon"
- Document what you WILL want help with
- Engage early supporters even if not accepting code yet
- Set clear milestone for opening up

---

### Scenario 3: Unclear Boundaries
**"People are confused and frustrated about contribution rules"**

**What went wrong:**
- CONTRIBUTING.md was ambiguous
- Different rules for different things wasn't clear
- Closed PRs without explanation
- Didn't respond to issues promptly

**Prevention:**
- Crystal clear documentation
- Friendly auto-responses
- Issue templates that guide contributors
- Explain *why* behind the rules

---

## Risks Specific to Your Mission

### Risk 1: Mission Dilution
**What could happen:**
- Contributor wants to add "success story" filter
- PR adds badges/gamification that creates hierarchy
- Someone adds "advice" feature that turns into toxic positivity
- Feature creep toward LinkedIn-style platform

**Annie Duke question:** "How do we protect the core mission while being open?"

**Mitigation:**
- State mission clearly in CONTRIBUTING.md
- Link to Schema-Design-Philosophy.md
- Require: "How does this align with our anti-victim, both-paths-valid mission?"
- You have final say on product decisions

---

### Risk 2: Story Quality Degradation
**What could happen:**
- If code is open, someone adds "auto-approve stories" feature
- Spam submissions overwhelming moderation
- Stories that are all trauma, no transformation
- Platform loses pedagogical value

**Annie Duke question:** "What's the downside if moderation gets bypassed?"

**Mitigation:**
- Moderation workflow NOT open to contributions
- Frontend validation stays strict
- You control n8n workflows (self-hosted)
- Clear story guidelines in submission form

---

### Risk 3: Maintainer Burnout (You)
**What could happen:**
- Spend 80% of time reviewing PRs, 20% building
- Feel obligated to respond to every issue immediately
- Lose joy in the project because it feels like work
- Contributors expect you to merge their PRs

**Annie Duke question:** "What's the expected value of my time?"

**Mitigation:**
- Set response time expectations (not immediate)
- Batch PR reviews (once a week)
- "No" is a complete sentence
- Automate what you can (GH Actions, templates)

---

## Annie Duke Decision Framework: Expected Value

Let's calculate **Expected Value of Contribution Policy**:

### Metric: Your time + Project quality

| Policy | Time Cost | Quality Risk | Mission Risk | Expected Value |
|--------|-----------|--------------|--------------|----------------|
| Fully Open | High (many PRs) | Medium | High (dilution) | **Low** |
| Closed Until PMF | Low (no PRs) | Low (you control) | Low | **High** (pre-launch) |
| Selective Open | Medium | Medium | Medium | **Medium-High** |

**Based on where you are (pre-MVP):**
- Expected value is HIGHEST for "Closed Until PMF"
- Reversible decision: Can open later with data

---

## Recommendation (Annie Duke Style)

### Phase 1: Pre-Launch (Now)
**Policy:** "Not accepting code contributions yet"

**CONTRIBUTING.md template:**

```markdown
## Current Status: Building in Public, Not Yet Accepting Contributions

Goodsomeday is in active development. I'm building in public and documenting
the learning journey, but **not accepting code contributions yet**.

### Why?
This project has a specific mission (reframing tool, not story platform)
and I'm establishing the product vision before opening to collaboration.

### What's Open?
- ✅ **Bug reports** - Please file issues
- ✅ **Feature discussions** - Share ideas in Discussions
- ✅ **Documentation typos** - Small fixes welcome

### What's Not Open Yet?
- ❌ Feature PRs
- ❌ Code contributions
- ❌ Story moderation changes

### When Will This Change?
After MVP launch (estimated Q1 2026), I'll revisit this policy based on:
- Product-market fit
- Moderation capacity
- Community interest

**Want to support the project?**
- ⭐ Star the repo
- 📖 Read the learning docs
- 💬 Share your thoughts in Discussions
```

**Probability this is right decision:** 70%

---

### Phase 2: Post-Launch (Future)
**Policy:** Selective open with strict guidelines

**Open to contributions:**
- Documentation improvements
- Accessibility fixes
- Bug fixes
- Translations (if relevant)

**Require approval for:**
- New features (must align with mission)
- UI changes (must maintain accessibility)
- Database changes

**Not open:**
- Moderation workflow
- Admin features
- Story submission logic (you control narrative structure)

---

## Questions to Answer (Pre-Decision)

Before finalizing CONTRIBUTING.md:

1. **What's your risk tolerance?**
   - Low: Keep closed until stable
   - Medium: Open docs/bugs only
   - High: Open everything, deal with consequences

2. **What's your time budget for PR review?**
   - None: Don't accept contributions
   - 1-2 hours/week: Very selective
   - 5+ hours/week: Fully open

3. **What would make you regret opening contributions?**
   - Mission dilution?
   - Time sink?
   - Quality degradation?
   - Toxic contributors?

4. **What's the earliest you'd want first contribution?**
   - After schema is live (this week)?
   - After MVP launch (month 1)?
   - After first 100 stories (month 3)?
   - After PMF established (6-12 months)?

5. **Who is your ideal first contributor?**
   - Accessibility expert?
   - Someone who lived the pipeline experience?
   - Frontend developer?
   - No one yet?

---

## Annie Duke Principles Applied

1. **Think Probabilistically**
   - "This might work" → "This has 60% chance of working"
   - Set decision triggers: "If X happens, reconsider policy"

2. **Separate Decision from Outcome**
   - Good decision can have bad outcome (bad luck)
   - Don't judge contribution policy by single bad PR

3. **Pre-Commit to Criteria**
   - Decide NOW what would make you reopen contributions
   - Write it down so future-you doesn't rationalize

4. **Resulting Bias**
   - Don't look at successful open source and think "I should do that"
   - Look at base rates: most projects get few contributions anyway

5. **Reversible vs. Irreversible**
   - Closed → Open is easy (reversible)
   - Open → Closed damages trust (hard to reverse)
   - Start conservative

---

## Decision Template

**My answers:**

1. Risk tolerance: _______________
2. Time budget for PRs: _______________
3. Biggest regret fear: _______________
4. Timeline for first contribution: _______________
5. Ideal first contributor: _______________

**My chosen policy:** _______________

**Decision triggers to reconsider:**
- If _______________, then _______________
- If _______________, then _______________
- Review date: _______________

---

**Last Updated:** 20 October 2025
**Framework:** Annie Duke's "Thinking in Bets"
**Next Review:** After making initial CONTRIBUTING.md decision
