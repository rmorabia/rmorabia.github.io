---
title: "Adventures in AI-Assisted Coding Part 2: Re-orienting"
date: "2024-12-16"
---

I have been trying to use AI as an initial entrypoint for everything over the past month or so -- from code generation to debugging to searching.

I've found it generally disappointing, but I've also gotten better at it and have started using it for a few more things.

Here's my update, and maybe my final call on AI for now:

1. Fancy Autocomplete / Cursor

I was not able to get access to Cursor. My company discontinued taking the pilot out company-wide once Copilot integrated Claude 3.5 Sonnet into its chat window.

I have to admit, the chat window has gotten marginally better due to do this and some other commands (@workspace seems to work more effectively now). It is now possible to generate something even mildly useful using the chat window and Sonnet. However, it's still quite slow and gets confused on itself after the initial prompt. It seems best to use this as an initial generator and then edit the code manually from there, although with the type of code I am writing (usually not new flows or endpoints), it's still faster and more accurate to write it myself.

I now like to ask the chat window to refactor my code and then compare and contrast my code to the generated version. It's quite often true that a mix of both is better. I beleive an overall code review is now integrated within Visual Studio Code, and I am beginning to use it, but thus far, I've just been prompting a code block manually within the chat window like, "Rewrite this function to be more concise/readable/performant." I will likely write an update post on the code review tool and the new debug tool soon, especially once my company gets off the full code review waitlist.

**Final Verdict:** Copilot is still fancy autocomplete, but also a good code reviewer. 

2. StackOverflow Replacement

I've updated my ChatGPT model to 4 and even o1. It's mostly useless and needlessly verbose about looking stuff up or asking why X code is behaving in this way. It is sometimes useful if I keep going and going, but by the nature of how it works, it's always agreeing with me. StackOverflow is still the best source of information, which is a pretty big issue because the site is dying. 

Honestly, I feel a **big takeaway from LLMs is you need to understand the internals of your language, frameworks, and libraries more than ever before**. I realize this statement runs quite counter to anything anyone else has been saying about LLMs, but I've never doubted StackOverflow the way I've doubted ChatGPT. (I know that's wrong, since StackOverflow is so very often wrong, but there's something about the multitude of slightly different questions and answers that makes filtering through to some sort of consensus fairly simple compared to the single truth ChatGPT presents itself as. As I said above, I feel that either subsequent prompting is completely useless, or I'm very bad at prompting, so asking for alternate ideas never quite works the same as cross-referencing SO, docs, blog posts, and GitHub Issues.) Without the ability to have multiple sources of truth on the open web anymore, pure reference becomes a much more valuable skill, I think... You should be able to very quickly tell ChatGPT that that fact it just spouted is incorrect and re-prompt them with the ultimate source of truth of *your* facts, and then tell them to debug or generate code based on that fact you know.

Does that make sense? It's weird and counterintuitive. We're at the end of the year for the learning budget, is it time for me to use the remainder on a hardcover copy of ECMAScript 2024.

It's also worth noting that there's now a Copilot chat that is indexing my organization's codebases. In theory, I should be able to ask it questions and find out stuff in other codebases. I have not found this useful at all for the back-end C# codebase. I still find highlighting a specific area of the code in VS Code and asking it to explain it to me useful, though. It's good at language interpretation when you are not worried about accuracy (which is an insane qualifier to make).

**Final Verdict:** Stick to StackOverflow. 

3. Tests Writer

This is basically the same. Write the boilerplate and the first test. It'll fill in the rest.

I'm actually quite interested in TDD these days, which I believe is the next step for how much LLMs have taken over testing for me. They write a lot of tests, it's up to me to do the brain work to make sure that I am actually writing tests of worth.

With our without TDD, the real killer here is just the autocomplete. Tests have so many repetitive statements. Just write one and use the LLM to write the rest quite a bit faster.

I also find it generally useful for debugging issues with tests. It's such a controlled environment that it finally doesn't seem to get overwhelmed. This has been and continues to be the biggest game-changer here.

**Final Verdict:** It's actually the reason I am good at writing tests now. This remains huge.

4. Rubber Duck / Bug Catcher

There's actually one interesting thing it's been hit and miss at -- parenthesis bugs. Sometimes, it works beautifully. Sometimes, it doesn't. Still, these are such a big, frequent pain for me that even the sometimes is useful. The same goes for other typo-induced bugs. I believe this is newly good with Sonnet 3.5 or ChatGPT 4o. 

Otherwise, for rubber ducking, I've gotten more used to it, although I don't necessarily know if it's a good thing or a bad thing. It's just ...there, conveniently, although I don't know if it's doing anything. I am not confident either way that it's saving time or wasting time.

**At this point, I've decided to remove the Chat window from my sidebar.** I still have the Chat prompt when I highlight code and press Cmd + I, but I think there are more productive ways to rubber duck (paper!), and I should go back to using it.

There's only been one instance where that Chat window was particularly helpful for me -- when I needed to generate a Linux command to go through a bunch of JSONs and delete two keys that would have different values each time. I don't have tasks like these very often, and I believe that the ChatGPT chat interface through a browser could also do this. 

**Final Verdict:** Stick to paper. 

...

I've now successfully been using these LLM tools for 5 months. There's been suggestions that 6 months is the necessary training time to get good at these new tools. I think I'm about there. My final conclusions are that it's a game-changer for tests, interesting for code reviews and little syntax bugs, and near useless for everything else. 

If anything, the fundamentals are more important now than ever before. Get good at reading code. Get good at reading docs. Get good at writing valuable tests. 

I will be trying to do that more in 2025, starting with the first half of the year devoted to working via test-driven development. 

I am actually curious this time if anyone is reading this, please do send me an email and let me know how your usage of LLM tools have been. I feel they're overhyped even by real surveys (like in the Pragmatic Engineer newsletter).
