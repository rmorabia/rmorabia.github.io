---
title: "Leaving Static-Site Generators"
date: "01-07-2024"
---

I recently redid rmorabia.com using an static-site generator -- [11ty](https://11ty.dev). For the first time in a decade of blogging using SSGs, I was genuinely exhausted of learning the "hot new thing." I set up my 11ty blog within a day, and find the process of writing and changing things much easier than my old blog using Gatsby (a bloated mess, imo, which I only used because it was JS-native).

But... then came time to redo my friend Kevin Carson's website, which I last did with Hugo in 2018. Hugo?! Go?! What was I thinking?

I thought about going back to good ol' Jekyll, which probably works the best out of the box of any of these SSGs I've ever used. I was browsing themes to build off of in Jekyll, and then within the theme README, I saw something curious I hadn't before... A copy of the theme using just HTML.

I immediately downloaded it and have been working on the site using raw HTML and CSS ever since. There is a single 100-line JavaScript file to scale the website properly when going mobile vs desktop, and some external scripts to FontAwesome and related things, but otherwise: it's hand-rolled.

It is actually the easiest time I've had building a website in a decade... It may even be easier than Wordpress. I had even forgotten how to "deploy" an HTML website onto a service like Netlify. But, it just worked, just like everything else with HTML.

I have no clue how it is from a performance standpoint. I would have to assume my 11ty blog is more compressed, but I think the only big files that wouldn't load even on the most 2G of connections for this website are the files and icons.

I've been maintaining this website for 6 years at this point, and I think now that it's just raw HTML and CSS, I will have a much easier time the next six years maintainign it as Kevin writes more books and needs the details of the content changed.

I have no plans to use SSGs for anything but blogs anymore. We keep getting enticed by these fancy tools, but for long-term, decades of maintainability, nothing beats simplicity.

You can see the commits that just make sense [here](https://github.com/rmorabia/kevinacarson.org/commits/jekyll/).
