---
layout: default
title: Prachi Barache | Data Science Portfolio
---

<!-- <div class="social-buttons">
  <a href="https://github.com/{{ site.social.github }}" class="social-button github">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://linkedin.com/in/{{ site.social.linkedin }}" class="social-button linkedin">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
</div> -->

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

<!-- ## My Journey -->
<!-- I stared to learn coding during my summer vaccations after finishing up my high school(i.e. 10th standard) just to pass the time. The first coding language I learned was C and like everyone I said "Hello" to the coding world withput knowing that I am gone do this for rest of my life. I loved what I was doing, I created tik-tak-to game and what not. But I got introduced with electronics in my junior college and I was amazed to see how "AND OR NOT" makes things work, and all this ended up in me prceiving "Electronics and Telecomunication engineering". Where I learned not only electrinics i.e.  -->
<!-- {% for job in site.data.experience %} -->
<!-- ### {{ job.position }} | {{ job.company }}
*{{ job.location }} | {{ job.period }}*

{{ job.description }}

{% for item in job.highlights %}
- {{ item }}
{% endfor %}

{% endfor %} -->

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

## More Projects

{% assign other_projects = site.data.projects | where: "featured", false %}
{% for project in other_projects %}
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

<!-- ## All Projects

{% for project in site.data.projects %}
### {{ project.title }}
{{ project.description }}

**Technologies:** {{ project.tech | join: ", " }}

{% if project.github_link != "" %}
[View Project on GitHub]({{ project.github_link }})
{% endif %}

{% endfor %} -->

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

<!-- ## Skills

{% for skill_category in site.data.skills %}
### {{ skill_category.category }}
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}-->

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
{% endfor %} 

## Let's Connect!

- Email: {{ site.author.email }}
- Location: {{ site.author.location }}
