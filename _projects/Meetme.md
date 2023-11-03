---
title: "Meet.me"
layout: single
excerpt: "Meet.me is a smart online collaboration tool that supports seamless screen sharing and whiteboard features integrated with chat messaging system."
toc: true
toc_sticky: true
header:
  video:
    id: Sa7aRJC2wvc
    provider: youtube
  teaser: /assets/images/projects/Meetme/Meetme-teaser.png
sidebar:
  - title: "GitHub"
    text: <a href="https://github.com/Vamsi995/meet.me">https://github.com/Vamsi995/meet.me</a>
  - title: "Role"
    text: "Networking Module Team Member"
  - title: "Responsibilities"
    text: "Worked on Queue Management Module by implementing Concurrent Weighted Fair Queueing Algorithm increasing application performance by 70% for priority based tasks. Optimized networking performance by implementing event driven thread blocking."
  - title: "Technology Frameworks & Languages"
    text: "C++, .Net, NUnit, Azure Boards, GitHub"
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


<!-- {% include gallery caption="This is a sample gallery to go along with this case study." %} -->
The recent pandemic has changed the ways of working collaboratively: it has moved to online services such as video conferencing. We aim to facilitate the collaboration experience with our application: meet.me.
Meet.me has the features of chats, a whiteboard, screen-sharing, summary generation and telemetry. The whiteboard is a canvas with tools such as pen, brush, shapes, eraser, and features such as undo and redo. The summary generation uses the chats from the room to provide a succinct summary. The telemetry provides statistical plots & information.
<!-- An application as part of CS5617 Software Engineering project at IIT Palakkad -->
* [Video Demo](https://youtu.be/Sa7aRJC2wvc)
* [Wiki](https://github.com/Yogesh7920/meet.me/wiki)
* [Design Specification](/assets/images/projects/Meetme/DesignSpec.pdf)

![stats](/assets/images/projects/Meetme/stats.png)


# Queue Management 


## Overview
Communication between computers has become incessantly imperative in these modern times where everyone owns a device that can be connected to the internet. Most of the applications developed contain a networking module that enables the application to communicate with other devices. Exploring the underlying architecture of such a networking module can be quite travailing. This design spec provides a broad overview of how the networking module functions and specifically focuses on a submodule called Queue Management and its implementation.

## Background
Queue Management forms an essential part of a Networking Module. In computer networking, queuing delay forms the majority of the time lag between the exchange of information between two nodes. Queue Management in essence deals with maintaining a buffer in the form of a queue, in a particular node, to store and transmit the incoming packets from different nodes. Queue Management is used in software applications for the same reasons, except that here the nodes from which we receive information are different modules in the application that are trying to communicate with another device. Hence, to increase the performance of our communication system it is imperative to have a fast and robust queue implementation that can buffer all the incoming messages in parallel and service each of them to the listening sockets.

## Problem
Consider two systems A (sender machine) and B(receiver machine) running the same application. Assume that the application consists of several modules of which some require communication like file sharing, messaging, screen sharing etc. Now machine A decides to send a message to machine B via the application. A rudimentary approach is when the send function in the application is called, the message is instantly put into the open socket and the send function is blocked until the socket is free. This way whenever the socket is free, the send function is unblocked. This approach causes other modules which want to send a message, to wait that results in superfluous use of the computational resource. Once the message is received on machine B, the communication module should make sure that the appropriate module is receiving this message. Again, another rudimentary approach is to make all the modules listen on the open socket and process the message at the same time to determine which module it belongs to. This again has its conspicuous fallacies, as each module should be processing the message to discern whether it belongs to the module or not. The goal is to deal with this predicament of having multiple modules wanting to send messages and continue their execution on the sending side and to send the message to the appropriate module on the receiving side.

## Design Choices
Queue Management plays different roles depending on whether it is a sender/receiver. On the sender side, the task of queue management is to provide a stable data structure to collect the stream of messages from all the other modules that want to send messages. On the receiving side, it needs to collect the message and send it to the appropriate module.

### Concurrent Single FIFO Queue
A global queue handles the queue management where each module enqueues items into the global queue. On the other end, the socket keeps listening on this queue and when it finds an item in the queue it dequeues it and transmits it across the network.

### Concurrent Multilevel Queues

Multilevel queue maintains 4 sets of individual queues for each type of module. Each module takes in the message and enqueues it into the appropriate queue. Each queue is given a certain weight, i.e. for example whiteboard, screen share, files, chats are each given a weight of 4,3,2,1 respectively based on the priority. This means that while dequeuing only after 4 whiteboard dequeues we can dequeue the screen share. Only after 3 screenshare dequeues we can dequeue files. If in any case, the queue is empty, we skip it and go on to deque the next queue. In this way, we define our priority since 4 a regular implementation of priority queue based on heaps will always have the most prioritized one at the top of the heap which will starve the remaining modules. The concurrent nature of the queue system makes it possible for a single thread to enqueue a data item, and a single thread to dequeue a data item.

![](/assets/images/projects/Meetme/Multilevel Queue.png)

## Module Specification
### Queue Interface

![](/assets/images/projects/Meetme/Queue Interface.png)

### Packet Class

![](/assets/images/projects/Meetme/Packet Class.png)

## Sender Queue

![](/assets/images/projects/Meetme/Sender%20Queue.png)

Sending queue is a part of the socket listener which will be covered in detail in the Sockets section.

## Receiver Queue

![](/assets/images/projects/Meetme/Receiver%20Queue.png)

The receiver queue system contains a single receiving queue that is enqueued by the socket listener module. The receiver queue module listens on this queue. If this queue is not empty, then the queue starts to dequeue packets from the queue. These packets are then scanned to identify the module they belong to and the corresponding module handler is called.

## Activity Diagram

![](/assets/images/projects/Meetme/Activity Diagram.png)

## Dependency Diagram

![](/assets/images/projects/Meetme/Dependency Diagram.png)

# Installation
Follow the [installation](https://github.com/Yogesh7920/meet.me/wiki/2.-Installation) guide. 

## Host over the internet

- Download [ngrok](https://ngrok.com/) 
- Run the server and get port
- `ngrok.exe tcp -region=in \<port>`
- Get the ngrok IP, and it's port. E.g.: 0.tcp.in.ngrok.io:17000
- log in to client with the above credentials.

## Host in fixed port
- Set your environmental variables `MEETME_PORT` to desired fixed port.
- E.g: `MEETME_PORT=8080`

# The Team

| Project Mentor     | Teaching Assistant   |
|--------------------|----------------------|
| Ramaswamy Krishnan | Sreejith K P         |

| Project Manager    | Technical Architect   |
|--------------------|-----------------------|
|   Vishal Rao       |      Yogesh R         |


| Networking Module (3+1)         | Dashboard Module (4+1)     | Content Module (3+1)           | 
|---------------------------------|----------------------------|--------------------------------|
| Subhash S (Team Lead)           | Siddharth Shah (Team Lead) | Sahil J. Chaudhari (Team Lead) | 
| **Alisetti Sai Vamsi**              | Sairoop                    | Yuvraj Raghuvanshi             |           
| Tausif Iqbal                    | Parmanand Kumar            | Vishesh Munjal                 | 
| Abdullah Khan                   | Harsh Parihar              | Sameer Dhiman                  | 
|                                 | Rajeev Goyal               |                                |


| Screen Share & Whiteboard Module (5+1) | UX Module (7+1)              |
|----------------------------------------|------------------------------|
| Manas Sharma (Team Lead)               | Raswanth Murugan (Team Lead) |
| Ashish Kumar Gupta                     | Irene Casmir                 |
| Neeraj Patil                           | Mitul Kataria                |
| Parul Sangwan                          | Suchitra Yechuri             |
| Gurunadh                               | Pulavarti Vinay Kumar        |
| Chandan Srivastava                     | P S Harikrishnan             |
|                                        | Arpan Tripathi               |
|                                        | Aniket Singh Rajpoot         |
