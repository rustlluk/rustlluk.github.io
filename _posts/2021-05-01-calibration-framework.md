---
title: "Multisensorial robot calibration framework and toolbox"
categories:
  - research
author_profile: false
---  
J. Rozlivek, L. Rustler, K. Stepanova and M. Hoffmann, "Multisensorial robot calibration framework and toolbox," 
2020 IEEE-RAS 20th International Conference on Humanoid Robots (Humanoids), Munich, Germany, 2021, 
pp. 459-466, doi: [10.1109/HUMANOIDS47582.2021.9555803](10.1109/HUMANOIDS47582.2021.9555803).

# Abstract
The accuracy of robot models critically impacts their performance. With the advent of collaborative, social, or 
soft robots, the stiffness of the materials and the precision of the manufactured parts drops and CAD models provide a 
less accurate basis for the models. On the other hand, the machines often come with a rich set of powerful yet 
inexpensive sensors, which opens up the possibility for self-contained calibration approaches that can be performed 
autonomously and repeatedly by the robot. In this work, we extend the theory dealing with robot kinematic calibration 
by incorporating new sensory modalities (e.g., cameras on the robot, whole-body tactile sensors), calibration types,
and their combinations. We provide a unified formulation that makes it possible to combine traditional approaches
(external laser tracker, constraints from contact with the external environment) with self-contained calibration 
available to humanoid robots (self-observation, self-contact) in a single framework and single cost function. 
Second, we present an open source toolbox for Matlab that provides this functionality, along with additional
tools for preprocessing (e.g., dataset visualization) and evaluation (e.g., observability/identifiability). We 
illustrate some of the possibilities of this tool through calibration of two humanoid robots (iCub, Nao) and one 
industrial manipulator (dual-arm setup with Yaskawa-Motoman MA1400).

# Links
- [Paper](https://ieeexplore.ieee.org/document/9555803)
- [arXiv](https://drive.google.com/file/d/1iiIgpIlK2S5aXLhQlaLMu0ujcuXZ73gc/view?usp=sharing)
- [Code](https://github.com/ctu-vras/multirobot-calibration)

# Accompanying Video
{% include video id="ZZHztHF6eNs" provider="youtube" %}