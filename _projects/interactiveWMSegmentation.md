---
title: "Interactive White Matter Segmentation Using Jupyter Notebook"
excerpt: "An interactive and user-friendly Jupyter Notebook for performing anatomy-based, in-browser segmentations. 1<br/>
[![Neruomatch 4.0 Interactive Segmentation + WMAD presentation](https://img.youtube.com/vi/FAV5HdVQ91c/0.jpg)](https://www.youtube.com/watch?v=FAV5HdVQ91c)"
collection: portfolio
---

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/DanNBullock/interactiveWMSegmentation/master?filepath=InteractiveWhiteMatterSegmentation.ipynb)

## Production Info

### Author
[Dan Bullock](https://github.com/DanNBullock/) (bullo092@umn.edu)

### PI
[Sarah Heilbronner](https://med.umn.edu/bio/department-of-neuroscience/sarah-heilbronner) (heilb028@umn.edu)

### Funding Information
[This section needs expansion. You can help by adding to it.]

### Repo Location

[![DanNBullock/interactiveWMSegmentation - GitHub](https://gh-card.dev/repos/DanNBullock/interactiveWMSegmentation.svg)](https://github.com/DanNBullock/interactiveWMSegmentation)

## Project Scope

### The target problem
The performance of expert-guided, anatomically-informed digital white matter segmentations is essential for both the investigation of particular tracts of interest and for the replicability of white matter segmentations more broadly.  However, in many cases the tools for implementing or performing these are not difficult to make use of or require specialized installation procedures.  This serves as a barrier to the accessibility of such techniques and the expansion of findings they could potentially facilitate.

### The proposed solution
The jupyter notebook presented here is intended to provide lightweight, portable, and potentially even _in-browser_ (with the use of [binder](https://mybinder.org)) anatomically guided, white matter segmentation.  Users are prompted to upload a subject's tractogram, brain atlas/parcellation, and a corresponding lookup table and, having done so, are then able to interactively select and visualize the anatomically demarcated connections found within the tractome.  In this way, when making use of binder or other such resources, users are able to easily and straightforwardly explore their tractographic brain data without any specialized local setup.

## Repository Contents
Currently, the only notable content of this repository are the jupyter notebooks: [InteractiveWhiteMatterSegmentation.ipynb](https://github.com/DanNBullock/interactiveWMSegmentation/blob/master/InteractiveWhiteMatterSegmentation.ipynb), [InteractiveWhiteMatterSegmentation_MultiROI.ipynb](https://github.com/DanNBullock/interactiveWMSegmentation/blob/master/InteractiveWhiteMatterSegmentation_MultiROI.ipynb), and [InteractiveWhiteMatterSegmentation_Sphere.ipynb](https://github.com/DanNBullock/interactiveWMSegmentation/blob/master/InteractiveWhiteMatterSegmentation_Sphere.ipynb).  Users can run these locally if they have the requirements listed in the requirements.txt file installed.  Otherwise, binder-based services are recommended, though this requires the uploading of the necessary brain data files (tractogram, atlas, lookup table) through the binder interface itself (via [jupyterhub](https://tljh.jupyter.org/en/latest/howto/content/add-data.html) or [jupyterlab](https://jupyterlab.readthedocs.io/en/stable/user/files.html).

## Presented at

- [neuromatch 4.0 conference](https://conference.neuromatch.io/), December 2, 2021 ([link to abstract](https://conference.neuromatch.io/abstract?edition=2021-4&submission_id=recLOhLHOC7iHTKPt))
