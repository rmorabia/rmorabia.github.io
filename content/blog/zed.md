---
title: "Goodbye Cursor. Hello Zed."
date: "2026-06-08"
---

I reached a breaking point. Despite already writing about my problems with Cursor in my last post, I still feel a need to announce this: I'm **officially uninstalling Cursor**. 

Sometime late last week, Cursor removed the ability to see the diffs for the chat changes with the Discard / Keep Changes button. I don't know if this is a bug or deliberate, but either way, I'm done. This was the feature that made me move to Cursor in the first place. This just solidifies that Cursor doesn't care about my developer-as-driver approach anymore. 

I have uninstalled Cursor from my laptop, and if I don't use it before the end of the month, I am going to request removing my subscription to Cursor. (For reference, this is $65/m. I also have an enterprise subscription to Copilot.)

So, done with the negativity, let's move onto some thoughts about my Zed migration:

### Why Zed?

One of my primary motivators for moving to Zed is to have a setup that works seamlessly across my work life and my personal life again. Over the past year of working with AI at work, I know that I like it (particularly autocomplete++), and I've gotten very used to it. This has meant that the more time has passed, the more sitting down to code something at home has made my fingers freeze in place.

Here are the advantages Zed has for me with personal coding:

- Zed's AI plan is $10/m and includes unlimited context-aware autocomplete and $5 in credits to the American AI companies.
- If I need more credits than that, I can use a subscription from OpenRouter hooked up to a cheaper Chinese model such as Kimi K2.5.
- Claude Code is the agentic harness I have access to at work. At home, I can hook up Pi via Zed's investment in ACP. (Although, I doubt I'm going to do this often.)
- Unlike Copilot's similar $10/m plan, I am able to retain data privacy on their cheapest plan without paying for an enterprise plan.
- Zed has the best Vim mode of any IDE, making my investment into Vim useful still.
- Zed will run fast even on my $300 Thinkpad T14, not just my Apple M3 Pro at work.
- I don't actually think my older Thinkpad can support this, but I can technically get next-edit predictions via Qwen on LM Studio, and use Qwen as a chatbot. It probably still makes sense to just pay for the outsourcing, but I can technically use Zed for entirely free.

What are the disadvantages?

- Lots of core features are still missing. But, the good news is, they're actively being worked on. The biggest one for me is a Telescope-style search box, which currently makes LazyVim more of an IDE than Zed. (And, I actually don't want to be a Vim user. So, they should fix this.)
- It's a venture-funded startup and enshittification feels inevitable.

I don't think these are enough to take me off of it, because what's my alternative? VS Code, which I've used for a decade and which has always been eh for personal coding due to the performance and security issues? Sublime/JetBrains??? Maintaining the only truly lifelong IDE Emacs/Vim? 

I think Zed is the right choice right now. It's the most open platform for AI integrations, has the GPL license that theoretically will allow forks if they ever enshittify. I think we can safely say investing in this will get me another 5 years of usage.

### How Zed?

So, how's my setup?

I have invested a lot into my Zed setup, and I'm still not quite finding it perfect. 

First, I am using the keybindings from VS Code. Namely, Cmd + P for File Search and Cmd + Shift + P for command search are two things I've gotten very used to. I also have keyboard bindings to open the various sidebars to get a VS Code-like experience.

Second, the autocomplete setup for Zed was very light. I changed it to be much more aggressive and Cursor-like, including using tab as the key in question. I use Eager mode, and it's still not nearly as eager as Cursor. It's good enough, though.

Third, probably one of the best things about Zed: You don't need plug-ins. I know that's how all code editors have worked for decades before VS Code came along, but seriously. It just works. The only plug-ins I have are for language servers and syntax themes. Git including Git blame just work. Colorized brackets and other quality of life features like Vim mode are just settings. I hope they keep this up, becuase I really find VS Code extensions to be a major source of security concern.

There's so many small things that really annoy me, though. For example, if I accidentally split my view, how do I go back to just one? I never want two screens open next to each other except in diffs, and there's no shortcut to just have a single view. Another example, I can never tell if my linters are working. I'm also worried with the lack of big extension library how well-supported more obscure languages than JavaScript are... Is Zed good for C++? I don't know yet.

Lastly, I have a _bunch_ of AI setups in place. I have the Claude Code agent in place via Amazon Bedrock. I have Amazon Bedrock hooked up plain with the Zed agent. I have GitHub Copilot available via its agent or the Zed agent. I have Ollama and LM Studio set up for both agentic and autocomplete. I have Copilot on via autocomplete, or I could personally use the Zed model -- which is open-weighted.

I'm hoping that Zed invests more in that quality of life stuff. I do think its performance and open AI setup is amazing, but death comes via a thousand papercuts. 

I guess I'll keep updating about this even though it's substantially mundane. Or, I won't, because I stick to Zed without any more dramatic moves. 
