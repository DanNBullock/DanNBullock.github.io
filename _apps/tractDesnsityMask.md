---
layout: post
linkname: 'tractDensityMask'
title: "Tract Density Mask"
image: 'https://github.com/brainlife/app-tractDensityMasks/blob/master/yifof.gif?raw=true'
github_url: 'brainlife/app-tractDensityMasks'
bl_url: 'https://doi.org/10.25663/brainlife.app.498'
initial_push: 2021-04-2021 12:00:00
description: 'This app creates a streamline density mask (NIfTI format) for each structure labeled in a classification structure. This provides information about the volumetric density of streamline models of tracts.'
color: '#B31917'
tags:
- whiteMatter
- density
- matlab
- tractography
in_datatypes:
- <a href="https://brainlife.io/datatype/58c33bcee13a50849b25879a">anat-t1</a>
- <a href="https://brainlife.io/datatype/5907d922436ee50ffde9c549">tck</a>
- <a href="https://brainlife.io/datatype/5cc1d64c44947d8aea6b2d8b">wmc</a>
out_datatypes:
- <a href="https://brainlife.io/datatype/592dded1436ee50ffd88f5d0">tck</a>
categories: 'quantification'
---

This app creates a streamline density mask (NIfTI format) for each structure labled in a classification structure and saves it to disk.  You can then use this data to compare overlap between tracts, the general course taken, or even cortical intersections (e.g. endpoint mappings). 