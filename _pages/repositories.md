---
layout: page
permalink: /repositories/
title: repositories
description: # Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 4
---

<div class="repositories-page">

{% if site.data.repositories.github_users %}
  <section class="repo-section">
    <h3 class="repo-section-title">GitHub Profiles</h3>
    <div class="repositories repositories-grid d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-stretch">
      {% for user in site.data.repositories.github_users %}
        {% include repository/repo_user.liquid username=user %}
      {% endfor %}
    </div>
  </section>

{% if site.repo_trophies.enabled %}
  <section class="repo-section">
    <h3 class="repo-section-title">GitHub Trophies</h3>
    {% for user in site.data.repositories.github_users %}
      {% if site.data.repositories.github_users.size > 1 %}
        <h4 class="repo-subtitle">{{ user }}</h4>
      {% endif %}
      <div class="repositories repositories-trophies d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-stretch">
        {% include repository/repo_trophies.liquid username=user %}
      </div>
    {% endfor %}
  </section>
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}
  <section class="repo-section">
    <h3 class="repo-section-title">Repositories</h3>
    <div class="repositories repositories-grid d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-stretch">
      {% for repo in site.data.repositories.github_repos %}
        {% include repository/repo.liquid repository=repo %}
      {% endfor %}
    </div>
  </section>
{% endif %}

</div>

<script defer src="{{ '/assets/js/repositories.js' | relative_url }}"></script>
