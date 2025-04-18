---
layout: default
title: Leadership & Volunteering
---
---

[Home](/) |
[Projects](/projects) |
[Experience](/experience) |
[Skills](/skills) |
[Leadership](/extracurricular) |
[Contact](/contact)

---

# What I Do Outside Work

{% for activity in site.data.extracurricular %}
## {{ activity.title }} ({{ activity.period }})
**Role:** {{ activity.role }}

{{ activity.description }}

**Highlights:**
<ul>
  {% for item in activity.highlights %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>

---
{% endfor %}
