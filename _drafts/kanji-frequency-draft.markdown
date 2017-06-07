---
layout: post
title:  "Kanji Frequency Draft"
date:   2017-06-01 22:48:03 -0400
categories: jekyll update
ivn_js:
- kanji_frequency/newspaper_vs_internet_freq_gr_1.js
- kanji_frequency/newspaper_vs_internet_freq_gr_2.js
- kanji_frequency/newspaper_vs_internet_freq_gr_3.js
- kanji_frequency/newspaper_vs_internet_freq_gr_4.js
- kanji_frequency/newspaper_vs_internet_freq_gr_5.js
- kanji_frequency/newspaper_vs_internet_freq_gr_6.js
- kanji_frequency/newspaper_vs_internet_freq_gr_7.js
draw_chart_ivn_js: 
- kanji_frequency/draw-chart-ivn.js

krm_js:
- kanji_frequency/kanji_data_krm.js
draw_chart_krm_max_js:
- kanji_frequency/draw-chart-krm-max.js
draw_chart_krm_min_js:
- kanji_frequency/draw-chart-krm-min.js
---
<!--≥-->
<!--Loading stuff-->
<!--<script src="http://d3js.org/d3.v3.min.js"></script>-->
<script src="https://d3js.org/d3.v4.min.js"></script>

{% for js in page.ivn_js %}
 <script type="text/javascript">
 {% include {{ js }} %}
 </script>
{% endfor %}

{% for js in page.krm_js %}
 <script type="text/javascript">
 {% include {{ js }} %}
 </script>
{% endfor %}
<!--End loading stuff-->

Will not render properly on screen with width < 800 px.

<!--Computers and the internet have made communication easier. They've also given us new avenues to discuss things through anonymity and discussion boards. Given this, it's no surprise to anyone that the kind of conversations we have on the internet - vs IRL - could be quite different, reflecting both in language and topic.-->

In Japan, the Ministry of Education requires all students to learn 2,136 standardized Kanji (chinese characters) throughout grades 1 to 6. The list was originally formulated as the Tōyō kanji back in the period just after WWII, but has been gradually revised over time into the modern Jōyō Kanji with the latest revision being in 2010. 

The list reflects a set of characters that are considered to be important for "regular use". I have little knowledge on the history of the matter, but I assume the list was compiled based on importance in formal written communications, such as newspapers, government documents and perhaps advertisements or street signs. All of these are still very relevant elements of lifetyle today.

Obviously the [Jōyō Kanji][kanji-joyo] set does not perfectly reflect Kanji frequency of usage - it was probably not intended for that purpose, anyway. People have compiled [lists of Kanji][kanji-2501] sorted by usage frequency in newspapers and I nevertheless thought it would be interesting to compare how Kanji taught in schools matches up with Kanji by popular usage.

The chart below consists of all 2,136 Jōyō Kanji sorted primarily by grade; the alternating highlighted sections indicate the separation between grade 1, grade 2, etc up until grade 7. The secondary sorting seems to be done inconsistently however. The Grade 1 Kanji are sorted by Japanese reading (on'yomi then kun'yomi), whereas the grade 7 Kanji seem to be (mostly, if not completely) sorted by radical then number of strokes.

The Kanji have also been color-coded by rank of their frequency of usage in newspapers (which I will denote as n-rank hereon in). Each color represents a category of 500 Kanji (1-500, 501-1000, etc) up until 2501 Kanji. **Jōyō Kanji not present in the kanji-2501 set are assigned a color of black and n-rank of zero.** You can move your cursor over each Kanji to view its exact n-rank.

<div class="color-label-wrapper">
    <span class="color-label-seventh">
        <span class="color-label-text">n-rank 500:</span>
        <span class="color-label-box color-label-freq-500"></span>
        <span class="color-label-text">n-rank 1000:</span>
        <span class="color-label-box color-label-freq-1000"></span>
        <span class="color-label-text">n-rank 1500:</span>
        <span class="color-label-box color-label-freq-1500"></span>
        <span class="color-label-text">n-rank 2000:</span>
        <span class="color-label-box color-label-freq-2000"></span>
        <span class="color-label-text">n-rank 2501:</span>
        <span class="color-label-box color-label-freq-2500"></span>
        <span class="color-label-text">n-rank 0:</span>
        <span class="color-label-box color-label-freq-plus"></span>
    </span>
</div>

<div>
<div class='kanji-box kanji-newspaper'>
<!--https://stackoverflow.com/questions/16762714/how-can-i-compare-a-strings-size-length-in-jekylls-liquid-templates-->
{% assign n = 0 %}
{% assign width = 35 %}
{% for row in site.data.kanji_frequency.kanji_data_gr_all %}
  {% assign loopindex = forloop.index | modulo: width %}
  {% assign freq = row.Freq | plus: 1 %}
  {% assign grade = row.Grade | plus: 0 %}
  {% assign n = forloop.length %}
<!--  {{grade}}-->
  {% if loopindex == 1 %}
  <div class="kanji-row">
  {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  
  {% elsif loopindex != 0 %}
  {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  
  {% elsif loopindex == 0 %}
    {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  </div>
  
  {% endif %}
{% endfor %}

{% assign mod = n | modulo:width %}
{% if mod != 0 %}
<!--{{n}}{{width}}-->
</div>
{% endif %}

</div>
</div>

Most of the Kanji in grade 1 are used very frequently, and the Kanji from grades 2 to 6 don't wander far into obscure territory either. The exceptions are the characters 汽 (meaning steam, used in the compound for train/steam train) and 蚕 (meaning silkworm, used in the compound for silk). 

Side note: Even though they are not used frequently, the objects they represent were once predominant in the culture and lifestyle of the Japanese. Additionally, the character 汽 is very common in Chinese. These may have been influences in selecting them for the Jōyō Kanji, but this is just speculation on my part.

Grade 7 is where the curriculum difficulty increases drastically. Before starting on this article, I didn't have much knowledge on the curriculum: I was surprised to discover that the grade 7 Kanji list is about the same length as the entire 1 to 6 list! The thought of having to learn how to write a thousand of these characters along with knowing all their pronunciations is almost kind of discouraging. These characters will have more strokes and be used less frequently as well, making them more difficult to retain.

At the very least, there is still a healthy mix of characters from all six popularity of usage categories in there. I suspect also that most students going into grade 7 would be familiar with the majority of these characters through gaming, television, travel and whatnot already. All in all, the trend in the table is not very surprising.

The natural thing to wonder next is, then, how do these trends extend to Kanji usage over the internet?

Unfamiliar to most foreigners, Japan has it's own branding of social networking/sharing sites. Japan's most popular online community is 2ch (2ちゃんねる) and their most popular video sharing site is niconico (ニコニコ), which are roughly equivalent to 4chan and Youtube here in the western world. I wanted to collect a large set of Japanese internet conversation data but wasn't very familiar with either site, so I looked elsewhere for a relatively active, recent and diverse Japanese community with easily-scrapable public comments. And where else did I find this, [but on reddit?][jp-subreddits]

So I extracted this list of subreddits and hooked it up to reddit's nice API, then left it on for a night to collect comments on posts in these subreddits. I scraped comments based on the following criteria:

* The comment must be made after January 1, 2016
* Comments should be extracted from no more than 5000 posts in any one subreddit (a post may contain multiple comments)
* If there are more than 5000 posts, the most recent 5000 are selected

Obviously, this method will not capture perfectly the whole demographic of Japanese internet users. Even though it is unavoidable, there seems to be enough variety in these subreddits to not have to worry *too* much about a few small subreddits dominating with their exclusive use of certain characters.

At the end of this I managed to collect 324,273 comments over 305 subreddits (actually, even fewer than this, considering some had no posts that satisfied my criteria), which amounted to 33,244,229 characters overall. There were only 5,835 unique characters across all of these comments. Through this, the internet usage frequency ranking (which I will now denote as the i-rank) can now be found by sorting the characters based on their usage frequency.

Unsurprisingly many of the 5,835 characters were not Kanji. In calculating the i-rank, I filtered out many common non-Kanji characters (hiragana, katakana, roman characters, arabic numerals) but alas I didn't have the whole day to pick out all the creatively used emoji characters hidden within the ranks of less-popular Kanji. Therefore, almost all of the characters will have inflated i-ranks, but probably not by more than a few dozen within the sub-2500 i-ranks. Moreover, in the very high i-ranks (~4000+), the value starts to lose meaning as characters tied in frequency (with very few occurances) have i-ranks determined by the order I encountered them. For example, about 150 characters which appeared exactly 5 times across all comments make up ranks ~4000 to ~4150. This is not a big deal, however: very few characters with such high i-ranks appear within the Jōyō Kanji list.
<!--http://www.kanjiwebeasy.com/kanji/-->

The i-rank chart below is the schemed the same way as the n-rank chart above with one major difference: Kanji with well-defined i-rank above 2501 are colored black, while Kanji with i-rank zero are colored white (they're so rare, I didn't even bother making them readable).

<div class="color-label-wrapper">
    <span class="color-label-seventh">
        <span class="color-label-text">i-rank 500:</span>
        <span class="color-label-box color-label-freq-500"></span>
        <span class="color-label-text">i-rank 1000:</span>
        <span class="color-label-box color-label-freq-1000"></span>
        <span class="color-label-text">i-rank 1500:</span>
        <span class="color-label-box color-label-freq-1500"></span>
        <span class="color-label-text">i-rank 2000:</span>
        <span class="color-label-box color-label-freq-2000"></span>
        <span class="color-label-text">i-rank 2501:</span>
        <span class="color-label-box color-label-freq-2500"></span>
        <span class="color-label-text">i-rank 2501+:</span>
        <span class="color-label-box color-label-freq-plus"></span>
        <span class="color-label-text">i-rank 0:</span>
        <span class="color-label-box color-label-freq-n"></span>
    </span>
</div>

<div>
<div class='kanji-box kanji-internet'>
<!--https://stackoverflow.com/questions/16762714/how-can-i-compare-a-strings-size-length-in-jekylls-liquid-templates-->
{% assign n = 0 %}
{% for row in site.data.kanji_frequency.kanji_data_internet_gr_all %}
  {% assign loopindex = forloop.index | modulo: width %}
  {% assign freq = row.Freq | plus: 1 %}
  {% assign grade = row.Grade | plus: 0 %}
  {% assign n = forloop.length %}
<!--  {{grade}}-->
  {% if loopindex == 1 %}
  <div class="kanji-row">
    {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  
  {% elsif loopindex != 0 %}
    {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  
  {% elsif loopindex == 0 %}
    {% if 0 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-plus kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 1500 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-1500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2000 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2000 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% elsif 2501 >= freq %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-2500 kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% else %}
  {% if 1 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-1">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 2 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-2">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 3 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-3">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 4 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-4">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 5 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-5">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 6 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-6">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 7 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-7">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 8 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-8">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% elsif 9 == grade %}
  <span class="kanji kanji-freq-n kanji-grade-9">{{row.Kanji}}<span class="kanji-tooltip"><div>Kanji: {{row.Kanji}}</div><div>Frequency Rank: {{freq}}</div></span></span>
  {% endif %}
  {% endif %}
  </div>
  
  {% endif %}
{% endfor %}

{% assign mod = n | modulo:width %}
{% if mod != 0 %}
<!--{{n}}{{width}}-->
</div>
{% endif %}

</div>
</div>

The overall i-rank distribution looks relatively identical to the previously established n-rank distribution, but with more variance overall. By this metric, there are more uncommon 2000+ Kanji in grades one to six (13 vs 2) and more common 500- Kanji in grade seven (41 vs 27).

Because there is i-rank data for characters far beyond the rank of 2501, there are only three Kanji with i-rank = 0 (meaning they were never used in *any* post). They are [逓 (which means something along the lines of relay or communications)][kanji-逓], [詔 (imperial edict)][kanji-詔], and [楷 (square character style of writing)][kanji-楷]. All three had relatively high (or zero) n-ranks as well.

Of particular interest is the common character 撃, which has advanced ([no pun intended][kanji-進撃]) from an n-rank of 474 to an i-rank of 246. An interesting hypothesis is that this is due to the influence of popular anime TV series Attack on Titan (進撃の巨人), especially now that the second season is currently airing (at the time this post was written) ! 

However, when we take a look at the other Kanji within the name, we find that the opposite holds true for characters 進 and 巨: 進 fell from 143 to 287 and 巨 from 893 to 898, so this hypothesis has no ground. Overall, anime/manga themed subreddits made up only a small portion of the 304 subreddits in the list, so their influence was probably overstated in my mind. (We will see later which kinds of communities *really* dominate these boards.)

But first, let's take a look at how the Kanji n-ranks compare with the i-ranks directly.

<!--Mention hindsight start with 0-index-->
<div id="chart-ivn">
    {% for js in page.draw_chart_ivn_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

<!--Move second half opf this paragraph to addendum-->
I will denote a Kanji as n-like if it's n-rank < i-rank and i-like if it's i-rank < n-rank. If we imagine a line with unit slope dividing the quadrant in the graph into two, i-like kanji are below this line and n-like kanji are to the left. There are 2,038 data points in total, 98 less than the number of total number of Jōyō Kanji: the reason for this is that some Jōyō Kanji exceed the n-rank threshold of 2,501 [^1]. 

One must be careful to note that the axes sizes are not equal, but even after taking this into account, by inspection, there seem to be far more low-end i-rank extrema (Kanji with high n-rank sitting close to the n-rank axis) among the data. This is despite the fact that we have far more i-rank data beyond 2,500. The apparent discrepancy can be explained if we recall that our set only contains Jōyō Kanji. In actuality, there are 1,205 n-like Kanji and 829 i-like Kanji; Kanji that are n-like are less extreme in their n-likeness in general. The imbalance in the number of n-like and i-like Kanji presents just another confirmation that the Jōyō Kanji list was better designed for reading the newspaper rather than less formal internet discussions.

To analyze the demographic of Kanji lying on either extreme, I will need a measure of extremum. There are multiple ways I could have defined one (such as a simple difference or ratio between i-ranks and n-ranks), but in the end I decided to use what I will call a g-ratio, which I defined as (i-ratio + 10) / (n-ratio + 10). Adding this small buffer to either side of the fraction was intended to help the higher ranked Kanji have a presence while maintaining a solid bias to low-ranked Kanji which are still commonly used that have significantly advanced their i-rank beyond their n-rank.

I will choose to exclude any Kanji with n-rank ≤ 1,000 from the data despite the fact that many of the extrema lie beyond this point. The reason for this is that I believe it wouldn't be very interesting to look at n-rank i-rank imbalances in very obscure Kanji, which can be too prone to biases in the subreddit data (i.e. Kanji for which adding or excluding a few small highly-themed subreddits could greatly change their results).

Here are a subset of the Jōyō Kanji with the lowest g-ratio:
<!--n-like, i-like, k-like-->

<div id="chart-krm-min">
<!--        <svg width="740" height="420"></svg>-->
    {% for js in page.draw_chart_krm_min_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

Many of the lowest g-ratio positions are filled by the numeral Kanji, (十,五,九,六,四,七,三,八,二); the use of arabic numerals has taken over representation of numbers over the internet. Notably, however, the Kanji for one (一) is not in this list because it is still commonly used in meaningful compounds. Moreover, the Kanji for two (二) has the highest g-ratio of the numerals in this list, which I believe is due to the same aforementioned reason (common compounds include 二人 and 二度と).

There are also many Kanji associated with politics and/or geography; 
* 国: Country
* 区: District
* 市: City
* 政: Government
* 党: Political party

This indicates that politics aren't as hot a topic on Japanese subreddits as they are in the news (and probably compared to English speaking subreddits as well!).

<div id="chart-krm-max">
<!--        <svg width="740" height="420"></svg>-->
    {% for js in page.draw_chart_krm_max_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

Lorem Ipsum



Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[^1]: Indeed, combined with the fact that two of the three Kanji with zero i-rank have nonzero n-rank, if one were to count they would expect to see those as 98 - 2 = 96 black (zero n-rank) characters from table 1 of this post, which is correct.

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[kanji-2501]:   http://kanjicards.org/kanji-list-by-freq.html
[kanji-joyo]:   http://www.saiga-jp.com/language/kanji_list.html
[kanji-逓]: http://jisho.org/search/%E9%80%93
[kanji-詔]: http://jisho.org/search/%E8%A9%94
[kanji-楷]: http://jisho.org/search/%E6%A5%B7
[kanji-進撃]: http://jisho.org/search/%E9%80%B2%E6%92%83
[jp-subreddits]: https://www.reddit.com/r/ja/wiki/subreddits_ja