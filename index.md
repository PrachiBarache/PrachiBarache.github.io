---
layout: default
title: Prachi Barache | Data Science Portfolio
---

# About Me

Data Science professional with expertise in analyzing large datasets to extract actionable insights for business decision-making. Skilled in identifying patterns, visualizing complex data, and communicating findings to stakeholders. Experience developing data-driven solutions that translate complex problems into significant actions.

Passionate about using statistical techniques and advanced analytics to deliver real results in rapidly evolving business environments. Specializes in neural network optimization and computational efficiency, with a focus on making AI more accessible through efficient implementation.

## Experience

{% for job in site.data.experience %}
### {{ job.position }} | {{ job.company }}
*{{ job.location }} | {{ job.period }}*

{{ job.description }}

{% for item in job.highlights %}
- {{ item }}
{% endfor %}

{% endfor %}

## Featured Projects

{% assign featured_projects = site.data.projects | where: "featured", true %}
{% for project in featured_projects %}
### {{ project.title }}
{{ project.description }}

**Technologies:** {{ project.tech | join: ", " }}

{% endfor %}

## All Projects

{% for project in site.data.projects %}
### {{ project.title }}
{{ project.description }}

**Technologies:** {{ project.tech | join: ", " }}

{% endfor %}

## Skills

{% for skill_category in site.data.skills %}
### {{ skill_category.category }}
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}

## Education

{% for edu in site.data.education %}
### {{ edu.degree }}
*{{ edu.institution }}, {{ edu.location }} | {{ edu.period }}*

{{ edu.description }}

**Key Courses:** {{ edu.courses | join: ", " }}
{% endfor %}

## Contact

- Email: {{ site.author.email }}
- Phone: {{ site.author.phone }}
- Location: {{ site.author.location }}
- [GitHub](https://github.com/{{ site.social.github }})
- [LinkedIn](https://linkedin.com/in/{{ site.social.linkedin }})