---
title: "Are your Go Routines Treated Unfairly?"
layout: single
excerpt: "This project investigates fairness in the Go runtime scheduler and proposes modifications to improve scheduling for long-running goroutines. Our modifications introduce alternative scheduling policies to address starvation issues in Go's concurrency model."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/GoRuntime/goruntime.png
sidebar:
  - title: "GitHub"
    text: <a href="https://github.com/Vamsi995/go-fair-scheduler">https://github.com/Vamsi995/go-fair-scheduler</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: "Implemented alternate scheduling policies to add fairness to long running go routines in the go runtime system."
  - title: "Technology Frameworks & Languages"
    text: "Python, Inter Process Communication, TCP/UDP Sockets"
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

This project investigates fairness in the Go runtime scheduler and proposes modifications to improve scheduling for long-running goroutines. Our modifications introduce alternative scheduling policies to address starvation issues in Go's concurrency model.


<img width="1288" alt="runtimeproc" src="https://github.com/user-attachments/assets/89a203e8-dab2-46ca-83ff-49a7299401d8" />


## 📌 Overview

The Go runtime scheduler is responsible for efficiently distributing goroutines across logical processors. However, we observed that long-running goroutines can suffer from starvation when preempted and placed back into the global run queue. This project presents scheduling enhancements to mitigate unfair scheduling and improve overall performance. We highlighted the two key problems in long running go routines:
- Long running go routines once preempted are kept back in the global runqueue, which
then have to wait for one of the local queue to be empty to be pulled back into the logical
processor’s local queue. This in a way is causing a starvation on long running go routines
that execute for multiple time slices.
- Additionally when most of the processors preempt the long running go routines at once,
they have to contend for the global run queue lock.

## 🚀 Modifications to the Go Runtime

We propose three key modifications to Go’s scheduling mechanism:

### 1️⃣ **Cyclic Swapping of Go Routines**
- Instead of placing preempted goroutines in the global run queue, they are passed to the next logical processor’s local queue.
- This reduces contention for the global queue and ensures preempted goroutines resume execution without waiting for an empty local queue.

![cycle](https://github.com/user-attachments/assets/462986ef-d9d5-4a07-9668-dd73c5f2f8c9)


### 2️⃣ **Phase Splitting of Processors**
- Logical processors are divided into two groups:
  - One group processes short-running goroutines.
  - The other processes long-running goroutines.
- Short-running goroutines transition into the long-running group upon preemption, ensuring a balanced workload distribution.

![phasesplit](https://github.com/user-attachments/assets/68982943-5a60-453f-acfa-6d46bb19036f)


### 3️⃣ **Phase Splitting with Differential Preemption**
- Introduces a variable time slice:
  - Short-running processors maintain a standard 10ms time slice.
  - Long-running processors have an extended time slice (20ms).
- This reduces excessive preemption for long-running tasks, improving overall execution efficiency.

  ![goruntime](https://github.com/user-attachments/assets/4bbf4d6f-ddb7-418c-8756-4e71c0e8654f)


## 🔍 Experimental Setup

- We categorized workloads into **short-running** and **long-running** goroutines based on execution duration.
- We analyzed scheduler traces using the Go `trace` tool to observe scheduling patterns.
- Three workloads were tested: 
  - Simple loops
  - Fibonacci computation
  - Matrix multiplication

| ![space-1.jpg](https://github.com/user-attachments/assets/ece98895-4ebf-402b-add6-97c159201a97) | 
|:--:| 
| *Loop Short Running Go Routines* |

| ![space-1.jpg](https://github.com/user-attachments/assets/f203966e-777e-4bf1-9e84-d2151584d52b) | 
|:--:| 
| *Loop Long Running Go Routines* |



## 📊 Findings

- The default Go scheduler can cause long-running goroutines to starve when short-running goroutines dominate the local queues.
- Our modified scheduler significantly reduces average wait times and improves fairness for long-running workloads.
- We identified additional Go runtime tuning parameters such as `schedtick`, `timeslice`, and `work stealing batch size` that can further refine performance.


| ![space-1.jpg](https://github.com/user-attachments/assets/fdd44214-dd0d-4039-a0f3-626124dd959c) | 
|:--:| 
| *Average Scheduler Wait Times per Go Routine in (s)* |


| ![space-1.jpg](https://github.com/user-attachments/assets/1bd10ce8-058b-48ad-a05b-98898c1966bb) | 
|:--:| 
| *Global & Local Runqueue Sizes in normal operation* |


| ![space-1.jpg](https://github.com/user-attachments/assets/37487243-6480-4f80-b424-604613074c26) | 
|:--:| 
| *Global & Local Runqueue Sizes in phase splitting runtime scheduler* |



## 🔧 How to Build & Run

1. Clone the Go source code:

   ```sh
   git clone https://github.com/golang/go.git

2. Install the Go compiler from go.dev.

3. Replace the following files with our modified versions:

- ```src/runtime/runtime2.go```

- ```src/runtime/proc.go```

```sh
cp path/to/modified/runtime2.go go/src/runtime/
cp path/to/modified/proc.go go/src/runtime/
```

4. Set up the custom Go runtime:

```sh
export GOROOT=/path/to/custom/go
export PATH=$GOROOT/bin:$PATH
```
5. Run your Go programs using:

```sh
go run your_program.go
```

Yup this works like magic, no need to manually build the whole sourcefile using ```./make.bash``` from the src directory.

## 📎 Additional Resources

- 📄 [Project Report](https://drive.google.com/file/d/1GYJYoit7bZT92-jLDyahnoBf-AIQQ-PQ/view?usp=sharing)

- 🎥 [Demo Video](https://drive.google.com/file/d/1lpu5qHpndmcb8LV8V11Wor_UzPE_Gut8/view)

## Contributors

- [Sai Vamsi Alisetti](https://github.com/Vamsi995)
- [Abhishek Kumar](https://github.com/Abhi12122000)

