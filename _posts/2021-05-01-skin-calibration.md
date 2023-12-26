---
title: "Spatial calibration of whole-body artificial skin on a humanoid robot: comparing self-contact, 3D reconstruction, and CAD-based calibration"
categories:
  - research
author_profile: false
---  
L. Rustler, B. Potocna, M. Polic, K. Stepanova and M. Hoffmann, "Spatial calibration of whole-body artificial skin on a
humanoid robot: comparing self-contact, 3D reconstruction, and CAD-based calibration," 2020 IEEE-RAS 20th International 
Conference on Humanoid Robots (Humanoids), Munich, Germany, 2021, pp. 445-452, 
doi: [10.1109/HUMANOIDS47582.2021.9555806](10.1109/HUMANOIDS47582.2021.9555806).

# Abstract
Robots were largely missing the sense of touch for decades. As artificial sensitive skins covering large areas of robot 
bodies are starting to appear, to be useful to the machines, sensor positions on the robot body are needed. In this 
work, a Nao humanoid robot was retrofitted with pressure-sensitive skin on the head, torso, and arms. We experimentally
compare the accuracy and effort associated with the following skin spatial calibration approaches and their 
combinations: (i) combining CAD models and skin layout in 2D, (ii) 3D reconstruction from images, (iii) using robot
kinematics to calibrate skin by self-contact. To acquire 3D positions of taxels on individual skin parts, methods (i) 
and (ii) were similarly laborious but 3D reconstruction was more accurate. To align these 3D point clouds with the
robot kinematics, two variants of self-contact were employed: skin-on-skin and utilization of a custom end effector 
(finger). In combination with the 3D reconstruction data, mean calibration errors below the radius of individual 
sensors were achieved (2 mm). Significant perturbation of more than 100 torso taxel positions could be corrected using
self-contact calibration, reaching approx. 3 mm mean error. This work is not a proof of concept but deployment of the 
approaches at scale: the outcome is actual spatial calibration of all 970 taxels on the robot body. As the different 
calibration approaches are evaluated in isolation as well as in different combinations, this work provides a guideline 
applicable to spatial calibration of different sensor arrays.

# Links
- [Paper](https://ieeexplore.ieee.org/document/9555806)
- [arXiv](https://drive.google.com/file/d/12KiZfZMiFZhHr8xuMZ-lMv0gJiEAmngn/view?usp=sharing)

# Accompanying Video
{% include video id="CCa2OPDq-BY" provider="youtube" %}