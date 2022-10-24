---
title: "White Matter Anatomy Segmentation (wmaSeg)"
excerpt: "Brainlife.io application for classifying streamlines into known anatomical tracts<br/><img src='https://raw.githubusercontent.com/brainlife/app-wmaSeg/master/wmaSeg.png'>"
collection: portfolio
---

This dockerized brainlife.io application performs automated tractogram segmentation on user-provided tractography to identify streamlines corresponding to established white matter structures in the brain.  It acheives this by using a identified locations in a volumetric brain parcellation to generate landmarks that are then used as tract-specific criteria.  In this way it provides anatomically guided segmentations that are _specific_ to the the individuals's unique brain anatomy.

[![brainlife/app-wmaSeg - GitHub](https://gh-card.dev/repos/brainlife/app-wmaSeg.svg)](https://github.com/brainlife/app-wmaSeg) 
