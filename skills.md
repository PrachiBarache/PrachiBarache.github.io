---
layout: default
title: Skills
---
---
[Projects](/projects) |
[Experience](/experience) |
[Leadership](/extracurricular) |
[Contact](/contact)
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
