---
title: "Open Source Project Idea: Visual Studio Code Extension that renders the DOM output of Jest and React Testing Library"
date: "2025-01-08"
---

Unfortunately, I got an actually useful open source project idea at work today. Because ideas matter more than execution, I have to write this down publically and think about it.

I encountered an issue in the malaise of afternoon with RTL, as I always seem to. This has become a bigger headache ever since I started trying to do all of my tickets using TDD. My "tests" are usually never wrong, it's always the setup of dependencies and mismatched expectations of what is actually rendering. I [prefer integration tests](https://rmorabia.com/blog/integration-testing/), so I would really like to avoid mocking prematurely.

It would be _really_ useful to see a preview of what the DOM output is. Jest debug is quite helpful, but doesn't quite fulfill the need.

There is a [project that already does this](https://jest-preview.com), but has been abandoned, and doesn't quite have the feature set I would like, which is namely:

* A VS Code extension so there is no need to install an npm package in my corporate project, project agnostic
* Uses a browser inside the code editor just like the "Live Preview" extension (VS Code supports this with "Simple Browser")
* Process the DOM that RTL is seeing and outputting on failure
* Use some sort of "debug" function to pause and continue at certain points, like how Redux actions work, a "timeline" of sorts

That's ...about it. The last point is optional, the first 3 would be great.

Perhaps I will make this. Perhaps I will not. If I do, I'll blog about my progress here. I'd love some name ideas, in the meantime.
