---
layout: post
title: "White matter anatomy segmentation"
date: 2017-09-18 12:00:00
image: 'https://raw.githubusercontent.com/brainlife/app-wmaSeg/master/wmaSeg.png'
description: 'An automated segmentation application for segmenting streamline tractography into known anatomical tracts.'
main-class: 'segmentation'
color: '#B31917'
tags:
- whiteMatter
categories: 'segmentation'
twitter_text: 'Automated white matter segmentation'
introduction: 'An automated segmentation application for segmenting streamline tractography into known anatomical tracts.'
---

An automated segmentation of major white matter tracts from an input whole brain tractography. Utilizes a [WMQL-like approach](https://tract-querier.readthedocs.io/en/latest/) to segment streamlines, as documented in [Bullock et al. 2019](https://doi.org/10.1007/s00429-019-01907-8). Makes extensive use of the [wmaTools library](https://github.com/DanNBullock/wma_tools).