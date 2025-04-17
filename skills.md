---
layout: default
title: Skills
---

# Technical Skills

{% for category in site.data.skills %}
### {{ category.category }}

<ul>
  {% for item in category.items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>

---
{% endfor %}
