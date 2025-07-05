---
title: "Beyond Attention: Learning Spatio-Temporal Dynamics with Emergent Interpretable Topologies"
layout: single
excerpt: "Spatio-temporal forecasting is critical in applications such as traffic prediction, energy demand modeling, and weather monitoring. While Graph Attention Networks (GATs) are popular for modeling spatial dependencies, they rely on predefined adjacency structures and dynamic attention scores, introducing inductive biases and computational overhead that can obscure interpretability. We propose InterGAT, a simplified alternative to GAT that replaces masked attention with a fully learnable, symmetric node interaction matrix, capturing latent spatial relationships without relying on fixed graph topologies. Our framework, InterGAT-GRU, which incorporates a GRU-based temporal decoder, outperforms the baseline GAT-GRU in forecasting accuracy, achieving at least a 21% improvement on the SZ-Taxi dataset and a 6% improvement on the Los-Loop dataset across all forecasting horizons (15 to 60 minutes). Additionally, we observed reduction in training time by 60-70% compared to GAT-GRU baseline. Crucially, the learned interaction matrix reveals interpretable structure: it recovers sparse, topology-aware attention patterns that align with community structure. Spectral and clustering analyses show that the model captures both localized and global dynamics, offering insights into the functional topology driving predictions. This highlights how structure learning can simultaneously support prediction, computational efficiency, and topological interpretabil-ity in dynamic graph-based domains."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/BeyondAttn/Beyond Attention.png
sidebar:
  - title: "Link"
    text: <a href="https://github.com/Vamsi995/Beyond-Attention">https://github.com/Vamsi995/Beyond-Attention</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: "Proposed InterGAT-GRU, a novel spatio-temporal forecasting framework that achieved up to 21% higher accuracy and 60–70% faster training over GAT-GRU on real-world traffic datasets (SZ-Taxi, Los-Loop). Conducted spectral & community analysis on the learned interaction matrix, revealing high-rank eigenmodes,localized attention via IPR, and strong intra-cluster contrast aligned with latent spatial communities"
  - title: "Technology Frameworks & Languages"
    text: "Python, PyTorch, Pandas, Numpy, Colab"
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

Please find the link to the paper [here](https://arxiv.org/pdf/2506.00770).

Spatio-temporal forecasting is critical in applications such as traffic prediction, energy demand modeling, and weather monitoring. While Graph Attention Networks (GATs) are popular for modeling spatial dependencies, they rely on predefined adjacency structures and dynamic attention scores, introducing inductive biases and computational overhead that can obscure interpretability.

We propose InterGAT, a simplified alternative to GAT that replaces masked attention with a fully learnable, symmetric node interaction matrix, capturing latent spatial relationships without relying on fixed graph topologies. Our framework, InterGAT-GRU, which incorporates a GRU-based temporal decoder, outperforms the baseline GAT-GRU in forecasting accuracy, achieving at least a 21% improvement on the SZ-Taxi dataset and a 6% improvement on the Los-Loop dataset across all forecasting horizons (15 to 60 minutes). Additionally, we observed reduction in training time by 60-70% compared to GAT-GRU baseline.

Crucially, the learned interaction matrix reveals interpretable structure: it recovers sparse, topology-aware attention patterns that align with community structure. Spectral and clustering analyses show that the model captures both localized and global dynamics, offering insights into the functional topology driving predictions. This highlights how structure learning can simultaneously support prediction, computational efficiency, and topological interpretabil-ity in dynamic graph-based domains.
