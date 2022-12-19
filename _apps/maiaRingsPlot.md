---
layout: post
linkname: 'maiaRingsPlot'
title: "MAIA Rings Plot"
image: 'https://raw.githubusercontent.com/brainlife/app-maiaRings/master/exampleImgs/radarPlot.png'
github_url: 'https://github.com/brainlife/app-maiaRings'
bl_url: 'https://doi.org/10.25663/brainlife.app.493'
initial_push: 2021-03-24 12:00:00
description: 'This app computes and plots the degree-based ring averages for microperimetry measurements.  It makes use of <a href="https://github.com/DanNBullock/OCT_scripts/tree/master">OCT_scripts</a>'
color: '#B31917'
tags:
- whiteMatter
- density
- matlab
- tractography
in_datatypes:
- <a href="https://brainlife.io/datatypes/604976b3ebfe45c4633ae3d2">microperimetry</a>

out_datatypes:
- <a href="https://brainlife.io/datatype/59666a40b09297d8d8271dfc">png</a>
- csv
categories: 'quantification'
---

This app computes and plots the degree-based ring averages for microperimetry measurements.  It makes use of <a href="https://github.com/DanNBullock/OCT_scripts/tree/master">OCT_scripts</a>.  It outputs radar plots, along with a table indicating the returned value for each degree of visual eccentricity.