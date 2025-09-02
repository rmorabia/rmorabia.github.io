---
title: "Bring Back Microprogramming"
date: "2025-09-02"
---

For the first time since I started blogging about AI here, I feel I've gone too far.

My current project, as I described in my last post, is very AI-friendly, as it involves a lot of re-implementation of what has been done before. AI speeding up that copy/paste conversion process (in my case, from TypeScript to JavaScript), typing speed, and unit test production has been the only way I could deliver this project on time.

However, it's been a month now, and I feel myself atrophying. I've never been very good at syntax or implementation details -- what are the functions of `Set()`? What is the performance difference between `forEach` and `for...of`? I always look that up, it's the kind of thing I'd never memorize, so you would think the fact that AI makes these kinds of microprogramming decisions for me is great, right? Right?

I'm no longer sure of this. Specifically due to the nature of my workflow lately. Let's take an example of just making a util function, transforming and combining 3 data sources into one useful object for the next page to consume:

1. Tell Cursor I need a function that takes in X (specificaly paste in an example) and outputs Y.
2. Cursor takes several minutes, sometimes 30 minutes of back and forth, to generate something almost there.
3. I lose focus while I wait for it, and it makes such mistakes that require intervention, that I feel I have to sit and watch it.
4. Eventually, it looks right to me, so I tell it to generate tests. This is another 10 minutes of back and forth.
5. I make some heady edits now when I realize the tests or the function are incorrect, and we go back and forth.
6. During this back and forth, I'm editing line-by-line, and I use the autocomplete tab tab tab workflow. It makes microprogramming decisions that I mostly agree with, and sometimes question.

All in all, making a data transformation utility function plus tests takes me an hour.

That's interesting... That's a very interesting length of time. It feels very weird, like I look up from the AI and I feel like I just got started, and it's been an hour.

Now, I know that this isn't the most efficient way to use the AI. The idea from the AI influencers is you give it an extremely clear spec upfront and then it'll hammer out all of the microprogramming details. But honestly, if I'm going to do that, I should just program the whole thing myself after a quick initial scaffold of a new file with that broad overview of the requirements.

Now look at this workflow:

1. Tell Cursor I need a function that takes in X (specifically paste in an example) and outputs Y.
2. I limit myself to 3 iterations on this to get something mildly usable.
3. I switch to another editor that does not have AI features inside of it and iterate on it manually -- including making this micro-proramming decisions myself. (Yes, I still use Intellisense!)
4. I write a single (or two) test for this by hand.
5. I switch back to Cursor and use the tab tab tab workflow to generate the rest of my tests and add any mocks to make that initial test pass.
6. I'm iffy on this part, I haven't decided yet whether it's more efficient to go through the process of getting the tests back with or without AI, but whatever. I can figure that out eventually.

Is this really going to take longer than an hour for the same thing?

There's other variations of these workflows like:

* Write a spec and feed that to the AI and have it iterate on both the code and the tests.
* Write all the tests first by hand (no tab workflow) and have it fill in the code.

These are just variations based on comfort, but I truly believe that those will also take about an hour to finish this.

Look, I genuinely believe that the AI developments in 2025 make me a 10-20% faster programmer. This is most specifically visible with the elimination of writing boring variations of test mocks, and by taking out those microprogramming decisions.

I just don't think the loss of microprogramming is a worthy sacrifice anymore. Forget the tests, I love that the AI does that for me. But, I think those decisions like using a map or an object, `forEach` or `reduce`, `some` vs `find` are actually vital to being a good programmer. And, they really don't take that long to decide yourself from looking at MDN.

So, in practice: What am I changing here? Can't I do this already? Isn't this just weakness?

I find the temptation from Cursor very seductive. Everything with AI. "Chat with me, ask me questions, just tab your way to completion," it seems to tell me. It doesn't even work half the time, but I still do it. This only began once I started using Cursor -- it's just so AI-first. It's so silly because it doesn't make my job any easier. I can't cite it now, but there was a study on how college students use ChatGPT. They're not actually usually writing full essays with it, they're talking to it in the vein that it's a lower cognitive activity. They don't actually write the essays any faster, but they feel they're using less cognitive energy.

So, I am keeping three editors installed now:

1. Cursor, my AI editor of choice
2. VS Code, where I have uninstalled Copilot, but it's still an IDE
3. [CotEditor](https://coteditor.com/), which is a plain text editor that I use for ...text editing reasons. (This is just a random plug for CotEditor. Leave Sublime, embrace Cot if you're on Mac.)

I need to get out of the AI editor when it is not time to use AI. I might find that it's almost never time to use the AI once I go back to this.

End note #1:  My coworker does a thing where he has AI-free days once a week. I like that, too. I'm not ready to do that because like I said, test writing without AI is now deeply unfun to me, but I am considering it.

End note #2: I _should_ actually calculate the times given similar units of work with or without AI, and the different workflow variations within it, but I'm also not ready to do that just yet. Right now, I still think that the feel of the work is more important than the actual time.
