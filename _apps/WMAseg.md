---
layout: post
linkname: 'WMAseg'
title: "White matter anatomy segmentation"
image: 'https://raw.githubusercontent.com/brainlife/app-wmaSeg/master/wmaSeg.png'
github_url: 'https://github.com/brainlife/app-wmaSeg'
bl_url: 'https://doi.org/10.25663/brainlife.app.188'
initial_push: 2017-09-18 12:00:00
description: 'An automated segmentation application for segmenting streamline tractography into known anatomical tracts.'
color: '#B31917'
tags:
- whiteMatter
- segmentation
- matlab
- tractography
in_datatypes:
- <a href="https://brainlife.io/datatype/58cb22c8e13a50849b25882e">freesurfer</a>
- <a href="https://brainlife.io/datatype/5907d922436ee50ffde9c549">tck</a>
out_datatypes:
- <a href="https://brainlife.io/datatype/5cc1d64c44947d8aea6b2d8b">wmc</a>
categories: 'segmentation'
---

An automated segmentation of major white matter tracts from an input whole brain tractography. Utilizes a [WMQL-like approach](https://tract-querier.readthedocs.io/en/latest/) to segment streamlines, as documented in [Bullock et al. 2019](https://doi.org/10.1007/s00429-019-01907-8). Makes extensive use of the [wmaTools library](https://github.com/DanNBullock/wma_tools).