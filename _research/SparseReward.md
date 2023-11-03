---
title: "Sparse Reward Propagation for Deep Reinforcement Learning"
layout: single
excerpt: "Meet.me is a smart online collaboration tool that supports seamless screen sharing and whiteboard features integrated with chat messaging system."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/Reward/Teaser.png
sidebar:
  - title: "Link"
    text: <a href="https://github.com/Vamsi995/Reward-Propagation">https://github.com/Vamsi995/Reward-Propagation</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: ""
  - title: "Technology Frameworks & Languages"
    text: "Python, PyTorch"
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
---

This work is based on the paper [Reward Propagation using Graph Convolutional Networks](https://arxiv.org/abs/2010.02474) using the Proto Value Functions by [Mahadevan and Maggioni](https://www.jmlr.org/papers/volume8/mahadevan07a/mahadevan07a.pdf) as features to the GCN. The underlying MDP of the Gridworld is captured as a graph which is then used to calculate the Proto Value Functions. The implementation is GCN is baseed on Thomas Kipf's [pytorch GCN implementation](https://github.com/tkipf/pygcn). The environment currently is only a GridWorld and all the results have been produced using this environment. The actor critic network implementation was not from any library but our own implementation using linear function approximators. 

The full report can be viewed here: [Sparse Reward Propagation Report](/assets/images/projects/Reward/OELP_final_report.pdf)


