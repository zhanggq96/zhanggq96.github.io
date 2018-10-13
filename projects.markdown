---
layout: page
title: Projects
permalink: /projects/

---
<style>
    .project-container {
        margin-bottom: 15px;
        display: inline-block;
    }
    .project-desc h5{
        font-size: 18px;
    }
    .project-desc p{
        font-size: 14px;
    }
</style>

<!--/* -------------------------------- */-->

<!--https://stackoverflow.com/questions/19089933/how-to-position-two-elements-side-by-side-using-css-->

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/lqpaPL1.png" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5><a href="http://www.maystride.com">Course Dependency Graph</a></h5>
        <p>Visualize the prerequisite requirements of McMaster's courses. Data was taken from the "Prerequisite(s)" section of [AcademicCalendars](https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=32&coid=177311) and is parsed into a tree modelling the logical dependencies between courses. On the browser end, these trees are then recursively merged into a graph to visualize the full dependence structure, starting from the very first courses required.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/Ro1zMAf.png?2" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5><a href="http://www.maystride.com">Anime Stat-tracker</a></h5>
        <p>An automated anime stat-tracking website that aggregates data from MAL over time. I designed the website using django, bootstrap and AngularJS, and the recommender engine using numpy.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/2LrY6Qw.jpg" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Sketchify</h5>
        <p>Transforms binary images to sketch-like images. Trained off of data collected from /r/awwnime, which was processed into a set of "binary" and "sketch" groups. Fork of U-Net GAN; programmed in tensorflow.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/4glcYQ6.jpg" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Kanji Frequency</h5>
        <p>An analysis of kanji frequency in Japanese-speaking subreddits. Data collected with the reddit API, managed with an sqlite3 database and analysed using numpy/pandas. Visualizations generated using d3.js and html/css.</p>
    </span>
    
</div>
<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/AobSrGb.jpg" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Hardware Image Decompressor</h5>
        <p>Decompresses a .mic11 image file, a JPEG-like standard made for Comp Eng 3DQ5. Performs the sequence of steps required for the lossless decoding, dequantization, inverse discrete cosine transform, interpolation and colorspace conversion of an image file.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/8zLQW38.jpg" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Human Reaction Timer</h5>
        <p>A hardware-level implementation of a human reaction timer designed using Verilog. Randomly generates bit sequences using a linear feedback shift register, then buzzes when sequence matches a time counter; user's reaction time is recorded when switch is flipped after buzz.</p>
        <p>Made for Comp Eng 2DI4, with Daniel Merlano.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/xWjR2E1.jpg" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Tweetspace</h5>
        <p>Retrieves specified tweets based on time and location, then performs sentiment analysis on them. A hackathon project made in collaboration with David Zhang (Twitter API retrieval + backend, C#) and Jack Yan (Interface, ASP.net). I worked on natural language sentiment analysis using Python library nltk.</p>
    </span>
    
</div>

<div class="project-container">
    <span class="project-image" style="width:50%;margin-right:2%;float: left;">
        <img src="https://i.imgur.com/wNXY2z0.png" class="project-image">
    </span>
    <span class="project-desc" style="width:45%; float: left;">
        <h5>Rhythm Drive</h5>
        <p>A Guitar Hero/osu! mania-like game with playable modes generated from osu! beatmaps. Music integrated with gameplay.</p>
        <p>A culmulative project for grade 12 CS, programmed in Java using Slick2D. Made with Gary Eng.</p>
    </span>
    
</div>