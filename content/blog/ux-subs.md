---
title: UX When Using Dev Tooling for Non-Developers
description: my experience designing and testing a free AI tool for my friends.
date: 2024-07-22
---

All of my friends know I only really did one impressive thing last year: I built an AI subtitle generator that will take any video or audio file (usually a movie), and output a subtitle file you can drop in with the movie. That's existed for years, but the big change here is that a level of progress had been pushed: Subtitles were finally vaguely sorta kinda ...if you squint... usable for movies in other languages.

It took me 2 or 3 hours, and the entire code can be pasted below: 

```py
 # @title Choose your language and press play to the side
from google.colab import drive
drive.mount('/content/drive')

from google.colab import files
uploaded = files.upload()
filename = next(iter(uploaded))

!pip install git+https://github.com/openai/whisper.git

!sudo apt update && sudo apt install ffmpeg

language = 'Telugu' # @param ["Hindi", "Tamil", "Telugu", "Malayalam", "Punjabi", "Kannada", "Gujarati", "Bengali", "French", "Japanese", "Korean", "Cantonese", "Spanish", "Portuguese"]

!ffmpeg -i $filename subs.mp3
!whisper subs.mp3 --task translate --model large --language $language --output_dir "/content/drive/My Drive/Subtitles"
```

 That's right. It's just 15 lines of Python that wraps around OpenAI's Whisper and uses pre-existing tools using Google Colab's Jupyter notebook system.

 To me, it was an architectural wonder that I could clumsily use a fairly accessible system to do huge amounts of computing for personal gain. I thought everyone would be on board with being able to use this magical tool, because all they really needed was a Google account and some patience.

 As always happens in engineers doing UX, I was very, very wrong.

 Let's go back to v1 of this app:

```py
# Step One: Install Requirements
!pip install git+https://github.com/openai/whisper.git

!sudo apt update && sudo apt install ffmpeg

from google.colab import drive
drive.mount('/content/drive')

# Step Two: Upload Audio File

If you need to get an .mp3 from a video file, you can use VLC Media Player to do so using this tutorial [here](https://researchguides.case.edu/c.php?g=1286426).

Once you have your file, open the file folder on the left-hand corner of the page. Drag the .mp3 you would like to transcribe into the "Files" section.

Give it a minute, there's a blue circle that indicates it's uploading. Since it's as long as a movie, it'll probably take a few minutes. Stay on this page and wait until it's done.

This will upload the audio to this page. Here's what it looks like once you've uploaded a file:

# Step Three: Translate

To translate an .mp3, simply copy and paste the title of your .mp3 file into the command line below and run the cell. Remember to include the .mp3 at the end.

You can change the language as needed in the command line, and English is the default output.

THIS WILL TAKE A WHILE. Once it is done, click the Folder icon again. Wala! There is your SRT. Enjoy!!!

!whisper "jabardasth.mp3" --task translate --model large --language Telugu --output_dir "/content/drive/My Drive/Subtitles"
```


As users tried the app, they got stuck at a myriad number of points:

- They wouldn't be clear on how to connect to a GPU using Colab.
- They'd upload files with invalid characters like `movie name`.
- They were unclear on how to upload files to Google Colab.
- They expected to be able to walk away after Step 1 or 2, because sometimes their uploads took so long, but actually, they had to stay.

Since this got vaguely popular, I actually got emails asking for help on how to use it, and it was fairly easily for me to diagnose every time. **What was obvious to me was not obvious to the user.**

Every time I got an email or message with an issue, I'd update either the documentation or the code to accommodate their lack of understanding, which ended up in the following changes from the original:

1. Everything is one step now and goes in order of shortest to longest time to interact for the user. So, it begins by validating their Google Drive to save the subtitle file.
2. The user uploads a file using an HTML input they are familiar with from other webpages.
3. The user chooses a language from an HTML dropdown that they are familiar with from other webpages.
4. I change the name of their movie file myself into something that Whisper can handle, and explicitly document the limits of what ffmpeg can handle.
5. The app can work with both video and audio files.

Basically, I gave the user a lot less choice (which I, as an engineer like) and put them on a much more linear path.

I eventually was able to get maybe 50% of my expected userbase to deal with the headaches of using a fundamentally technical tool used for college students' coding projects to do our hobbyist movie subtitling. To those 50%, it was magic. To the other 50%, unfortunately Colab still has random failures, the GPUs are often taken, and the subtitling still isn't that impressive.

OpenAI 4o introduced the idea that Indian languages will be 50% faster to translate and have a 20% increase in accuracy. In my limited tests with it, it is a worthwhile enough improvement that I would really like to build v2.0 based on OpenAI 4o's audio model. I highly doubt that OpenAI will be releasing 4o as an open source project that I can simply plug into Google Colab, though.

This means I will likely be building an actual web app for users to use and interface with the API. I'll have full control over the flow, and I'm really hoping that I can get the 50% user base up to 90% once I can design the app myself. 

Honestly, the most difficult part for me is to figure out how to get bots to not use the API without my permission, since I'd be paying for OpenAI's servers out of pocket. I have no idea how to password-protect a site, but I will find out! OpenAI, please, there's so many movies I need to see.

*By the way, if you want to use the AI subtitler, it is at https://is.gd/translatesubs.*
