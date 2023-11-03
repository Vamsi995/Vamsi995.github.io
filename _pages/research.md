---
layout: splash
title: Research
permalink: /research/
tagline: "My research interests"
author_profile: true
# header:
#     overlay_image: /assets/images/research banner.png
#     overlay_filter: 0.5
     
#     actions:
#         - label: "Reinforcement Learning"
#           url:
#         - label: "Natural Language Processing"
#           url:

---

## Research

<div class="grid__wrapper">
  {% assign collection = 'research' %}
  {% assign posts = site[collection] | reverse %}
  {% for post in posts %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>



<!-- - **Summer Research Intern - CiSTUP Lab - IISc Bangalore**
    - Working on developing coordinated MARL (Mutli Agent Reinforcement Learning) algorithms for collision avoidance in open traffic systems and to mitigate phantom jams in closed traffic systems.
    - Setting up custom RL environments using PyGame and OpenAI Gym and running simulations leveraging Tensorflow GPU

- **Research Intern - Infinity Labs - UST Global**
    - Worked on building production level Paraphrase Generator using SOTA NLP transformer architectures.
    - Developed a web API using streamlit and flask for model inference.
    - Built a data generation CLI tool using the paraphrase generator for creating datasets with similar semantics
    - Contributed a model to the open-source hugging face library. https://huggingface.co/Vamsi/T5_Paraphrase_Paws -->