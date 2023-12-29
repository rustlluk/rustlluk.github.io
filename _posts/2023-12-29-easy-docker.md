---
title: "Easy-Docker"
categories:
  - other
author_profile: false
---

# Introduction
I have been using Docker for quite some time. It is great tool, but it is not always easy to use.
I started using it basically as a virtual environment to run different python versions and different 
libraries. However, sometimes you want to also use graphical applications and even use the graphics
over SSH. I have been fighting with it for around 3 years, but I finally found a solution that suits me.

# Easy-Docker
I created a relatively simple Python script that allows me to build new images, run containers
and run new terminal in existing container with one command. And, most importantly, it handles
user permissions, graphical applications and GPU support by itself. It is not perfect in any sense,
but it really made my life and development easier. I created a "template" repository that one can
easily use to create images for various project without a lot of hustle. 

Nowadays, I do not even care about installing anything locally or using python venvs. I just
clone my repo and start installing everything in Docker. It makes my system clear, and everything is
easily portable and usable even by bachelor-level students that just starts to realize what
robotic engineering means.

The repository is available at [https://github.com/rustlluk/easy-docker](https://github.com/rustlluk/easy-docker).