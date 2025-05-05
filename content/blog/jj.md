---
title: "JJ: Hype not achieved"
date: "2025-05-05"
---

I have been experimenting with smaller PRs in order to bribe people to review my code faster. My team’s average PR time to first review is 12.1 hours, which is the slowest of all the front-end teams in my organization. Surely, I could fix this by putting up smaller PRs (250 lines or less, on average).

This is difficult, because there’s no greater headache than a `git merge` in a PR dependent on another PR you just merged, but then other people merged in between. It feels like a flow that is prone to bugs and a lack of confidence.

The way I use Git and GitHub as a source repository encourages certain behaviors:

- *One commit per PR.* Sure, there are subsequent commits for comments, but primarily, there’s no point in splitting up the PR into multiple commits naturally as this makes reviewing the diff with master more difficult.
- *No stacked, dependent PRs.* Due to the above rebasing horrors I described.
- *Formatting, etc.. will never gets its own PR.* Despite the fact that this makes PRs factually harder to review, everyone simply has to deal with it.

Surely, there must be a magical tool to overcome all of these issues and make my PRs so beautiful that people will review them within minutes. Surely… some way to put formatting into its own PRs and then have subsequent PRs follow a single responsibility principle instead of following a single ticket principle!

Enter [JJ](https://github.com/jj-vcs/jj).

It’s git-compatible, it handles dependencies in a way that “just works,” and suffers absolutely none of the rebasing horrors of git.

I read all I could about it for a while, and it was all making sense. It sounded great, particularly with the GitHub-compatible extension for VS Code [VisualJJ](https://www.visualjj.com/).

For a while, it was really working. I was putting up PRs and just working on the next one, and it was already ready to go by the time I got an approval and a merge.

Then, after VisualJJ broke for me late one week, I stopped using it. (In VisualJJ’s defense, which I think is a one man operation by Fedor Sheremetyev, he’s been super responsive and quick with bug reports). I meant to restart the next Monday, I mean, VisualJJ fixed the bug within 2 days.

Why didn’t I? I had a team member join on rotation who just catapulted my personal PR approval rate. It also seemed that my commitment to smaller PRs did seem to be a convincing bribe! I was no longer finishing my follow-up PRs before I got an approval. None of those issues with Git mattered anymore, although I should probably still be putting major Prettier changes into its own PR.

Which by the way — is possible. I like GUI clients for Git. I use VS Code’s built-in one a lot, but I also keep [Sourcetree](https://www.sourcetreeapp.com/) around on the side, primarily because it’s free and I would never pay for a Git client. Perhaps there’s a VS Code extension for this, but Sourcetree has a great feature that lets you commit a chunk rather than files. This _should be_ how Git works. I think technically, it is how Git works, and it’s simply our laziness from the clients of usage (`git add --all` or really simple GUIs) that limit the functionality.

I am no longer going to use JJ, personally. The time investment was worth my time, but tools can not overcome people problems. Honestly, some people on my team are review leeches, and I am sure there are stats for this, of a ratio of reviews left : reviews asked for. This needs to be fixed from a management perspective, not a personal tooling perspective.

I think JJ is a much better technology that makes way more intuitive sense than Git, but I also simply do not care enough about Git to go against the status quo. I think it’s likely a better use of my time to use a great GUI like Sourcetree and maybe to take some time to do a deep dive into Git again, for the first time since I started using it in… god, was it 2013?

The most interesting question here is: Would I use JJ for a personal project? So, not JJ as a band-aid on top of GitHub’s limitations (because by the way, GitLab supports stacked diffs [natively](https://docs.gitlab.com/user/project/merge_requests/stacked_diffs/)), but as a native source control tool for a side project.

…I don’t think so. All my problems with Git also come from other people. I could work with 1-2 other people using just Git CLI with almost zero wasted time. So again: it all comes down to people.

Would I work with stacked diffs in the future, though? Absolutely. I think it just makes sense. This is part of the problem with JJ as a band-aid for Git. It would just combine all my stacked commits (I don’t know if they’re called commits in JJ, but whatever, you get the idea) into one commit when making a new Git PR. I’d make an edit on a comment, and it’d just update the existing commit — no real diff tracking remotely, which I didn’t love.

What I really want is for GitHub to support stacked diffs so I can actually make these JJ-size PRs with a UI that intuitively helps the reviewer understand the progressive changes over time — first just the formatting changes, then the data additions, then the UI changes, then the tests, all as separate units of work.

I do think that feature alone would convince me to use GitLab if I was working on a professional project from scratch today. For a side project, I would still likely stick to GitHub due to the open source visibility on there.

Fundamentally, what this comes down to is a few core ideas:

- Reading code is one of the most important parts of the job.
- Does JJ make that easier? No, in fact it makes it a bit harder because I currently use JJ a as a GitHub band-aid.
- Small PRs (250 lines or less) seem to be an effective max size for people finding a PR easy to read.
- Everyone really needs to pull their weight on code review quantity, or it will cause leeching and uneven burdens.
- Stacked diffs do make reading PRs easier, more effective, and faster.
- Tools can not overcome people problems.

Git works, and it will likely be industry standard for another decade, at least. I know the FAANGs use something different, but I have zero desire to work there, so I will stick to Git and concern myself with other problems.

My other experiment ongoing right now, by the way, is TDD. I will write a blog post once I get a solid idea about how that has gone, as well.
