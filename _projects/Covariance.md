---
title: "Covariance-Driven Graph Embedding for Real-Time Traffic Prediction"
layout: single
excerpt: "A traffic prediction model leveraging temporal graph structures to model spatial and temporal dependencies within traffic networks. This framework utilizes covariance-driven feature analysis, eigenvalue decomposition, and attention mechanisms to capture dynamic patterns, enabling accurate and scalable traffic forecasting. Tested on real-world datasets like SZ-Taxi and Los-Loop, it outperforms traditional models in accuracy and robustness."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/Covariance.png
sidebar:
  - title: "GitHub"
    text: <a href="https://github.com/Vamsi995/Covariance-Temporal-GCN-for-Traffic-Forecasting/">https://github.com/Vamsi995/Covariance-Temporal-GCN-for-Traffic-Forecasting/</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: "Developed a novel dynamic traffic forecasting framework using PyTorch by leveraging covariance-based temporal graph
embeddings to capture complex spatio-temporal dynamics. Integrated principal eigenvectors for adaptive feature selection and
attention mechanisms for spatial correlations, achieving a 21.1% improvement in accuracy on the SZ-Taxi dataset."
  - title: "Technology Frameworks & Languages"
    text: "Python, PyTorch, Co-lab Notebooks, Numpy, Matplotlib"
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


A traffic prediction model leveraging temporal graph structures to model spatial and temporal dependencies within traffic networks. This framework utilizes covariance-driven feature analysis, eigenvalue decomposition, and attention mechanisms to capture dynamic patterns, enabling accurate and scalable traffic forecasting. Tested on real-world datasets like SZ-Taxi and Los-Loop, it outperforms traditional models in accuracy and robustness. 

**Project Report**: [Report](https://github.com/Vamsi995/Covariance-Temporal-GCN-for-Traffic-Forecasting/blob/main/Project%20Report.pdf)

**Project Slide Deck**: [Slides](https://docs.google.com/presentation/d/1Xiw7c_LlMP7tDnOEiedzYKLrP7Bj9h6jRilL-eaNb5k/edit?usp=sharing)


## Getting Started
Follow the steps below to run this project locally for development and testing.

### Prerequisites
Ensure the following libraries and frameworks are installed:

- PyTorch
- NumPy
- Matplotlib


### Installation
- Clone the repository:

```bash
git clone https://github.com/Vamsi995/Covariance-Temporal-GCN-for-Traffic-Forecasting.git
cd Covariance-Temporal-GCN-for-Traffic-Forecasting
```

- Install Dependencies:
```bash
pip install -r requirements.txt
```

### Usage

- Train and evaluate the model:

```bash
python train.py --config los_loop --hidden_dim 32 --epochs 100
```

- Run evaluations:

```bash
python evaluate.py --dataset sz_taxi --hidden_dim 32 --weights_path ../cvtgcn.pkl
```

### Datasets
The model is validated on:

- **SZ-Taxi**: 156 major roads in Shenzhen, traffic speeds sampled every 15 minutes.
- **Los-Loop**: 207 sensors in Los Angeles highways, data sampled every 5 minutes.

SZ-Taxi                    | Los-Loop 
:-------------------------:|:-------------------------:
![](images/time_series_sz_taxi.png) | ![](images/time_series_los_loop.png)



## Results

Accuracy                   | RMSE 
:-------------------------:|:-------------------------:
![](images/Accuracy.png)  |  ![](images/RMSE.png)


TGCN - SZ-Taxi             | cVTGCN - SZ-Taxi
:-------------------------:|:-------------------------:
![](images/lostgcn.png)  |  ![](images/loscVtgcn.png)

TGCN - Los-Loop            | cVTGCN - Los-Loop
:-------------------------:|:-------------------------:
![](images/tgcn.png)  |  ![](images/cvtgcn.png)



## Built With

* [PyTorch](https://pytorch.org/) - Deep Learning Framework
* [SpatioTemporal Neural Networks](https://github.com/andrea-cavallo-98/STVNN)
* [TGCN](https://github.com/lehaifeng/T-GCN/tree/master)


## Authors
- [Sai Vamsi Alisetti](https://github.com/Vamsi995)
- [Vikas Kalagi](https://github.com/vikaskalagi)
