---
title: "White Matter Anatomy Database (WMAD)"
excerpt: "Cataloging accounts of white matter tracts and their anatomy throughout the literature. 1<br/>
[![Neruomatch 4.0 Interactive Segmentation + WMAD presentation](https://img.youtube.com/vi/FAV5HdVQ91c/0.jpg)](https://www.youtube.com/watch?v=FAV5HdVQ91c)"
collection: portfolio
---


[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/DanNBullock/WMAD/main?filepath=Notebooks%2FInteract_With_WMAD.ipynb)

## Production Info

### Author
[Dan Bullock](https://github.com/DanNBullock/) (bullo092@umn.edu)

### Contributors/Curators

Elena Hayday

Sylvia Bindas

### PI
[Sarah Heilbronner](https://med.umn.edu/bio/department-of-neuroscience/sarah-heilbronner) (heilb028@umn.edu)

### Funding Information
[This section needs expansion. You can help by adding to it.]

### Copyright info
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)

## Project Scope

### The target problem
In the field of white matter anatomy there are a range of conflicting accounts of anatomical characteristics and associated terminology for white matter tracts (bundles of axons that connect parts of the brain).  This problem has been highlighted in several recent publications including [Bullock et al. 2021](https://psyarxiv.com/fvk5r/) and [Schilling et al 2021](https://doi.org/10.1016/j.neuroimage.2021.118502).  Currently, individual researchers must expend great effort to locate and examine even a fraction of the accounts which are pertinent to their structure(s) of interest.  Furthermore, due to the aforementioned terminological and descriptive challenges even the most dedicated investigators will only encounter a portion of the work that could speak to their research.

### The proposed solution
In order to provide researchers with the ability to explore and consider pertinent accounts of specific white matter structures of interest we present the White Matter Anatomy Database (WMAD) resource.  Instead of having to manually search each candidate research article that may be relevant to a researchers interest, here we have curated a database which localizes the _precise_ text sections (via [regex](https://en.wikipedia.org/wiki/Regular_expression) bounds) describing any given white matter structure, along with links to images depicting those white matter structures.  Using our [jupyter notebook interface](https://github.com/DanNBullock/WMAD/blob/main/Notebooks/Interact_With_WMAD.ipynb) on [platform] users can view the text excerpts and images associated with structures specified by the user from multiple publications all alongside one another in order to facilitate efficient comparison and consideration.

## How it works

### Curation
As an initial step to the formation of the White Matter Anatomy Database, curators process candidate articles in a [standardized fashion](https://github.com/DanNBullock/WMAD/blob/main/documentation/guideToArticleExtraction.md) in order to extract article metadata.  This metadata essentially falls into 2 upper level categories: _article metadata_ and _structure metadata_.  The latter of these can  be further broken down into _terminology metadata_, _description metadata_,and  _figure metadata_.  This information is entered into standardly formatted spreadsheets, [examples](https://github.com/DanNBullock/WMAD/tree/main/CompleteExample) and [templates](https://github.com/DanNBullock/WMAD/tree/main/ExcelFiles) of which are provided.  These resultant excel files are stored in separate directories in the [**completedArticles** directory](https://github.com/DanNBullock/WMAD/tree/main/completedArticles), as described [here](https://github.com/DanNBullock/WMAD/blob/main/ExcelFiles/Excel_README.md).

#### Article Metadata
This data corresponds to information about the article itself and includes features like DOI, article name, methodology, and involved species.  The acquisition of the DOI is critical as it is used to query other metadata databases to populate other article information fields ([using Crossref](https://github.com/DanNBullock/WMAD/blob/a67e73bdf183314092ab43f6458a7080075f9c7c/pyWMAD/excel2JSON.py#L34-L38).

#### Structure-specific metadata
Although there is a single omnibus directory for each article, there is an added level of data hierarchy in that _each white matter structrue_ discussed/depicted in the article is documented with a standardized data record as well.  This information takes the form of _terms used_, _structure descriptions_, and structure depictions_.

##### Terminology metadata
In this field the various terms used _in the article_ (i.e. as specified by the authors _themselves_) to refer to the structure are recorded.  **NOTE** this is independent of references to any intertextual influences as provided by the curator (i.e. no correction, augmentation, or commentary).

##### Structure descriptions
Although this data structure field is designated for textual excerpts that focus on the pertinent white matter structure, it does not actually, itself contain these text excerpts (generally speaking).  Rather, each of these entries takes the form of a link generated by the google chrome [link-to-highlight](https://support.google.com/chrome/answer/10256233).  Although this functionality is largely undocumented, in essence, it appears to augment the standard webpage URL with a [query string](https://en.wikipedia.org/wiki/Query_string) corresponding to a [regex] query entry.  Though this is speculation, it seems that this functionality seeks the minimal boundary entries necessary to specify the text excerpt.  In cases where no such minimal bounds can be found, it appears to simply URL encode the text section and append that to the page link.  Ideally these links are without any user-specific [URL query strings](https://en.wikipedia.org/wiki/Query_string) (e.g. browser, user, or authorization tokens).

Curators are tasked with determining the appropriate balance between comprehensiveness and conciseness, and selecting the excerpt accordingly.

##### Structure depictions
In much the same fashion as the structure description entries, the structure depiction entries merely correspond to link records to images depicting the relevant white matter structure.  In this way they do not contain the image itself, but rather the location of that image.  Ideally these links are without any user-specific [URL query strings](https://en.wikipedia.org/wiki/Query_string) (e.g. browser, user, or authorization tokens).

### Post-curation conversion and consolidation
As an intermediate step between curation and user interaction, the spreadsheet-based records for each article are converted to structured .json files and then combined (all using [this code](https://github.com/DanNBullock/WMAD/blob/main/pyWMAD/excel2JSON.py)) into a [single json object](https://github.com/DanNBullock/WMAD/blob/main/dbStore/WMAnatDB.json) which _de facto_ serves as the database for this service. 

### User interactivity
User interactivity with this resource is facilitated by the [Interact_With_WMAD](https://github.com/DanNBullock/WMAD/blob/main/Notebooks/Interact_With_WMAD.ipynb) jupyter notebook.  This notebook can be used locally with the [appropriately installed packages](https://github.com/DanNBullock/WMAD/blob/main/requirements.txt) or using services like [binder](https://mybinder.org).  User interactivity is facilitated by [qgrid](https://github.com/quantopian/qgrid) and [widgets](https://ipywidgets.readthedocs.io/en/stable/).  

#### Functionality via webquerys
Ultimately, the records displayed to users are generated by the iterative performance of [regex-augmented](https://github.com/DanNBullock/WMAD/blob/a67e73bdf183314092ab43f6458a7080075f9c7c/pyWMAD/scrape.py#L32-L54) [html queries](https://github.com/DanNBullock/WMAD/blob/a67e73bdf183314092ab43f6458a7080075f9c7c/pyWMAD/scrape.py#L26-L31) (for descriptions) or [simple extraction](https://github.com/DanNBullock/WMAD/blob/a67e73bdf183314092ab43f6458a7080075f9c7c/pyWMAD/scrape.py#L56-L68) of the relevant page elements (for depictions).

## Repository Contents
Below you will find a description of the various directories’ contents, beginning with the [primary jupyter notebook](https://github.com/DanNBullock/WMAD/blob/main/Notebooks/Interact_With_WMAD.ipynb) itself.

### Notebooks 
A directory containing the notebook itself.  Required packages can be found in the [requirements.txt](https://github.com/DanNBullock/WMAD/blob/main/requirements.txt) file.

### CompleteExample
An example of a completed article distillation, with the relevant excel files and directory structure formatted in the standardized fashion.

### Excel files
Template versions of the excel formats (i.e. blank).

### JSON_examples
Examples of the JSON structure formats we will distill from the excel files.  Provided both in template and example form.

### pyWMAD
Python code used to convert the excel file entries (organized in the appropriate directory structures) into amalgamated JSON file outputs, on a per document/article basis.

### completedArticles
A directory containing directories corresponding to each article that has been distilled/processed.  Each of these subdirectories is structured in accordance with the example found in the **CompleteExample** directory.

### dbStore
This directory contains the JSON file that corresponds to the most recently amalgamated version of the excel articles stored in **completedArticles** and thereby functions as the primary database object for WMAD.

## Presented at

- [neuromatch 4.0 conference](https://conference.neuromatch.io/), December 2, 2021 ([link to abstract](https://conference.neuromatch.io/abstract?edition=2021-4&submission_id=recLOhLHOC7iHTKPt))
