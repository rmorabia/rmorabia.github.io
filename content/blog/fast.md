---
title: "Becoming Faster Than AI"
date: "2025-12-11"
---

Ever since I've tried to step away from using AI-assisted development as my default mode of operation, I've been left with a question -- How do I become a better developer than AI?

To clarify: I _am_ a better developer than AI. So, it's not so much about my accuracy or my actual ability to write good code. This means the question is: How do I make the _feel_ of development better than the AI experience?

There are several mini-workflows where currently the AI is faster (but less accurate, so ultimately slower, but we're talking about feeling faster here) than me, namely the following tasks:

1. Search how this is done in the codebase.
2. Fix this test for me.
3. Multi-file solutions (eg. feature toggle removal across the codebase)
4. General typing and navigating.
5. Terminal operations that require bash scripting, basic Python scripts, or complex changes.

Within this wide range of tasks, only a few really feel like they should be handled by AI: everything related to tests, and the bash scripting. I just don't care about either of those things right now, so let it do that. (Although, really, the takeaway from this article is that I actually think this is proving what a not-well-rounded developer I am. Someone is scoffing reading this at my lack of ability to throw together a working bash script without AI. And you know what! You're right! I should be faster than AI at that, because AI is very slow in practice. All I'm saying is let's leave that for another day, because I have bigger priorities right now due to frequency. Let it be known that AI's greatest boon to my productivity is in exposing my own flaws.)

So, then the primary task becomes: How do I become faster at AI at searching, navigating, and moving across files?

There's a multi-pronged and probably overkill solution for this I've been working on for the past few months and will continue to work on into 2026.

## Step 0: Become very good at typing.

I have an inherent advantage here because I type over 100wpm with over a 97% accuracy rate. I use QWERTY and don't do anything special. Due to this inherently good typing speed, I don't think the cost of switching layouts is worth it. But, I considered it, so I'm adding it here. If you want to become faster than AI, you should probably type at least 90wpm and consider what it takes to get there.

## Step 1: Stop using the mouse to switch windows.

This sounds small, but I think it's very obvious on Zoom calls when you're pairing: First, move your hand to the mouse, then move it over to the dock (I use a rollerball because I got some wrist issues during COVID's trackpad only lifestyle, which is even slower), then open the window, then scroll to the tab you wanted to show, then click. It's just friction. I don't need it.

I tried to find an i3-like solution on Mac, and I found [Aerospace](https://github.com/nikitabobko/AeroSpace). Some people don't like it apparently and there's alternatives, but personally all I'm doing is full or half-screening apps, and switching between them rapidly, and it seems to work for that. There's absolutely no animation or delay, and you can set it so frequently opened apps always open to the same workspace.

So basically, the workflow is like: I'm coding -- Alt + C for Cursor, I need to test, Alt + A for Arc (my browser), I need the terminal, Alt + T for Kitty (my terminal), quick -- what was the issue my coworker said? Alt + S for Slack, etc. It's super easy to memorize and feels frictionless once you get used to it. I genuinely think it's a great boon to the flow state.

## Step 2a: Get more keyboard-friendly versions of your basic apps.

Like I mentioned above, I switched to [Kitty](https://sw.kovidgoyal.net/kitty/) for my terminal. You will be surprised to learn that I spent significant time researching this. It needed to be compatible with the workflow I prefer, Aerospace's notion of windows, and have nice keyboard shortcuts. Kitty finally fit the bill.

I also use [Arc](https://arc.net) although we will see how long that lasts since it got acquired by Atlassian. I find it slightly more keyboard-friendly than Chrome, but I may switch to Zen (which is based on Firefox) once it gets better on Mac. That sidebar-focused browser with folders and auto-clearing tabs and tab previews and split tabs and all the other features in Arc (that are now in Zen since Zen is basically an open-source Arc copy) are just so much more pleasant.

That's pretty much it here. I also used to use Slack in the browser, but switched to the Slack app to be more Aerospace and keyboard compatible. Everything else is the same.

## Step 2b: Learn the keyboard shortcuts of all your most used apps.

I printed them out, personally. I have Aerospace, Kitty, Arc (and Chrome, which is what Arc is built on), Chrome DevTools, Slack, and Obsidian. Most everything else can be moused in peace. Maybe Spotify is worth it as well.

I just try to spend an hour a day in keyboard-only mode. When I want to do something and I'm itching for the mouse, I check my reference sheet and see if there's a keyboard way. Eventually, things become more automatic and other things get drilled in during that practice hour.

## Step 3: Switch to Vim.

You knew this was coming, didn't you? There was no VS Code on the list above, because the VS Code keyboard shortcuts are just godawful. I've learned plenty over the years, and I've failed at learning others over the years.

Look, if you want to navigate really fast, they figured out how to do that 40 years ago. This is a very difficult adjustment for me. Currently, I can navigate within single files and slowly switch files. I haven't figured out how to search or go to definition or other IDE mouse quality of life things. I'm following this book: [LazyVim for Ambitious Developers](https://lazyvim-ambitious-devs.phillips.codes/) because from cursory research, it seems these pre-built Neovim versions are the way to go to get an IDE experience out of the box. LazyVim seems to be the most popular without being too opinionated, but I still already changed some settings.

Vim isn't an easy transition, but I just see the vision where it can feel like Aerospace does -- navigating and searching and navigating my searches within milliseconds so I can remain in the flow and read and write faster than AI. To clarify: I don't actually care about macros or anything. It's really about the navigating ability with Vim.

## Step 4: Use a crazy keyboard.

I think I kind of went too far with this one. I really think all of the above will make me significantly faster, and make the friction for development lower than AI. Switching keyboards, I'm not so sure about. Regardless, I spent the $350 in the heat of research on a used version of a [MoErgo Glove80](https://www.moergo.com/). The idea is that by keeping the pesky keys that are used for keyboard shortcuts where your thumbs are instead of where they usually are, which is in the painful pinky position, it'll be much more pleasant and simple. I don't actually care about the split nature and whatever other features it has. I just wanted that. But, from reading, this is the best one, the most comfortable one, so I decided to get this one.

I haven't actually done anything more than take it out of the box. You have to re-learn to type on these things, which takes time I don't have. It's not even like Vim where I can hop in and out of Vim... I really have to commit to learning on the weekends, like an hour on learning to type websites each week until I get back to at least 50wpm. I have no priority on this one. But, like I said, this in general is a long-term commitment, so I'll do it eventually.

...

Isn't this overkill, Radhika?

Yes. I said that before.

I just couldn't figure out how else to get better at navigating and moving around things. The biggest boon to my development speed was Cursor tabbing between the top of the file, between files, etc.. I want that experience all the time. It just makes sense to me to apply that to navigating windows, navigating within apps like Chrome (switching tabs with the keyboard), and most of all, navigating within the code editor. Until I can get that Cursor-like experience myself, Cursor will always be a much more appealing starting point. In the end, that friction gap means I'm choosing to work in a more brittle, slow environment just because it feels faster.

All this has been available for the decade I've been developing -- and honestly, I even used Vim and Emacs before just because I was working with resource-constrained devices, but I genuinely thought it didn't make a difference for my development speed because the biggest constraint has always been the speed of my thought. I still don't think it _really_ does, but feel matters. I think feel does affect quality.

I'm investing in myself for the long-term here. I genuinely think this will make more of a difference in the long run of my career than learning Svelte or whatever. I am aware I sound crazy, but feel does matter. I'll report back if this ends up being a good investment after another year, when I actually have all of these dialed in rather than being in the learning/adjusting phase. 
