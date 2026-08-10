---
title: "Interactive White Matter Segmentation"
excerpt: "A user-friendly, binder-enabled jupyter notebook for performing anatomy-based segmentations."
image: '/images/interactiveSegGif2.gif'
collection: portfolio
---

A user-friendly jupyter notebook for performing anatomy-based segmentations.

<p style="text-align:center">

<a href='https://mybinder.org/v2/gh/DanNBullock/interactiveWMSegmentation/master?filepath=InteractiveWhiteMatterSegmentation.ipynb'><img src='https://mybinder.org/badge_logo.svg' alt='Binder link for interactive white matter segmentation'></a>
<br/>
<a href='https://www.youtube.com/watch?v=FAV5HdVQ91c'><img src='https://img.youtube.com/vi/FAV5HdVQ91c/0.jpg' alt='Neruomatch 4.0 Interactive Segmentation + WMAD presentation'></a>
<br/>
<a href='https://github.com/DanNBullock/interactiveWMSegmentation'><img src='https://gh-card.dev/repos/DanNBullock/interactiveWMSegmentation.svg' alt='DanNBullock/interactiveWMSegmentation - GitHub'></a>

</p>

### The target problem
The performance of expert-guided, anatomically-informed digital white matter segmentations is essential for both the investigation of particular tracts of interest and for the replicability of white matter segmentations more broadly.  However, in many cases the tools for implementing or performing these are not difficult to make use of or require specialized installation procedures.  This serves as a barrier to the accessibility of such techniques and the expansion of findings they could potentially facilitate.

### The proposed solution
The jupyter notebook presented here is intended to provide lightweight, portable, and potentially even _in-browser_ (with the use of [binder](https://mybinder.org)) anatomically guided, white matter segmentation.  Users are prompted to upload a subject's tractogram, brain atlas/parcellation, and a corresponding lookup table and, having done so, are then able to interactively select and visualize the anatomically demarcated connections found within the tractome.  In this way, when making use of binder or other such resources, users are able to easily and straightforwardly explore their tractographic brain data without any specialized local setup.
