---
title: "Time Curves in AI-Assisted Development"
date: "2025-08-13"
---

I am currently working on a decently greenfield project (a rarity in my work), so I am finally able to test the result of telling Cursor to let ‘er rip. Using Claude Sonnet-4 and the Agent mode, I upload a Figma screenshot, describe what needs to be done in vivid detail (using my voice), build off of some rules and memories Cursor picked up, and describe some similar components in the codebase to model off of.

Within an hour of iterating on the prompts, I get something bare that matches 75% of my end-intended functionality.

So, it’s easy to assume — there’s 50% of my work done. I’ve cut the time for something that would’ve taken me 3 days before to 1.5 days, right?

In practice, after doing these a few times, I can safely say it’s probably more like 20% of the development time cut off. 3 days takes …2.5 still.

There’s a weird false confidence from the old way of coding. If I was developing these features by hand, things go very linearly — I build one line of my UI at a time. I add the data, then the header, then the first button, then the second modal, etc.. As a human, I write pretty good code the first time and **edit as I go** so when I am done with the header, chances are it’s pretty similar to how that code is going to look when I submit my PR.

However, with AI-assisted development, that’s not the case at all. I can get all that functionality, and things look like they work, but as I start reading the code and editing — one thing breaks another and I’m making broad-stroke changes across the codebase. It’s all very 2 steps forward, 1 step back. Instead of the tasks being to build one thing at a time, the tasks take nearly as long with a different linearity: remove the ungodly awful hacky code, tell the AI how to replace it, fix the thing three steps down that broke, yell at the AI to stop adding that awful code, write the fix by hand, and rewrite the code to be more concise and clear and human, and read the next section of code… and do it all over again. It takes time. It's just a different workflow, not necessarily a better or faster one.

Working with this has solidified for me that AI is really only useful for experienced engineers with taste and judgment and a pre-existing database in their mind of how the solution is likely going to look. It’s way better than it was a year ago, where I am now actually seeing slightly more than typing gains now, but the judgment gap seems insurmountable in the near future. We are responsible for every line of code we check in!

As always, open and willing to hearing other perspectives and talking about it!
