---

layout: projects
carousels:
    - images:
        - image: /assets/images/unsplash-image-4.jpg
        - image: /assets/images/IMG_20220521_133816.jpg
permalink: /projects/
classes: wide

# header:
#     show_overlay_excerpt: true
#     overlay_image: /assets/images/author.jpg
#     overlay_filter: 0.5

    
---

## Notable Works:
<div class="grid__wrapper">
  {% assign collection = 'projects' %}
  {% assign posts = site[collection] | reverse %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>



