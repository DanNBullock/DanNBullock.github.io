---
title: "Track the Anterior Limb of the Internal Capsule"
excerpt: "A dockerized, brainlife.io application to track the anterior limb of the internal capsule using ensemble tractography.<br/><img src='/images/superior_aLIC_leftstreams.png'>"
collection: portfolio
---

This application produces a streamline-based model of the anterior limb of the internal capsule. It further divides its output into a superior (canonical) and inferior (non-canonical) components.

There are three primary steps in this methodlology:

1.  Identification of the anterior limb white matter volume. This is acheived by identifying anatomical landmarks withing the subject's brain (using the [freesurfer](https://surfer.nmr.mgh.harvard.edu/) [Desikan-Killiany](10.1016/j.neuroimage.2006.01.021) parcellation).  This is performed by the _app-track-between-multiple-regions/produce\_aLIC\_ROIs.py_ script.
2.  Performance of targeted, [ensemble tractography](https://doi.org/10.1371/journal.pcbi.1004692).  This algorithm iterates across parameter settings to create a broadly sampled tractogram.  The current implementation is essentialy a copy of [an existing app/resource (currently entitled "RACE-Track")](https://doi.org/10.25663/bl.app.101) developed and maintaned by [Brent McPherson](https://github.com/bcmcpher).  This is performed by the _app-track-between-multiple-regions/mrtrix3\_tracking.sh_ script.
3.  Segmentation of the resultant tractogram, to produce a curated model of the anterior limb of the internal capsule.  Although [MRtrix3](https://www.mrtrix.org/) and [RACE-Track](https://doi.org/10.25663/bl.app.101) produce quality tractography models, further curation is needed to ensure adherence to constraints of biological plausibility and contemporary understanding of the structure's morphology.  This is acheived via a [White Matter Query Language (WMQL)](https://doi.org/10.1007/s00429-015-1179-4)-like method that has been [used in previous publications](https://doi.org/10.1007/s00429-019-01907-8) and has been comprehensively described in the [White Matter Segentation Education (WIMSE) resource](https://github.com/DanNBullock/WiMSE) (website [here](https://dannbullock.github.io/WiMSE/landingPage.html)).  It is performed by the _segViaDocker/seg\_aLIC\_connections.py_ script.

[![DanNBullock/app-track_aLIC - GitHub](https://gh-card.dev/repos/DanNBullock/app-track_aLIC.svg)](https://github.com/DanNBullock/app-track_aLIC)
