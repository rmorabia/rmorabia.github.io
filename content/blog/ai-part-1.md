---
title: "Adventures in AI-Assisted Coding Part 1: The Journey So Far"
date: "2024-10-29"
---

I've been reading and hearing more and more about AI-Assisted Programming getting to a point where it's actually making a marginal, but noticable productivity difference.

I work for a fairly corporate company with very well-established and decently unique codebase patterns, which has so far seemed at odds with where AI currently excels.

However, my company (particularly my CTO) is fairly bullish on AI so we've had access to various AI tools for a while now.

I've been using Github Copilot with a standard configuration within VS Code for 4 months now, and this is where I'm at right now with it:

### 1. Fancy Autocomplete 

It outputs something useful for me ...1% of the time? 2% at most.

I'm not a very agile user of IDEs. It's embarrassing to admit, but I basically use a mouse 90% of the time with my IDE. This makes inline autocomplete of quite limited use for me, since I am not usually writing files linearly from scratch. I spend most of my time modifying existing files. 

For example, I have to set up Redux dispatching in the imports (Line 1-10), right after the `return` (Line 100-110) and actually call the action on a click (Line 200-210). This is fairly rote code that honestly takes me a couple of minutes to write each time I have to do it, so you would think Copilot would be helpful here, but it just isn't good at adding code in multiple parts of a file. It doesn't really offer "diffing" or "step logic" in the way I would expect.

I will probably accept the inline autocomplete more often that 1-2% of the time just because it'll write a tiny bit of boilerplate for me (eg. setting up a function, but the function is entirely wrong) and then I will slowly use my mouse to rewrite everything in the function. 

### 2. StackOverflow Replacement

I haven't found this to be true at all. It hallucinates way too much and doesn't have any sense of *conciseness*. Asking Copilot Chat to tell me how to use a Lodash function makes it write weird slow code in my file instead of just giving me a very quick 2-line example with context, which is again, what I would expect.

This may work better when using ChatGPT (which I do have access to as well), however, the friction for opening up the web app and adding the necessary context takes SO long in a web browser.

### 3. Tests Writer

This is where it excels, but in a very limited fashion as a front-end engineer. Basically all utility files have it output near perfect tests due to extremely controlled inputs and outputs.

But, as a front-end engineer, I am using Jest and React Testing Library, which requires references to text or IDs or other ways to label markup. It seems to hallucinate a LOT with this.

However, tests are still so repetitive to write that I still find it quite helpful for doing tests faster. My process so far is to 1) manually write the boilerplate 2) write the first test 3) write the it statement for every following test and tab autocomplete 4) edit the tests to ensure they're actually correct.

It's kind of surprising I have to manually write the boilerplate, right? It's extremely stuck to very basic testing infrastructures and will create entirely incorrect mocks, etc.. that simply do not run unless I manually put the correct style of tests in the file. 

### 4. Bug Finder / Rubber Ducker

This probably eludes me the most. It's so off base all of the time. It seems to always recommend writing code that doesn't fit at all with my context. An example of this is I'll have some failing code, and when I suggest it fixes it, it will say, "You are using the wrong library! Use this other library instead! It'll work!" No, it won't, ChatGPT... No, it won't.

Worse, Copilot will just fix formatting errors. I really expect Copilot to be able to fix things like the parenthesis and brackets being the wrong number, but it really can't. This goes back to the LLMs can't do basic math thing.

I think this is the hardest issue to fix, this would be such an immense improvement on AI that I would understand the hype. 

## What's next?

I want to really try to use AI more. I've been reading a lot and I think a lot of my gripes with these 4 areas can be slightly improved. Here's my plan:

### 1. Switch to Cursor

Cursor supports multi-line autocomplete, you can hit tab and it'll take you to the next place in the code it thinks you'd want to add a line to. If I get 1-2% rates of acceptable code, BUT it navigates me to relevant areas, that's just a pure speed of execution improvement.

People also seem to be more impressed with Cursor's autocomplete suggestions (Claude 3.5 Sonnet is supposed to be the first really significant step up since ChatGPT 3), but I'm holding out on skepticism there.

### 2. Get a ChatGPT API token and use that in another interface

Copilot Chat is atrocious, the context doesn't help at all. What I would like to do is have a very convenient way to ask ChatGPT questions and add just the appropriate context, without having the copy/paste that context in.

I see two options for this: ChatGPT in the terminal, or creating my own little web app to interface with ChatGPT with a file uploader.

Considering I am a front-end developer, it's probably the latter. But yeah, something that doesn't require login, that's just always pinned very easily much like Google is.

### 3. Continue writing tests

We'll see if Cursor is any better at this, but I honestly don't mind my flow right now for testing.

### 4. Rubber Duck with a better model

I've been using Copilot Chat and ChatGPT 3.5 to rubber duck. It turns out I have access to ChatGPT 4 and 4o. Combine this with the custom usage in a more dev-friendly interface, and it might actually be mildly pleasant to use. 

I need to get all of this approved by my company, but after I do this, I do have a grand experiment I want to try: I want to do a significantly large ticket (3 pts) almost entirely through AI and these 4 use cases. I can manually edit code it generates, but I am going to try to tell it to regenerate until it's right.

I think just spending some real significant time investing in the tooling will help both elucidate things and create another marginal productivity bump, even though I highly doubt I will ever want to do another ticket entirely with AI again. My log of that will come in Part 2 of this series.
