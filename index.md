---
layout: default
title: Prachi Barache | Data Science Portfolio
---

# Hello, I'm Prachi 👋

I'm a Data Science professional passionate about turning complex data into meaningful insights. With a background in neural network optimization and computational efficiency, I love tackling challenging problems and making AI more accessible.

When I'm not coding or analyzing data, you'll find me organizing community events, mentoring aspiring data scientists, and exploring new technologies. I believe in the power of data to drive positive change and enjoy collaborating with others to make that happen.

<!-- ## Core Competencies

<div class="skills-highlight">
  <span class="skill-tag">Python</span>
  <span class="skill-tag">Machine Learning</span>
  <span class="skill-tag">Neural Networks</span>
  <span class="skill-tag">Data Analysis</span>
  <span class="skill-tag">NLP</span>
  <span class="skill-tag">Deep RL</span>
  <span class="skill-tag">PyTorch</span>
  <span class="skill-tag">TensorFlow</span>
  <span class="skill-tag">HPC</span>
</div> -->

## My Journey

{% for job in site.data.experience %}
### {{ job.position }} | {{ job.company }}
*{{ job.location }} | {{ job.period }}*

{{ job.description }}

{% for item in job.highlights %}
- {{ item }}
{% endfor %}

{% endfor %}

## Projects I'm Proud Of

{% assign featured_projects = site.data.projects | where: "featured", true %}
{% for project in featured_projects %}
<div class="project-card">
  <h3>{{ project.title }}</h3>
  <p>{{ project.description }}</p>

  <div class="project-tech">
    {% for tech in project.tech %}
    <span class="tech-tag">{{ tech }}</span>
    {% endfor %}
  </div>
  
  {% if project.github_link != "" %}
  <a href="{{ project.github_link }}" class="project-link">View on GitHub</a>
  {% endif %}
</div>
{% endfor %}

## All Projects

{% for project in site.data.projects %}
### {{ project.title }}
{{ project.description }}

**Technologies:** {{ project.tech | join: ", " }}

{% if project.github_link != "" %}
[View Project on GitHub]({{ project.github_link }})
{% endif %}

{% endfor %}

<!-- ## Skills

{% for skill_category in site.data.skills %}
### {{ skill_category.category }}
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}

## What I Do Outside Work
{% for activity in site.data.extracurricular %}
<div class="activity-card">
  <h3>{{ activity.title }}</h3>
  <h4>{{ activity.role }}</h4>
  <span class="activity-period">{{ activity.period }}</span>
  
  <p>{{ activity.description }}</p>
  
  <div class="activity-highlights">
    {% for item in activity.highlights %}
    <span class="activity-highlight">{{ item }}</span>
    {% endfor %}
  </div>
</div>
{% endfor %} -->

## Let's Connect!

- Email: {{ site.author.email }}
- Location: {{ site.author.location }}
