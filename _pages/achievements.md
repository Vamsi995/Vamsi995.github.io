---
layout: achievement
title: Achievements
permalink: /achievements/
carousels:
    - images:
        - image: /assets/images/awards/IITBombay-1.png
        - image: /assets/images/awards/IITPalakkad-1.png
        - image: /assets/images/awards/winterofcode-1.png
        - image: /assets/images/awards/Alisetti Sai Vamsi_GreenTechnologyQuiz-1.png
---


<hr>
<div class="grid__wrapper">
  {% assign collection = 'achievements' %}
  {% assign posts = site[collection] | reverse %}
  {% for post in posts limit: 5%}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>
