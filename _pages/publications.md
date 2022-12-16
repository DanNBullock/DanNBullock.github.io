---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<html>
<body>
<div>Here you'll find a (hopefully) relatively up to date listing of publications and related products. Each entry should feature a brief description of the work, and a link to the publication itself, along with information relevant to the publicaiton context.</div>
</body>
</html>
<br/>
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
  <br/>
{% endfor %}
