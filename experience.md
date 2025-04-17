---
layout: default
title: Experience
---
---
[Projects](/projects) |
[Skills](/skills) |
[Leadership](/extracurricular) |
[Contact](/contact)
---

# Work Experience

{% for job in site.data.experience %}
### {{ job.position }} @ {{ job.company }}
*{{ job.location }} — {{ job.period }}*

{{ job.description }}

**Highlights:**
<ul>
  {% for item in job.highlights %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>

---
{% endfor %}
