---
layout: default
title: Projects
---

# Projects

{% for project in site.data.projects %}
## {{ project.title }}
{{ project.description }}

**Tech:** {{ project.tech | join: ", " }}

{% if project.github_link %}
[GitHub]({{ project.github_link }})
{% endif %}

---
{% endfor %}
