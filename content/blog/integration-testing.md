---
title: The Limits of Front-End Testing
description: should we focus more on integration tests for front-end testing?
date: 2024-09-01
---

I recently submitted a bugfix in a codebase I haven't touched in over 6 months. I added unit tests, manually QAed, and ...broke production pretty badly.

I spent the next couple of days a bit shaken -- in trying to fix an edge case, I ended up breaking a fundamental flow in the app.

How did this happen? We have all sorts of tests: unit tests on most functions and actions (using Jest), component-level tests on this page (using React Testing Library), and end-to-end tests that check if the flow is working (using Cypress). I felt safe in writing code I wasn't 100% familiar with. I wouldn't have been surprised if another edge case showed up, but no part of me was expecting to break the entire flow, given this test coverage.

What was the leak?

First, let me explain the bug, then talk about our tests. I wrote a modification to a function which saves user data to the server, which validates that data and sends it back to us to update the UI with. I made a bad assumption which is that I wanted the data in a specific part to reset to default if the user did a specific action. My code was correct given that assumption, but this would end up locking the user in a loop where it's impossible to ever actually update that data that I keep resetting to default. I, for some strange reason, thought that it would fail the back-end validation if it wasn't completely reset. This is not how it ended up working, of course, because the reset data was completely valid to the back-end, and would get saved as the user's changes every time.

The fix to this was to limit the values that are reset to only be the values I actually needed to reset. So, instead of "User did X, data that relies on X will reset to default," I'm changing it to "User did X, data that relies on X is unchanged, but I'm changing X to Y. They'll never know." This is a bit convoluted, but my summary here is: I made a bad assumption about how data would be validated. This ended up resetting the the user's data every time they tried to save.

So, how did this fail the tests, considering how easy this was to replicate in QA, and the app has a log of user actions to check if what the user actually did is what the app ended up understanding?

Our component-level tests were testing whether or not the correct components rendered and the UI updated as epxected. The UI would update as expected, it was the saving to the server that failed.

Okay, then if the saving failed, how did it pass those unit tests? Our unit tests were testing the server call of the specific function I was editing. My work passed all of these tests because the correct server call was being made and I wrote the first assumption of what the request body to that call should be, and of course, my code passed *my* tests. It was the UI after that wouldn't update!

Okay, then if the UI didn't update correctly, how did it pass the end-to-end tests? The end-to-end tests test the entire flow, changing basically every option possible in one large test per flow, which is not how users use the app -- which would be changing one thing and that appropraitely showing up in the log.

After the incident occurred, I thought: this must be such an easy test to add. How don't we have tests like that already? Every action the user takes, we have a log of what the user has done. So, it's a simple test, user does X, does log say that the user did X? Regardlesss of the request bodies and the state changes, does the app function as expected?

It turns out, we never test that kind of interaction in the app. I actually have a few times in another project I did after this bug, but those tests took multiple seconds using RTL when the average time for RTL is a couple of milliseconds. I think it's against the nature of most apps to do this kind of testing: it would require adding a couple of dozen unit tests at the container level of a sub-application and drilling into sub-components.

I'm the only one writing tests this way, which makes me think I'm writing these tests wrong. After this incident, I opened the RTL test for the container component of this page that was failing, expecting to write another one of these drilling tests, only to find all the sub components mocked and the functions tested in isolation. I think that's the correct way... and it wouldn't have caught my issue even if I did add that test, since just like the unit tests I wrote, I would've updated the request body to reset all my data just like I expected.

I think the answer here is pretty simple: there should've already been integration tests. The ideal test for this scenario, and a lot of scenarios in this app that are constantly sending and receiving data to a back-end (more than any other app I've ever written) is to have robust integration tests. It would've set my alarm signals off if other tests failed, not the new ones I created. How do you do integration tests with React, though, without 30 minute test times in Cypress?

The test that would've fixed this is in my mind: "When I update Section H and hit Save, the request body is as follows. After a successful response, the user log (which is also gotten from the server) says X occurred as follows, and only X occured as follows." The important part here is these would have to be pre-existing tests, dozens of integration tests should've broken when I added my code, sending off alarm signals that this is having unintended consequences.

However, the tooling, infrastructure, testing culture, and other overhead to make this happen is over my head. Even if I wanted to take this on as a project on the side now, I'm not even sure how to accomplish that given the render-focused tests that we write with RTL. I'm not the best at testing yet. I have had a copy of TDD by Kent Beck on my desk before this incident, and I will probably take the time to actually crack it open now after this incident.
