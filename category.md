---
layout: default
title: Categories
---
<header class="header">
  <div class="header-title">
    <a href="{{ site.url }}{{ site.baseurl }}">{{ site.name }}</a>
  </div>
  <nav class="header-nav">
    {% for nav in site.nav %}
    {% if nav.url contains 'http://' or nav.url contains 'https://' %}
    <a href="{{ nav.url }}">{{ nav.name }}</a>
    {% else %}
    <a href="{{ nav.url | prepend: site.baseurl }}">{{ nav.name }}</a>
    {% endif %}
    {% endfor %}
  </nav>
</header>
<div class="post">
	<h1 class="pageTitle">Categories</h1>
	<ul>
		<li><a href="./tutorial">tutorial</a></li>
		<li><a href="./codingTest">코딩테스트</a></li>
	</ul>
</div>