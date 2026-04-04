---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
layout_class: archive--scholar
hide_title: true
---

{% include base_path %}

<section class="scholar-hero">
  <p class="scholar-hero__eyebrow">Selected Research</p>
  <h1 class="scholar-hero__title">Publications</h1>
  <p class="scholar-hero__lead">Recent work on LLM evaluation, multi-agent judging, and presentation understanding.</p>
  {% if site.author.googlescholar %}
    <div class="scholar-hero__actions">
      <a class="btn btn--inverse" href="{{ site.author.googlescholar }}">Google Scholar</a>
    </div>
  {% endif %}
</section>

<div class="publications-list">
  {% for post in site.publications reversed %}
    {% include archive-single.html type="publication" %}
  {% endfor %}
</div>
