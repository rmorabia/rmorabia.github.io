---
title: "Trying AI Agents Again: Pi"
date: "2026-04-29"
---

# Trying AI Agents Again: Pi

I am at the tail end of a project right now. I have one feature ticket left, and three days to do it. Let’s try something new, even though I should be focusing on getting used to Zed / [getting off of my Cursor addiction](https://rmorabia.com/blog/addicted/).

Let’s try an AI agentic workflow again, with deliberation and effort. Claude Code has a weird interface I don’t quite understand, so let’s do it from scratch via [Pi](https://pi.dev). I’ve heard Pi described as the Vim of coding agents, which doesn’t necessarily inspire much confidence in me. But, my idea is to consider the pain points of Agentic coding and use the existing tools and generated tools to see if I can scratch every itch that shows up.

First, off the top of my head, what is the ideal agentic coding flow?

## The Ideal Agentic Coding Flow (Zero-Knowledge Edition)

This is a bit more difficult because I am a front-end engineer. I have to manually review all the code I write by running through elaborate flows in my browser, starting with login, then loading into the exact page, etc.. Yes, in an ideal world, an agent does all of that for me, but… That’s just a bit too weird for me, so I will propose a compromise:

*Step 1: Generate a Cypress test that will walk through the flow I would personally use to get the exact steps.*

That will be our source of truth for TDD. I’m not sure how Cypress MCP server works, but it can definitely just run Cypress locally and watch the results. I’ll consider both.

*Step 2: Build the UI to spec.*

Use Screenshots and videos to work against Figma. It should get this from the Cypress. We can use Figma MCP server here, even though Pi doesn’t support MCP.

*Step 3: Work until matching Cypress using red-green unit tested TDD.*

Assuming a stylistic rigor here I’ll add as I go — mock our design system. Do not do overly defensive programming.

*Step 4: Review work using a Code Review tool with a fresh context window.*

Fairly straightforward.

*Step 5: Can we make this more concise? Can you match this against our coding styles?*

Again, run this against some sort of style doc I would write.

What do I expect to have to feed the AI in this situation? For my current ticket, which is adding an error state to a modal, let’s see if I can write this out. Let’s assume I have nothing in the code right now to follow these steps, we’ll reach the hiccups as we go. I’m going to directly narrate this with my voice via [VoiceInk](https://tryvoiceink.com/) ($25 one-time-fee version of SuperWhisper or WhisperFlow). (Lightly edited to remove internal company data.)

```md
Step one, you're going to generate a Cypress test that follows through this flow and use that for your source of truth, TDD. In order to reach this flow, you will log in the app, get to the X page, click on the X test shift, click on X, open the X.

It's your case to go against these errors. So given that that is your source of truth, that flow, this is what we expect to see within that. We expect to see an error matching Figma file. Actually scratch that. In order to get to that point, we not only open the xx what we have to do is generate an error X of Y.

So if we click on X what we can do is we can set X to one to eight, which will cause an error. And we can see that with the [error message]. Now when we see that, we're going to open the X.

And the expectation is that the X will show up within the modal. And now the error cases will show up, which in this case involve showing the same error banner as is on the main page. So [error message].

It'll be using the same design system component. And we will show the error dots, which have an icon ID of negative next to the X that have the errors aligned in the same places as on the other view. You'll be able to access this via the Figma screenshot or the Figma MCP.

I'm not sure yet. Work against that until the Cypress test passes. Use red green unit tested TDD in order to develop it. Using a fresh context window.

Open a fresh context window and review the work using a code review tool. And then open a fresh context window. And work on making this more concise and readable.

```

Will this work? Probably not! What I hope to do is find gaps here that I can build reusable helpers for that will eventually get to the point where every step is good.

At that point, when every step is an optimized harness, will the AI work better than me or save me any time for tickets like this? I have absolutely no idea. Like I said, we’re here to waste time and find out.

For reference, by myself, this ticket will take 1-2 hours. I would only consider the AI to be a worthwhile tradeoff if I can maintain 90% of the quality with 60-90 minutes of work (after the initial work, which I’m willing to invest up to 40 hours into, to get all the steps working well).

### Let’s try it.

Liveblog of thoughts:

* I’ve already reached my first problem. It’s really hard to paste a screenshot in a TUI. It requires Ctrl + V, which is the shortcut I used for VoiceInk (which I’m obviously using a lot here).
* I forgot to add the Git instructions so I added that at the end.
* The UI is showing some sort of dark mode. I asked Pi to edit it to use a light mode theme. Worked.
* The “Now I have the full picture” message came up at the 5.4% of 1.0M context window, which I think means at 50k context window. That’s actually pretty good especially since I completely messed up and started this in the wrong folder and haven’t added a single tool.
* Starting to remember why I hate agents:

```
Did you add the Cypress tests and use that to test against?


 The user is right - they specifically asked me to write a Cypress test first as the source of truth and use
 TDD against that. I wrote Jest unit tests instead. Let me go back and create the Cypress e2e test first, then
 use that as the source of truth.
 ```

* I built my first skill which is Cypress, because after getting back in there, it completely messed that up. (I wonder if the Skill will make it actually listen to me to make the throwaway Cypress tests as the source of truth?)
* Just for reference: Right now I have three windows open. I have my Markdown editor here to navigate my thoughts, a terminal to make Pi deal with the snags I come across as I come across them, and a terminal for the actual Pi instance that’s working on my PR.
* Fun idea: Make Pi tell me how long this PR is taking to make. I built this (everything is running on Claude Opus 4.6 Medium) for $1.50. It’s actually pretty expensive. I will start changing models midway after this session. This is for experimentation and I want the best output possible.
* It takes a LONG TIME and is very expensive for the AI to work through making the Cypress test to test against. Fundamentally, if this saves me an hour of time, I am willing to spend $30 per hour on this. I code an average of 20 hours per week. If this works, I would 1.5x my coding output for $30,000 a year. I think that’s worth it for the company. I’m not saying this is costing me $30 an hour, I’m just saying that’s my upper limit for usefulness before I start to question it. Note that right now with just a $20 Cursor subscription for autocomplete + $1,000 a year in direct token use, I am outputting 1.2x my manual coding output. There’s definitely an AI usefulness curve.
* Installed external diff viewer. Not currently sure how I want to process this, since I prefer a GUI, but for now a proper git-style diff in the TUI is fine.
* I have been at this for over an hour… Yes, it’s running mostly on its own, I just want to watch it since this is the first time. Still making Cypress tests to run against. If it’s not done by the end of my workday, honestly there’s my answer. This is a dead end. It has 3 hours left.

## After almost 3 hours, reviewing the output

So far, at this point, with a working Cypress test and the test passing against that Cypress test, it cost me 3 hours and $18. It did not go through with the Code Review and the conciseness check yet (but, I also haven’t fed it any opinions on readability).

To be fair: Cypress is very hard to write even as a human, and the hacks to make Cypress work can make a single test last longer than a minute. This is the price I’m paying by using Cypress for my TDD flow rather than RTL (which will always be up to 5 seconds). However, I really believe if the AI is to work independently, Cypress is the only thing that emulates my testing flow as a front-end developer of a complex flow. That’s why, despite the 3 hours of work, it’s only $18. So much of that time was spent waiting for Cypress tests. I think a future optimization is at the end of one of these monster sessions, ask it to write its own learnings to the Cypress skill, maybe? I’ll get there when I get there.

I’ve also unfortunately run into the new reality of agent, I need to customize a harness to make code review happen on a new context window. I will do this manually for now just to close the loop for today. Getting Steps 1-3 working semi-automatically is enough for one day.

After reviewing the code, it’s fine. I needed to make some changes, particularly to the tests. This was also such a small PR… Although I think this is a good test  to build out Pi, do I realistically sit away from my desk for 3+ hours in which it’s more productive to let Pi clog up my coding? Not really.

But, this was a decent learning experience. I will get back to normal coding tomorrow because it’s so much faster than this, and keep this on the backburner when I need it. I have all the harnesses I need for it to take on tickets where I know exactly what I expect the code output to be. 

## In Conclusion

In conclusion, I do think this is better than Claude Code. I trust it more, I control it more, and I feel I can control the flow it follows easily. Do I like it better than autocomplete++? Not really. But, I could see myself using this for when I really have cruft PRs. I'm not sure yet. This was more of a thinking out loud thing. I'm tired, I've been doing this for over 5 hours, let's see if I ever come back to this again.
