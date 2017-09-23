---
layout: post
title:  "Kanji Frequency Draft"
date:   2017-06-01 22:48:03 -0400
author: George Zhang
categories: japanese reddit 
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

In Japan, the Ministry of Education requires all students to learn 2,136 standardized Kanji throughout grades 1 to 6. The list was originally formulated as the Tōyō kanji back in the period just after WWII, but has been gradually revised over time into the modern Jōyō Kanji with the latest revision being in 2010. 

The list reflects a set of characters that are considered to be important for "regular use" - this can have a number of broad interpretations, but the one I will focus on in this article is Kanji frequency of usage. Since others have already compiled [lists of Kanji][kanji-2501] sorted by usage frequency in newspapers, I was interested in comparing frequency of usage in newspapers to the Jōyō Kanji taught in schools.

So I compiled some data from various sources I'll detail below then created some visuals.

The first chart below consists of all 2,136 Jōyō Kanji sorted primarily by grade; the alternating highlighted sections indicate the separation between grade 1, grade 2, etc up until grade 7. The secondary sorting seems to be done inconsistently. The Grade 1 Kanji are sorted by Japanese reading (on’yomi then kun’yomi), whereas the grade 7 Kanji seem to be sorted by radical and/or number of strokes.

The Kanji have also been color-coded by rank of their frequency of usage in newspapers (which I will denote as n-rank hereon in). Each color represents a category of 500 Kanji (1-500, 501-1000, etc) up until 2501 Kanji. In particular, **Jōyō Kanji not present in the kanji-2501 set are assigned a color of black and n-rank of zero.** You can move your cursor over each Kanji to view its exact n-rank.

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

Notice all the green at the top? It means that Kanji with lower n-rank are being taught in earlier grades, which is almost certainly a reassuring sign!

Most of these Kanji don’t wander too far into obscure territory. The two exceptions are [汽][kanji-汽] (meaning steam, used in the compound for train/steam train) and [蚕][kanji-蚕] (meaning silkworm, used in the compound for silk). Even though they are not used frequently, the objects they represent may have once been predominant in the culture and lifestyle of the Japanese. Additionally, the character 汽 is very common in Chinese. These may have been influences in selecting them for the Jōyō Kanji, but this is just speculation on my part.

Grade 7 is where the curriculum difficulty increases drastically. In fact, there are almost as many grade seven Kanji as there are 1-6 Kanji! We can see that the characters taught in these grades are composed of a mixture of all the n-rank classes, unlike the green-dominated characters taught in the lower grades. 96 of the Kanji taught have zero n-rank alongside 27 which have sub-500 n-rank and 161 with 500 < n-rank ≤ 1000.

The two lowest sub-500 Kanji taught in grade seven are ranked ~270. They include [歳][kanji-歳] (counter for age) and [企][kanji-企] (scheme, plan). Both seem to be very common terms to me, and I was surprised to learn they are not taught sooner. But overall, it is quite reasonable to expect that some of these common characters get pushed back to the later grades; it’s just a fact of statistics and scheduling conflicts.

It appears that the n-distribution of Jōyō Kanji is very skewed towards common Kanji in the lower grades and abruptly becomes quite mixed in the middle grades. This system seems like it would work well in preparing students to consume physical media. But with the history surrounding its creation, one may wonder if the modern Jōyō Kanji are simply a revisioning of an artifact of the past. 

The natural thing way to test this is, then, how do these trends extend to a more modern case such as Kanji usage over the internet?

I wanted to collect a large set of Japanese internet conversation data but wasn’t very familiar with many Japanese content boards. There were of course the Japanese equivalent and namesake/inspiration of 4-chan, 2ch (2ちゃんねる), and the popular video sharing site niconico (ニコニコ), but setting up a scraper for these was needlessly difficult. So I looked elsewhere for a relatively active, recent and diverse Japanese community with easily-scrapable public comments. And where else could I have found such a thing, [but on reddit?][jp-subreddits]

So I extracted this list of subreddits and left it on for a night to collect comments on posts in these subreddits with the help of reddit's nice API. I scraped comments based on the following criteria:

* The comment must be made after January 1, 2016
* Comments should be extracted from no more than 5000 posts in any one subreddit (a post may contain multiple comments)
* If there are more than 5000 posts, the most recent 5000 are selected

My goal was to capture these characters being used in a recent and natural context. Even though it is unavoidable, there seems to be enough variety in these subreddits to not have to worry too much about a few small subreddits dominating with their exclusive spam of certain characters.

At the end of this I managed to collect 324,273 comments over 305 subreddits (actually, even fewer than this, considering some subreddits had no posts that satisfied my criteria), which amounted to 33,244,229 characters in total. There were only 5,835 unique characters across all of these comments. Through this, the internet usage frequency ranking (which I will now denote as the i-rank) can now be found by sorting the characters based on their usage frequency.

Unsurprisingly many of the 5,835 characters were not Kanji. In calculating the i-rank, I filtered out many common non-Kanji characters (hiragana, katakana, roman characters, arabic numerals) but sadly I didn’t have the whole day to pick out all the creatively used emoji characters hidden within the ranks of less-popular Kanji. Therefore, almost all of the characters will have inflated i-ranks, but probably not by more than a few dozen within the sub-2500 i-ranks. Moreover, in the very high i-ranks (~4000+), the value starts to lose meaning as characters tied in frequency (with very few occurrences) have i-ranks determined by the order I encountered them. For example, about 150 characters which appeared exactly 5 times across all comments make up i-ranks ~4000 to ~4150. This is not such a big deal: very few characters with such high i-ranks appear within the Jōyō Kanji list.
<!--http://www.kanjiwebeasy.com/kanji/-->

The i-rank chart below is the schemed the same way as the n-rank chart above **with one major difference: Kanji with well-defined i-rank above 2501 are colored black, while Kanji with i-rank zero are colored white** (they're so rare, I didn't even bother making them readable).

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

The i-rank distribution looks relatively identical to the previously established n-rank distribution, but with more variance. By this metric, there are more uncommon 2000+ Kanji in grades one to six (13 vs 2) and more common 500- Kanji in grade seven (41 vs 27). I personally think that the lists are close enough in similarity such that the Jōyō Kanji have been revisioned fairly well - but this discrepency still raises some hints about the nature of the early-taught Kanji in the Jōyō Kanji list, which will be discussed in a later section.

Because there is i-rank data for characters far beyond the rank of 2501, there are only three Kanji with i-rank = 0 (meaning they were never used in *any* post). Those with sharp vision will find that they are [逓][kanji-逓] (which means something along the lines of relay or communications), [詔][kanji-詔] (imperial edict), and [楷][kanji-楷] (square character style of writing). All three had relatively high (or zero) n-ranks as well.

Of particular interest is the common character [撃][kanji-撃], which has advanced ([no pun intended][kanji-進撃]) from an n-rank of 474 to an i-rank of 246. An interesting hypothesis is that this is due to the influence of popular anime TV series [Attack on Titan (進撃の巨人)][kanji-進撃の巨人], especially now that the second season is currently airing (at the time this post was written) ! 

However, when we take a look at the other Kanji within the name, we find that the opposite holds true for characters 進 and 巨: 進 fell from 143 to 287 and 巨 from 893 to 898, so this hypothesis has no ground. Overall, anime/manga themed subreddits made up only a small portion of the 304 subreddits in the list, so their influence was probably overstated in my mind. (We will see later which communities really dominate).

But first, let’s take a look at how the Kanji n-ranks compare with the i-ranks directly.

<!--Mention hindsight start with 0-index-->
<div id="chart-ivn">
    {% for js in page.draw_chart_ivn_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

<!--Move second half opf this paragraph to addendum EDIT:DONE-->
One must be careful to note that the axes sizes are not equal; this is because I collected more than 2501 (the highest n-rank data availible) Kanji from my internet source, so among the Kanji with n-rank ≤ 2501 there would naturally be some Kanji with i-rank > 2501 stretching out the chart along the i-rank axis. From this asymmetry it may appear like there are more i-like Kanji, but in actuality there are 1,205 n-like Kanji and 829 i-like Kanji[^2].

I will denote a Kanji as n-like if it's n-rank < i-rank and i-like if it's i-rank < n-rank. If we imagine a line with unit slope dividing the quadrant in the graph into two, i-like kanji are below this line and n-like kanji are to the left. There are 2,038 data points in total, 98 less than the number of total number of Jōyō Kanji: the reason for this is that some Jōyō Kanji exceed the n-rank threshold of 2,501[^1]. 

Before I can analyze the demographic of Kanji lying on either extreme, I will first need a measure of extremum to gauge precisely what "extreme" means. There are multiple ways I could have done this (such as a simple difference or ratio between i-ranks and n-ranks), but in the end I decided to use what I will call a g-ratio, which I defined as (i-ratio + 10) / (n-ratio + 10). Adding the small buffer of 10 to either side of the fraction was intended to help the higher ranked Kanji have a presence while maintaining a solid bias to low-ranked Kanji which are still commonly used that have significantly advanced their i-rank beyond their n-rank.

I will choose to exclude any Kanji with n-rank ≤ 1,000 from the data despite the fact that many of the extrema lie beyond this point. The reason for this is that I believe it wouldn't be very interesting to look at n-rank i-rank imbalances in very obscure Kanji, which can be too prone to biases in the subreddit data (i.e. Kanji for which adding or excluding a few small highly-themed subreddits could greatly change their results).

With this definition, a very high g-ratio indicates high i-like extremity and a very low g-ratio means a high n-like extremity. Here are a subset of the Jōyō Kanji with the lowest g-ratio:
<!--n-like, i-like, k-like-->

<div id="chart-krm-min">
<!--        <svg width="740" height="420"></svg>-->
    {% for js in page.draw_chart_krm_min_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

Many of the lowest g-ratio positions are filled by the numeral Kanji, (十,五,九,六,四,七,三,八,二). Undoubtedly this is because the use of arabic numerals has taken over representation of numbers over the internet. However, the Kanji for one (一) is notably not in this list because it is still commonly used in meaningful compounds. Moreover, the Kanji for two (二) has the highest g-ratio of the numerals in this list, which I believe is due to the same aforementioned reason (common compounds include [二人][kanji-二人] and [二度と][kanji-二度と]).

There are also many Kanji associated with politics and/or geography, for example: 
* [国][kanji-国]: Country
* [区][kanji-区]: District
* [市][kanji-市]: City
* [政][kanji-政]: Government
* [党][kanji-党]: Political party

<!--This indicates that politics aren't as hot a topic on Japanese subreddits as they are in the news (and probably compared to English speaking subreddits as well!).-->
We see that many of these Jōyō Kanji (often taught in earlier grades) have an essential role in the context of society, but are not as widely used - an obvious analogy would be the teaching of geography and government in English-speaking elementary schools.

<div id="chart-krm-max">
<!--        <svg width="740" height="420"></svg>-->
    {% for js in page.draw_chart_krm_max_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

Dominating the high end of the spectrum are the two Kanji [曲][kanji-曲] (song) and [音][kanji-音] (sound). 音 rose from an n-rank of 491 to an i-rank of 4 while 曲 astoundingly climbed from an n-rank of 810 all the way to the i-rank of number one!

This is a roundabout indication that music makes up a huge subculture within Japanese subreddits; in fact, this was immediately clear from the fact that there are a few relatively popular subs dedicated to certain musical groups (for example, /r/lovelive_ja). This presumption is strengthened further by noting that characters not far from the top 27 include [歌][kanji-歌] (song, to sing) and [楽][kanji-楽] (component in the compound meaning [music][kanji-ongaku]).

Further down from the two musical titans include [動][kanji-動] and [画][kanji-画] (together [動画][kanji-動画]; animation), which could attest for the less pervasive but still present anime/television/film community. Perhaps SnK was not popular enough to have a presence on its own, but combined with all of its fellow entertainment media, they create the second largest (visible) community on reddit.

<!--I must now distinguish something that becomes apparent based on these two charts: in general, it appears that n-like Kanji are more n-like than i-like Kanji are i-like, which contradicts with an earlier statement I made. However, this is not actually the case, as for this graph I have selected among only the Kanji with n-rank ≤ 1,000; for this subset, the opposite behaviour is exhibited, barring the two i-like titans 曲 and 音.-->

The g-ratio charts I have generated do seem to suggest that the more prominent narratives in newspapers are politics, geography and work whereas they shift towards entertainment on the internet. In any other year, I would say the same for the english speaking side of reddit, but I believe the current political climate has stirred our perceptions of good content ... (this claim is, of course, not verified by any data).

But that's another discussion, for another day.

List of Kanji in i-rank sequential order here: [Internet Kanji][kanji-internet]

It is important to keep in mind that these characters, paired together with different compound characters, have a multitude of different meanings which may have little relevance to the definitions I’ve provided. So the reasons for each ranking I’ve conjectured could be completely misplaced, and actually be because of something else entirely which I’ve overlooked. That’s just another feature of Japanese - and pretty much every other language - that characters on their own can only tell you so much without context.

[^1]: Indeed, combined with the fact that two of the three Kanji with zero i-rank have nonzero n-rank, if one were to count they would expect to see those as 98 - 2 = 96 black (zero n-rank) characters from table 1 of this post, which is correct.
[^2]: Careful readers may notice that 4 data points are missing! These 4 points represent Kanji that are neither n-like nor i-like; they have n-rank = i-rank, which I will refer to as being k-like. The four k-like Kanji are 世 (134), 元 (191), 件 (211) and 憎 (1807). Note that, for reasons stated before (inflation of rank), this is a pretty meaningless category but I nevertheless have added it in for fun.

<!--
[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
-->
[kanji-2501]:   http://kanjicards.org/kanji-list-by-freq.html
[kanji-joyo]:   http://www.saiga-jp.com/language/kanji_list.html
[kanji-逓]: http://jisho.org/search/%E9%80%93
[kanji-詔]: http://jisho.org/search/%E8%A9%94
[kanji-楷]: http://jisho.org/search/%E6%A5%B7
[kanji-進撃]: http://jisho.org/search/%E9%80%B2%E6%92%83
[kanji-汽]: http://jisho.org/search/%E6%B1%BD
[kanji-蚕]: http://jisho.org/search/%E8%9A%95
[kanji-歳]: http://jisho.org/search/%E6%AD%B3
[kanji-企]: http://jisho.org/search/%E4%BC%81
[kanji-撃]: http://jisho.org/search/%E6%92%83
[kanji-進撃の巨人]: https://en.wikipedia.org/wiki/Attack_on_Titan
[kanji-二人]: http://jisho.org/search/%E4%BA%8C%E4%BA%BA
[kanji-二度と]: http://jisho.org/search/%E4%BA%8C%E5%BA%A6%E3%81%A8
[kanji-国]: http://jisho.org/search/%E5%9B%BD
[kanji-区]: http://jisho.org/search/%E5%8C%BA
[kanji-市]: http://jisho.org/search/%E5%B8%82
[kanji-政]: http://jisho.org/search/%E6%94%BF
[kanji-党]: http://jisho.org/search/%E5%85%9A
[kanji-曲]: http://jisho.org/search/%E6%9B%B2
[kanji-音]: http://jisho.org/search/%E9%9F%B3
[kanji-歌]: http://jisho.org/search/%E6%AD%8C
[kanji-楽]: http://jisho.org/search/%E6%A5%BD
[kanji-動]: http://jisho.org/search/%E5%8B%95
[kanji-画]: http://jisho.org/search/%E7%94%BB
[kanji-動画]:http://jisho.org/search/%E5%8B%95%E7%94%BB
[kanji-ongaku]: http://jisho.org/search/ongaku
[kanji-internet]: http://supernoob.wikia.com/wiki/Kanji

[jp-subreddits]: https://www.reddit.com/r/ja/wiki/subreddits_ja