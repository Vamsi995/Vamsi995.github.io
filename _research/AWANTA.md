---
title: "AWANTA: Adaptive Software-Defined Wide Area Network framework for Telehealth Access"
layout: single
excerpt: "This project provides an emulator designed to simulate a small, fully connected mesh network with n nodes. The primary purpose of this emulator is to demonstrate and analyze network path changes under varying conditions. Our emulator performs a trace-driven simulation, leveraging real-world latency data obtained from RIPE Atlas nodes. By injecting these latency traces during iperf tests conducted between the start and destination nodes, we can replicate realistic network conditions and observe the effects on performance."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/Reward/Teaser.png
sidebar:
  - title: "Link"
    text: <a href="https://github.com/KathiraveluLab/AWANTA/tree/main/modules/emulator">https://github.com/KathiraveluLab/AWANTA/tree/main/modules/emulator</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: "Developed open source trace driven software defined networking emulator using Mininet & Ryu SDN, for
establishing a global standard testbed for overlay routing algorithms. Leveraged RIPE Atlas latency traces to optimize
traffic routing in northern Alaska, enhancing telehealth services and bridging healthcare gaps in underserved regions."
  - title: "Technology Frameworks & Languages"
    text: "Python, Mininet, Ryu SDN"
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

<div align="center">
  <img src="/assets/images/AWANTA.png" alt="Project Header">
</div>

<div align="center">
  <h1>AWANTA SDN Emulator</h1>
</div>

[//]: # (Need to add github actions - code coverage and build success badges)
<!-- <div align="center">

  <a href="https://www.python.org/downloads/release/python-370/">![Python 3.7+](https://img.shields.io/badge/python-3.7+-blue.svg)</a>
  <a href="https://github.com/KathiraveluLab/AWANTA/blob/dev/CODE_OF_CONDUCT.md">![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)</a>
  <a href="https://awanta-sdn-emulator.readthedocs.io/en/latest/?badge=latest">![Documentation Status](https://readthedocs.org/projects/awanta-sdn-emulator/badge/?version=latest)</a>
  <a href="https://github.com/KathiraveluLab/AWANTA/discussions">![Discussion](https://img.shields.io/badge/Discuss-Ask%20Questions-blue])</a>

</div> -->

This project provides an emulator designed to simulate a small, fully connected mesh network with n nodes. The primary purpose of this emulator is to demonstrate and analyze network path changes under varying conditions.
Our emulator performs a trace-driven simulation, leveraging real-world latency data obtained from RIPE Atlas nodes. By injecting these latency traces during iperf tests conducted between the start and destination nodes, we can replicate realistic network conditions and observe the effects on performance.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Mininet
- Ryu SDN Controller
- Python 3.7+

### Installation

- Mininet

> Download Mininet Framework
```
Follow this quickstart guide
http://mininet.org/download/
```

> Python Drivers
```
$ pip install mininet
```

- Ryu SDN
```
Follow the installation setup here
https://ryu-sdn.org/
```

- Python 3.7+
```
Download python 3.7+ binaries from here
https://www.python.org/downloads/
```


## Running the Mininet Emulator

To run with the given topology, please run this command.
```
$ sudo python run_topology.py -topo <custom_topology_class>
```

### Custom Topology

For example, create a custom mininet topology class under network_manager/custom_topologies and register it under a name of your choice under network_manager/custom_topologies/__init__.py in the topology_map variable.

For an illustration a full_mesh_topology class has been created and is used by default when no topology is given in the command line interface.
```
$ sudo python3 -topo full_mesh_topology
```
Please do note that mininet requires sudo access, so when running these commands, don't forget to use sudo.

## Running the Ryu Controller

To start the ryu controller, install the ryu package from pip or build it from source. And run the controller file.

```
$ ryu-manager --observe-links modules/emulator/controller.py
```

The controller has a configuration file ```controller.conf```, which contains the trace_manager to use and the routing strategy to use. These variables are passed through the .conf file because ryu controller does not allow command line arguments in the shell.




