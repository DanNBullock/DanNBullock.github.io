---
title: "White Matter Anatomy Python Tools (wma_pyTools)"
excerpt: "Pythonic refactoring of wma_Tools toolkit for the segmentation and analysis of streamline tractography.<br/><img src='/images/tractfigure.png'>"
collection: portfolio
---

This repository is a pythonic refactoring of capabilties afforded by the original, matlab-based [wmaTools](https://github.com/DanNBullock/wma_tools) toolset.  Like it's predacessor it features well-documented code for segmentation, ROI usage,  visualization, and other processes.

[![DanNBullock/wma_pyTools - GitHub](https://gh-card.dev/repos/DanNBullock/wma_pyTools.svg)](https://github.com/DanNBullock/wma_pyTools)

## Package/Module overview

The wma_PyTools code collection is predominantly housed within the wmaPyTools directory of this repository (**failedCode** contains code implementations that may or may not be functional, but which were somehow determined to be ineffectual relative to their intended uses/applications, while **testsOrDemos** contains code that benchmarks or sanity-checks code compositions from wmaPyTools).

Currently, there are five primary subdivisions into which functions have been organized:

- roiTools
- visTools
- segmentationTools
- streamlineTools
- analysisTools

### roiTools
These functions typically relate to the creation, modification, utilization of NiFTI based ROIs and masks. For example, these functions can be used to extract ROIs from a volumetric atlas/parcellation, inflate or modify such ROIs, or generate new planar ROIs based on the borders of other ROIs.

### visTools
These functions typically relate to the creation of plots or visualizations of streamline tractography objects (e.g. a plot of a "tract"), NiFTI-based entity (e.g. a gif visualization of volumetric streamline density), or quantative analyses (facilitated by analyisTools) thereof.

### analysisTools
These functions typically relate to the performance of quantative analyses of streamline or NiFTI based data objects. Such functions typically faciltate the performance of more complex operations (e.g. the computation of streamline distance traversal) or are used to generate data for visualizations/plots (e.g. those found in visTools)

### streamlineTools
These functions typically relate to operations performed on or with streamlines.

### segmentationTools
These functions typically invovle the assesment or imposition of quantative criteria relative to an input collection of streamlines.  Such criteria are typically posed or instantiated in relation to ROIs derived from roiTools operations.