---
title: "White Matter Anatomy Database (WMAD)"
excerpt: "An interactive database and framework for cataloging accounts of white matter tracts and their anatomy throughout the literature."
image: '/images/WMADgif2.gif'
collection: portfolio
---

Cataloging accounts of white matter tracts and their anatomy throughout the literature.

[![Neruomatch 4.0 WMAD + Interactive Segmentation presentation](https://img.youtube.com/vi/FAV5HdVQ91c/0.jpg){{:style="display:block; margin-left:auto; margin-right:auto"}}](https://www.youtube.com/watch?v=FAV5HdVQ91c)

[![DanNBullock/WMAD - GitHub](https://gh-card.dev/repos/DanNBullock/WMAD.svg){{:style="display:block; margin-left:auto; margin-right:auto"}}](https://github.com/DanNBullock/WMAD)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/DanNBullock/WMAD/main?filepath=Notebooks%2FInteract_With_WMAD.ipynb){:style="display:block; margin-left:auto; margin-right:auto"}

### The target problem
In the field of white matter anatomy there are a range of conflicting accounts of anatomical characteristics and associated terminology for white matter tracts (bundles of axons that connect parts of the brain).  This problem has been highlighted in several recent publications including [Bullock et al. 2021](https://psyarxiv.com/fvk5r/) and [Schilling et al 2021](https://doi.org/10.1016/j.neuroimage.2021.118502).  Currently, individual researchers must expend great effort to locate and examine even a fraction of the accounts which are pertinent to their structure(s) of interest.  Furthermore, due to the aforementioned terminological and descriptive challenges even the most dedicated investigators will only encounter a portion of the work that could speak to their research.

### The proposed solution
In order to provide researchers with the ability to explore and consider pertinent accounts of specific white matter structures of interest we present the White Matter Anatomy Database (WMAD) resource.  Instead of having to manually search each candidate research article that may be relevant to a researchers interest, here we have curated a database which localizes the _precise_ text sections (via [regex](https://en.wikipedia.org/wiki/Regular_expression) bounds) describing any given white matter structure, along with links to images depicting those white matter structures.  Using our [jupyter notebook interface](https://github.com/DanNBullock/WMAD/blob/main/Notebooks/Interact_With_WMAD.ipynb) on [platform] users can view the text excerpts and images associated with structures specified by the user from multiple publications all alongside one another in order to facilitate efficient comparison and consideration.