---
layout: post
title:  "Test"
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
- kanji_frequency/draw-chart-krm.js
---

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

Hello World!

<!--Computers and the internet have made communication easier. They've also given us new avenues to discuss things through anonymity and discussion boards. Given this, it's no surprise to anyone that the kind of conversations we have on the internet - vs IRL - could be quite different, reflecting both in language and topic.-->

In Japan, the Ministry of Education requires all students to learn 2,136 standardized Kanji (chinese characters) throughout grades 1 to 6. The list was originally formulated as the Tōyō kanji back in the period just after WWII, but it has gradually been revised over time into the modern Jōyō Kanji with the latest revision being in 2010. 

The list reflects a set of characters that are considered to be important for "regular use". I have little knowledge on the history of the matter, but I assume this refers to formal written communications, such as newspapers, government documents and perhaps advertisements or street signs. All of these are still very relevant elements of lifetyle today.

Obviously the [Jōyō Kanji][kanji-joyo] set does not perfectly reflect Kanji frequency of usage - it was probably not intended for that purpose, anyway. People have compiled [lists of Kanji][kanji-2501] sorted by usage frequency in newspapers and I thought it would be interesting to compare how Kanji taught in schools matches up with Kanji by popular usage.

The chart below consists of Jōyō Kanji sorted primarily by grade; the alternating highlighted sections indicate the separation between grade 1, grade 2, etc up until grade 7. The secondary sorting seems to be done inconsistently however. The Grade 1 Kanji are sorted by Japanese reading (on'yomi then kun'yomi), whereas the grade 7 Kanji seem to be (mostly, if not completely) sorted by number of strokes.

The Kanji have also been categorized into their frequency of usage according to the table I looked up, and the colors each represent a category of 500 Kanji (1-500, 501-1000, etc) up until 2501 Kanji. In particular, Jōyō Kanji not present in the kanji-2501 set are assigned a color of black. You can move your cursor over each Kanji to view its exact usage frequency ranking.

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
  {% elsif 2500 >= freq %}
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
  {% elsif 2500 >= freq %}
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
  {% elsif 2500 >= freq %}
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

Most of the Kanji in grade 1 are used very frequently, and the Kanji from grades 2 to 6 don't diverge far into obscure territory either. The main exceptions are the characters 汽 (meaning steam, used in the compound for train/steam train) and 蚕 (meaning silkworm, used in the compound for silk). 

Side note: Even though they are not used frequently, the objects they represent were once predominant in the culture and lifestyle of the Japanese. Additionally, the character 汽 is very common in Chinese. These may have been influences in selecting them for the Jōyō Kanji, but this is just speculation on my part.

Grade 7 is where things get real. I was surprised to see that the grade 7 Kanji list is about the same length as the entire 1 to 6 list! The thought of having to learn how to write a thousand of these characters along with knowing all their pronunciations is almost kind of discouraging. It goes without saying that these characters will have more strokes and be used less frequently as well.

At the very least, there is still a healthy mix of characters from all six popularity of usage categories in there. I suspect also that most students going into grade 7 would be familiar with the majority of these characters through gaming, television, travel and whatnot already. All in all, the trend in the table is not very surprising.



<!--http://www.kanjiwebeasy.com/kanji/-->
They're so rare, I didn't even bother making them readable.

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
  {% elsif 2500 >= freq %}
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
  {% elsif 2500 >= freq %}
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
  {% elsif 2500 >= freq %}
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

<div id="chart-ivn">
    {% for js in page.draw_chart_ivn_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

<div id="chart-krm">
<!--        <svg width="740" height="420"></svg>-->
    {% for js in page.draw_chart_krm_max_js %}
     <script type="text/javascript">
     {% include {{ js }} %}
     </script>
    {% endfor %}
</div>

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[kanji-2501]:   http://kanjicards.org/kanji-list-by-freq.html
[kanji-joyo]:   http://www.saiga-jp.com/language/kanji_list.html