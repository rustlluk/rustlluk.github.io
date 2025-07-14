---
title: "Migration of robots from ROS1 to ROS2 "
categories:
  - projects
author_profile: false
header:
  teaser: /assets/images/ros.png
---
# Description
The Robot Operating System (ROS) is an important backbone in robotic research. Many robots in our lab are controlled 
using ROS1. Unfortunately, ROS1 end-of-life is on the 31.05.2025 and thus it will not obtain any new official updates 
or bug-fixes. Therefore, it is desired to migrate to the new version (ROS2) of this middleware. However, the two version
are different in many ways and such a migration requires to rewrite and readjust a lot of components, mainly for several
different robots.

![ros](/assets/images/ros.png)

# Requirements
1) Familiarize yourself with ROS1, ROS2 and the current setup of our robots.
2) Decide which robots are able to migrate based on the availability of their drivers in ROS2.
3) Migrate as many functionalities as possible and make it as similar to the current setup as possible. For those that are not able to migrate use, at least, ROS1_bridge [1].
4) Keep (or improve) the current Dockerized setup.
5) Create documentation for system.
6) [Optional] Make the whole system more modular and generalizable between robots.
7) [Optional] Enable the iCub robot for ROS


# Literature
[1] Ros2/ros1_bridge. https://github.com/ros2/ros1_bridge  
[2] Migrating from ROS 1 to ROS 2—ROS 2 Documentation: Jazzy documentation. https://docs.ros.org/en/jazzy/How-To-Guides/Migrating-from-ROS1.html   
[3] ROS: Home. https://www.ros.org/   
[4] ROS/Tutorials—ROS Wiki. https://wiki.ros.org/ROS/Tutorials  
[5] Tutorials—ROS 2 Documentation: Jazzy documentation. https://docs.ros.org/en/jazzy/Tutorials.html 