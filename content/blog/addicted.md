---
title: "I'm addicted to Cursor. This needs to stop."
date: "2026-04-17"
---


Cursor 3.0 came out recently. I am not generally online, but I did take a look at the [HackerNews thread](https://news.ycombinator.com/item?id=47618084) for the release because I generally don't know how else to find the pulse on things. I noticed people felt similarly to me -- Cursor, the ultimate tool that was developer-as-driver, was moving more in a Claude Code/Codex direction. 

The IDE is still there... But, for how long?

## On Claude Code

First, let's talk about Claude Code, because the inevitable question will come up as to why I don't use Claude Code, and why I'm so obsessed with developer-as-driver / AI as auto-complete + semantic search + mocks writer.

I am entirely against Claude Code and Codex. I am open to hearing the ridicule on that, but for the type of coding I do and the way my brain works, it will break prod. You may be saying there are contexts in which it is great, even with my skepticism: namely refactors and migrations. I think that's fair with a very clear test suite to run against, but every migration I've ever been a part of has involved writing _better_ tests in the V2.

Regardless, I have one anecdote that involves my first time really going ,"I'm sure Claude Code would be great for this!" that was a disaster. I never even told my coworkers how embarrassing this ended up being, but no one reads this blog, so I'm safe. 

This was in my deeply trying AI as the first point of contact on all tickets phase (which I entirely stepped back from as elucidated in later posts). We had to write Cypress tests for a new flow -- new page, really simple flow, but I hate Cypress, so I'm sure Claude Code can handle that. 

I have to literally pull out my Git history to show this clown behavior in its full glory.

**PR #1: chore(project): TICKET-123 Add Cypress tests for project -- November 6th, 2025**

I remember doing this in Claude Code and being fascinated that unlike Cursor, it would just run the Cypress tests until they passed. Looks like I did 6 commits, 3 proper ones. There's a commit here titled "working version before cleanup" which I assume was just straight from Claude, 350 lines of tests. I ran a follow up to tell Claude to reduce the terrible churn in here which looks like a lot of logs and waits, and it got down to adding just 123 lines. 

That's not so bad, right, that's a typical AI flow. Oh boy, keep reading.

**PR #2: chore(cypress): Do not remove project-related X and Y -- November 12th, 2025**

This is 6 days later. I believe I did this with AI as well, but Cursor chat this time, so I was manually reviewing it. 

Fine, Cypress is really annoying. There are side effects from other tests that mess up our tests because we run against a real working container and we don't mock in Cypress. We all hate it for good reason.

**PR #3: chore(cypress): Check for X in Y -- November 12th, 2025**

Okay... Okay... It's starting to get a little silly... But, I'm sure it's fine. We hate Cypress for good reason.

**PR #4: chore(cypress): Add waits to Cypress API calls -- November 19th, 2025**

It's starting to get a little silly... It's starting to get a little strange. It's been 2 weeks since I submitted the first PR. How am I still not getting these tests to pass?

**PR #5: chore(cypress): Try to reset state before doing a hard navigation change -- November 20, 2025**

I remember at this point. I recall just begging the AI to give me any suggestion of what could work. This sounded reasonable.

**PR #6: Revert "chore(cypress): Try to reset state before doing a hard navigation change" -- November 20, 2025**

I have no words at this point.

**PR #7 (CLOSED): fix(project): Reset state when you navigate the page -- December 1st, 2025**

I'M STILL WORKING ON CYPRESS. I AM STILL DOING CYPRESS. IT'S BEEN A MONTH. I AM CHANGING THE CODEBASE FOR A CYPRESS ERROR. PROBABLY BECAUSE THE AI TOLD ME TO. Luckily, everyone rejected my idea.

**PR #8: chore(cypress): Reload when navigating pages -- November 21, 2025**

I don't know why these are out of order. I assume I waited a while to close the previous one. At this point, it's not even funny. It's just sad. 

**PR #9: chore(cypress): Remove check on initial load-- December 1st, 2025**

This was actually just because I was breaking Cypress so much I had to add safeguards that if these tests failed, the entire test suite wouldn't collapse. 

**PR #10: chore(cypress): Wait for the final put before navigating back to the other page -- December 1st, 2025**

No comments at this point. I'm suffering.

**PR #11: chore(cypress): Try navigating via the UI to emulate user behavior**

This is the last PR. It's very telling. I can share the diff. I'm not 100% sure how to do Git diffs in Markdown, but you'll get the gist.

```js
- cy.visit('/myprojectpage')
+ cy.contains('a', 'PageTitle').click();
```

That did it. That fixed it. Every PR between #4 and #11 were trying to fix the same problem, and you know what finally fixed it? Doing the more human thing.

I will never forget as I was just combing over this code, I was so desperately trying to find something off -- because I never had an error like this before. And I remember I saw the `cy.visit` and I thought, well, let me try it, because I'd personally never write `cy.visit` in a Cypress test except on the top-level (which this was not). 

And that fixed it.

This was every nightmare about AI that I'd been warned about. Reasonable looking code... I read the code, I reviewed the code, it looked fine, and it ran fine... until it didn't. When it didn't, it took WEEKS of drains on my time to fix. This was way longer than if I had just written it myself the first time.

Again, you can criticize me that I am simply not a very good agentic engineer. That's fair. I tried it for several months, and it's simply not conducive to how my brain works. If I get replaced by AI-native engineers because their brains are more malleable to reviewing code than I am (although what I'm hearing these days is that the companies behind this are trying to remove the bottleneck of reviewing code, too, which just get a little bit strange to me), I am okay with that. Right now, I have high doubts it'll happen. I think the average engineer is going to fall into the same trap I did. 

Particularly, what's so weirdly intoxicating about it is since you never wrote the code, it never became intuitive to you, so this is the same difficulty as a production bug coming from your fellow engineer. Those get story points for complexity. We use time on my team now, and I generally always put 2 days for any ticket I have no context on. This means any time I use Claude Code, I have to be willing to spend 2 entire days (8-12 engineering hours in the IDE and debugger) fixing it if something goes wrong. I'm not going to do that! So, I ask the AI to fix the AI! IT'S A TRAP.

I don't think I've written in all-caps on this blog before. I feel very passionate this time. I'm not experimeting, I'm sure. Claude Opus 4.7 isn't any better. Claude Opus 6.3 isn't going to be any better. We need another massive leap like how it was between 0 AI -> Claude 3.5(? 3.0?) in order to fix this problem, and I Won't be using Claude Code for my projects until then, unless it's something extremely well-defined (eg. migrate all my RTL/Jest tests to use userEvent instead of fireEvent or any other API changes within libraries). 

Okay, so that's how I feel about Claude Code and such. I'm not using. I've been mainline on Cursor for over a year and I've stuck with that.

## So, what's wrong with Cursor 3.0?

Nothing, exactly. They introduced a new agents view that makes them a bit more Claude Code-y. All of the AI companies are investing in being locked into their platforms for obvious reasons. The IDE is still there... 

I remember when I first got Cursor. I told my director that for the first time in my life, I can code as fast as I think. Granted, that's not very fast. But, even before AI came into the picture, I was always struggling with syntax (famously couldn't write a for loop straight), so autocomplete++ is my favorite thing in the world. Cursor finally made autocomplete _work_ with a better diffing UX, the navigating within a file, and the codebase indexing. It's great. It genuinely works really well and I abuse my tab key to death.

I had a decently large step back from AI attempt 5 months ago or so. I found the middle ground that's been working for me and is finally semi-permanent (well... I speak too soon). I do not start with the agent / chat ever anymore. I basically pseudocode and tab fills in the rest. I edit with tab too, I backspace and say `r` for reduce instead `m` for map and it figures out the rest. I tab through my tests creation as well so I can stop the AI before it makes stupid "check if null and undefined" tests. I love it, honestly. I feel like _I_ am coding, but all of my friction with coding is gone, both because I never learned how to use my IDE super well to navigate within files easily / "quickly rename all these functions" and because all I have to do is think "okay, I want a map there" and it does it.

...But, how long will the IDE be there?

Autocomplete isn't profitable. It's a $10-20 a month offering. I don't think this is heavily subsidized like other AI. I Googled this and I got "AUTOCOMPLETE IS USELESS. USE AGENTIC CODING" blog posts, so I need to ask the AI how much this is subsidized. The AI says it costs $2-3/m for autocomplete, $.50 to index my codebase, and I still have 100-200 chats to frontier models a month (probably along the Ask lines) before they stop making a profit on a $10/m plan. 

Meanwhile, in the other world of agentic coding, my company and many other companies are talking about how to reduce token usage. It just costs too much.

I gotta be honest. I ignore everything they say. I use Claude 4.6 Opus HIGH THINKING without any reservations whenever I want a slow frontier model without any regards to cost. I check my Cursor dashboard every so often, and I have never topped double-digit costs to my company in a month. Because all I'm doing is asking questions or having it search the codebase or make a bunch of dummy code for me. Using the entire context window once is still a $3 request. If you did that every working day 2x, that would only be $120 a month. My understanding is for people who do agentic coding, they can burn through $120 in a session. They can burn through $120 for a slice of a feature.

I think there's only one company still offering autocomplete primarily (apart from Github Copilot which is just mediocre all around), which is Supermaven. My future is not a future. **Cursor, the VS Code fork, is going to die eventually.**

It's not happening now. It's not happening next month. I don't know when it's going to happen.

## What have I been doing with this anxiety?

I've been trying other IDEs. It hasn't gone well.

First, I tried [Zed](https://zed.dev). I am not using their Zeta autocomplete model, so GitHub Copilot as my autocomplete model is not very good. 

Frankly, this is going to sound very weak, but because Copilot is so slow / useless, I am basically just coding entirely myself in there, and I feel exhausted very fast. It's part learning the IDE, part my pseudocode needing to actually be translated into real code -- like speaking a second language, and part just hating the search functionality. It uses buffer-based search like Sublime Text. I am legitimately married to the way VS Code does Search and every time I've tried another code editor, I have suffered without it. Like, even clicking the file with the buffer in Zed is difficult, it doesn't jump to the line. It's really weird and I don't know if it's ever going to get better.

So... I went back. VS Code + Copilot. Copilot obviously saw so much of its userbase leave for Cursor that it copied its method. It has next edit predictions and codebase indexing now. It's still bad! It's still really awful, and I find myself in the same situation as Zed, just 1/3 less brain fatigue since I have been using VS Code for a decade now and am very comfortable with it.

I am considering the possibility that Copilot's autocomplete model is just bad. I'm thinking of trying a local autocomplete model -- although it still won't have the file jumping that Cursor offered. (Yes, as I told myself 5 months ago, what you're craving is Vim speed of navigation, Radhika.) I downloaded this one called [Sweep AI](https://blog.sweep.dev/posts/oss-next-edit) and need to actually try it, but friction is real. Work needs to get done, and my fastest way to get work done has been through Cursor in over a year.

I could ask work for a Supermaven subscription, but they're owned by Cursor, too. It sounds like the future if you are going to be an autocomplete person is some sort of local model. 

I'm going to keep experimenting with that. It's just scary that my coding performance is tied to one company right now, a company whose goals are no longer aligned with my success, and every alternative is bad, and I don't feel like I can program anymore without it. No matter the productivity gains, that's a really anxious place to be in. Openness is the only way forward (or just using Copilot again despite being noticeably worse -- then I simply need to be better).

Regardless of what the exact solution ends up being, the answer is clear: I really have to get off of Cursor. I really need to learn Vim navigation properly! 
