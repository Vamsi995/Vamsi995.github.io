---
title: "IIT Palakkad Project Allocation Portal"
layout: single
excerpt: "We built a project allocation portal that reduces the drudgery of manual allocation of  projects by using a Gale Shapely type algorithm with two sided preference. This portal is currently being used at my university for project allocation of capstone projects."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/ProjectAllocation/Teaser.png
sidebar:
  - title: "Link"
    text: <a href="https://github.com/Vamsi995/Project-Allocation">https://github.com/Vamsi995/Project-Allocation</a>
  - title: "Role"
    text: "Team Lead"
  - title: "Responsibilities"
    text: "Built the end-to-end application, both backend and frontend"
  - title: "Technology Frameworks & Languages"
    text: "Node.js, MongoDB, Express.js, Angular, NGINX"
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
use_math: true
---

Web Apps have been with us since early 2000’s. However, with today’s technology and opens source libraries, they have become an irreplaceable part of our day-to-day lives. Our initial motivations of making this portal was to reduce the drudgery people have to go through due to manual project allocation in this modern era where everything is code driven. We have seen that most of the project allocations are done using Google Docs or Excel — a tiresome and time-consuming process. So, we came up with a web-based solution that uses an algorithm to allocate projects after collecting preferences from students and mentors.

# Overview
We have four positions namely Students, Faculty, Co-ordinator, Super Admin. Every individual falls into one of these four positions. Each program has a co-ordinator and is supported by a set of faculty members. For e.g., a program could be a UG program of CSE, or the PG program of EE.
- **Registration & Login**: On the first sign-in with institute email, we parse it and decide whether the user is a student or faculty, and redirect the user accordingly.
- **Super Admin**: They are typically faculty/staff from the academic section. They can view and delete projects, faculties and students. They are in-charge of adding information about programs into the portal. When creating programs they also have to map student roll numbers to programs using a regular expression. They can also assign the program co-ordinators.
- **Co-ordinator**: Each program will have a faculty as its project co-ordinator. They are responsible for setting the deadlines for various stages of the project allocation, and dissemination of information using the portal. They can also configure parameters such as number of projects per faculty, maximum intake per project, student cap per faculty, total number of students in the program. They can also view/delete students and faculties of the program they are coordinating.
- **Faculty**: A faculty can choose to support a program by adding it in their profile. Each faculty can add, edit, delete projects. They are also given the option to record their preference among students who have opted for their projects.
- **Students**: Student’s page has a very minimalistic UI i.e., it is very intuitive to use. All the students have to do is when the appropriate stage comes to pass, they have to record their preference among the projects offered by the faculties supporting their program.


# Allocation Algorithm

Let $$\mathcal{S}=\{1,2,\ldots,m\}$$ and $$\mathcal{P}= \{1,2,\ldots,n\}$$ represent the set of students and projects in a program. We note that it may be possible to accommodate multiple student in a project. Let $m_j \leq m$ denote that maximum number of students that can simultaneously work on project $$j$$. Each student $$i \in \mathcal{S}$$ has a preference for the projects in set $$\mathcal{P}$$. We denote this preference as a function $$\sigma^S_i: \mathcal{P} \to \mathcal{P}$$. Note that $$\sigma^S_i$$ is a permutation of set $$\mathcal{P}$$, and $$\arg \max_{j \in \mathcal{P}} \sigma^S_i(j)$$ and $$\arg \min_{j \in \mathcal{P}} \sigma^S_i(j)$$ denote the most and least preferred projects by student $$i$$. Similarly, each project (its mentor) also has a preference of over the set of students $$\mathcal{S}$$. Preference of project $$j \in \mathcal{P}$$ is denoted by the function $$\sigma^P_j: \mathcal{S} \to \mathcal{S}$$. Note that $$\sigma^P_i$$ is a permutation of set $$\mathcal{S}$$, and $$\arg \max_{i \in \mathcal{S}} \sigma^P_j(i)$$ and $$\arg \min_{i \in \mathcal{P}} \sigma^P_j(i)$$ denote the most and least preferred student by the mentor of project $$j$$. The permutations are obtained using the following approach:



- $$\sigma^S_i$$ ($$\textit{Students' preference}$$): In the second phase of project allocation, students are allowed to choose and order them in the decreasing order of preference. At the end of this phase, projects not chosen by a student are appended to his/her preference list. These newly added projects will be ordered in the increasing order of number students who have opted for these projects during phase two.
- $$\sigma^P_i$$ ($$\textit{Mentors' preference}$$): In the third phase of project allocation, project mentors are allowed to order (in decreasing order of preference) students who have opted for their projects. At the end of this phase, for each project, student who have not opted it are appended to the project's preference list. These newly added students will be ordered in the decreasing order of their GPA.



Now, given the sets $$\mathcal{S}$$ and $$\mathcal{P}$$, preferences $$\{\sigma^{S}_i, i \in \mathcal{S} \}$$ and $$\{\sigma^{S}_j, j \in \mathcal{P} \}$$. We are interested in obtaining an allocation $$f: \mathcal{S} \to \mathcal{P}$$. We note that a sufficient condition for the existence of an allocation is $$\sum^n_{j=1} m_j \geq n$$.
We refer to an allocation as \textit{unstable} if there exists two tuples $$(s_1, p_1)$$ and $$(s_2, p_2)$$, where $$s_1,s_2 \in \mathcal{S}$$ and $$p_1,p_2 \in \mathcal{P}$$, $$s_1$$ prefers $$p_2$$ over $$p_1$$, and $$p_2$$ prefers $$s_1$$ over $$s_2$$. We refer to allocations that are not unstable as \textit{stable allocations}. To understand this concept better, let us consider the following example.

Example: Consider $$\mathcal{S} = \{s_1,s_2,s_3\}$$ and $$\mathcal{P} = \{p_1,p_2,p_3\}$$.
Let $$\sigma^S_1 = \{p_2, p_1, p_3\}$$, $$\sigma^S_2 = \{p_1, p_2, p_3\}$$, $$\sigma^S_3 = \{p_3,p_2,p_1\}$$, $$\sigma^P_1 = \{s_1, s_2, s_3\}$$, $$\sigma^P_2 = \{s_3, s_2, s_1\}$$, and $$\sigma^P_3 = \{s_2, s_1, s_3\}$$. Let us consider the allocations $$f_1 = \{(s_1, p_2), (s_2, p_1), (s_3, p_3)\}$$ and $$f_2 = \{(s_1, p_3), (s_2, p_2), (s_3, p_1)\}$$. $$f_1$$ is a stable allocation because all students are allocated their first preference. In $$f_2$$, $$s_2$$ prefers $$p_1$$ over $$p_2$$ (project allocated to $$s_2$$) and $$p_1$$ prefers $$s_1$$ over its current allocation $$s_3$$. Thus, $$f_2$$ is an unstable allocation.

The well-known Gale–Shapley algorithm can be used to compute a stable allocation. In its most basic form, this algorithm takes as input equal numbers of two types of participants, and an ordering for each participant giving their preference for whom to be matched to among the participants of the other type. We use Algorithm 1, a Gale–Shapley type algorithm, to allocate students to projects. Let $$\mathcal{S}_j$$ denote the set of students allocated to project $$j$$. We note that $$\cup^n_{j=1} \mathcal{S}_j = \mathcal{S}$$. Here the set $$\mathcal{S}$$ is ordered by decreasing order of CGPA of each student. This ordering improves the performance of the algorithm which we shall see in the example that follows.


![](/assets/images/projects/ProjectAllocation/Algorithm.png)


$$\textit{An example to illustrate the working of Algo. 1}$$: Let $$\mathcal{S} = \{s_1, s_2, s_3, s_4\}$$ and $$\mathcal{P} = \{p_1, p_2, p_3\}$$. Let the GPA of students in $$\mathcal{S}$$ be $$\{9,8,7,6\}$$. Let the student intake for projects in $$\mathcal{P}$$ be $$\{1,2,1,2\}$$. Let the preferences be $$\sigma^S_1 = \{p_1, p_2, p_3, p_4\}$$, $$\sigma^S_2 = \{p_1, p_2, p_4, p_3\}$$, $$\sigma^S_3 = \{p_2, p_3, p_4, p_1\}$$, $$\sigma^S_4 = \{p_2, p_4, p_3, p_1\}$$ and $$\sigma^P_1 = \{s_3, s_4, s_2, s_1\}$$, $$\sigma^P_2 = \{s_4, s_3, s_1, s_2\}$$, $$\sigma^P_3 = \{s_4, s_1, s_2, s_3\}$$, $$\sigma^P_4 = \{s_2, s_1, s_4, s_3\}$$. We note that $$\sum^n_{j=1} m_j = 1+2+1+2 = 6 > 4 = n$$. Thus, a stable allocation exists. The steps executed in different iterations of the outermost loop of Algo. 1 are as follows




# Technologies Used to Build a Complete End-to-End Solution
- **MongoDB**: A cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).
- **Javascript**: A lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
- **Node.js**: An open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write server-side script. Conse- quently, Node.js represents a ”JavaScript everywhere” paradigm, unifying web-application development around a single programming language, rather than different languages for server and client-side scripts
- **Express JS**: A minimal and flexible Node.js framework that provides a robust set of features for web and mobile applications.
- **Angular**: A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.
- **NGINX**: Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.


# Summary and Conclusions
We have tested the allocation algorithm with several tests cases, and it seems to work as expected. We stongly believe that the full-stack solution that we have developed will make academic project allocation an effortless and streamlined process. We also plan to enhance our solution by addressing bugs/suggestions that we receive after deploying the solution within our institute.

# References
[1] D.Gale, L.S.Shapley, College Admissions and the Stability of Marriage,
Available at https://www.eecs.harvard.edu/cs286r/courses/fall09/papers/galeshapley.pdf.
[2] Applications of Gale-Shapley,
Available at https://medium.com/@UofCalifornia/how-a-matchmaking-algorithm-saved-lives-2a65ac448698.


# Demo

## Admin User

  <div class="responsive-video-container">
    <iframe src="/assets/images/projects/ProjectAllocation/Admin_Remade.mp4" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>
  </div>

## Faculty User
  <div class="responsive-video-container">
    <iframe src="/assets/images/projects/ProjectAllocation/Student.mp4" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>
  </div>


## Student User
  <div class="responsive-video-container">
    <iframe src="/assets/images/projects/ProjectAllocation/Faculty_new.mp4" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>
  </div>





# About the Process

There are three types of users namely Student, Faculty, Super Admin. And there are four roles namely Student, Faculty, Co-ordinator, Super Admin. We will have a quick glance on how the process works. We will go through these roles in detail first.

- **Students**: No special priviliges given. They have to give their preferences of projects.
- **Faculty**: No special priviliges given. Faculty have to select the programs which they wish to support i.e the programs in which they would like to float their projects. They are responsible for giving the student preference for the projects they floated.
- **Co-ordinator**: Co-ordinator has to import the student list containing Name,Rollno.,CGPA of each student in csv format in the Manage->Students tab to enable the students to register. Note that students not present in this list wont be able to register. Presets help to control the number of students assigned to each faculty. These are assigned by the Co-ordinator of each program and is unique to a program. Co-ordinator is responsible for setting the deadlines of the programs. Mails can be sent to the particular groups of users about the deadline. Please note that this is not automated for any of the stages i.e you have to click the Send Mails button.
  - **Presets**

    - **Project Cap**: This is the maximum number of projects each faculty can float. This is not set to anything in the start. If not set, no faculty will be able to add projects.

    - **Student Cap**: This is the maximum number of students each project can intake. This is set to 1 by default.

    - **Students Per Faculty**: This is the maximum number of students each faculty can intake considering all the projects they floated. This is not set to anything in the start.

  - **Priviliges**
    - Co-ordinator can access the details of students & faculty who opted for the program.
    - Co-ordinator can remove any student or faculty who opted for that program.
    - Co-ordinator has the access to deadlines and can change deadlines.
- **Super Admin**
    - Super Admin has the access to the database.
    - Super Admin is responsible for selecting the program Co-ordinators before the start of the Allocation.
    - They have the privilige to add programs.

# Flow of the Process

- Super Admin has to add the respective programs and streams.
- All the faculty members have to register to the portal choosing their respective stream. If your stream is not present in the registraion page please contact the Super Admin to add it.
- Super Admin has to then choose a Co-ordinator to each program. Do note that one faculty member can behave as a Co-ordinator only for one program.
- Each Co-ordinator has to then import the student list in a csv file containing Name,Rollno.,CGPA of each student. Do note that only the students in this list will be able to register to the portal. Students not in this list wont be able to register to the portal.
- The Co-ordinators of each program have to start the allocation by setting the first deadline and fillng in the presets. On setting the first deadine the stages start i.e it will go to stage 1.
- Start of Stage 1
  - Now the faculty have to add their projects to the programs they chose to support.
- End of Stage 1
- Co-ordinators have to proceed to the next stage by hitting the proceed button. Co-ordinators have to make sure that no faculty have violated the presets, otherwise you wont be able to move to the next stage. Note that there are some violations which have to be resolved in the Manage->Faculty tab otherwise you wont be able to proceed to the next stage.
- Start of Stage 2
  - Students have to fill in their preferences.
- End of Stage 2
- Co-ordinator has to proceed to the next stage and set the deadline for this stage.
- Start of Stage 3
  - Faculty have to fill in their preferences of students for each project they floated. In this stage faculty can choose which projects they finally want to float of the all the projects they floated.
- End of Stage 3
- Stage 4 is Allocation
- Co-ordinator can try out various allocations in the Project tab and then can publish to Faculty or Students. Do note that on publishing the allocation details to Faculty or Students mails will be sent to the respective groups automatically.

# Stages

The project allocation consists of four stages namely Creating Projects, Student Preference, Faculty Preference and Project Allocation. This is a quick overview as to understand the process.
- **Stage 1 : Creating Projects**

  1. The faculty can ADD/EDIT/DELETE projects. Note that these options will be disabled in the further stages.
  2. Sometimes you wont be able to add any projects because you may be violating certain presets set by the Co-ordinator of that program. In such case you need to communicate with the Co-ordinator and take necessary steps.
  3. The Save Preferences button in the Students Tab in each project will be disabled. Please refrain from clicking it.
  4. Students preferences will be locked i.e students wont be able to edit their preferences.
  5. Sometimes you will be logged out of the application. Dont worry this is because of session expiry or because of any server error. In the later case please contact us.

- **Stage 2 : Student Preferences**

  1. Faculty's ADD/EDIT/DELETE options are disabled from this stage and through out.
  2. Students can now give their preferences. Please do note that if you dont give any preference, you will be alloted a random project.

- **Stage 3 : Faculty Preferences**

  1. Faculty have to give their preference in the Student tab in each project section. You can Save Preferences how many ever times you want. Note that the latest save will be considered for the allocation.
  2. Faculty also have to select a final list of projects from all the projects they floated which they finally want to offer.
  3. Students wont be able to edit their preferences further.

- **Stage 4 : Project Allocation**

  1. Project Allocation allocates program wise, and after the allocation make sure to click on the Publish to Faculty and the Publish to Students button to send mails to all the members involved in that particular program indicating the end of the allocation and to publish the details of the allocation to the respective group.
  2. Now you can exclude projects from the allocation by deselecting them in the Project tab. Go through the video to understand this better.
  3. Students will be able to see their project alloted in their home page. It will appear as an expansion panel in place of the timeline.