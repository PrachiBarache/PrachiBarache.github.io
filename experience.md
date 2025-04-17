---
layout: default
title: Experience
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
