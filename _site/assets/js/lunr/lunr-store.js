var store = [{
        "title": "Inter IIT Tech Meet 2018",
        "excerpt":"An autonomous, robust, and affordable robot for farmers who require efficient and safe pesticide spraying. The robot uses simple electronics to autonomously navigate fields while spraying pesticides by detecting plants. The chassis has a unique closed design enabling our robot to spray pesticide efficiently such that it reaches all the...","categories": [],
        "tags": [],
        "url": "/achievements/interiit/",
        "teaser": "/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "IPTIF",
        "excerpt":"Fellowship awarded for my research project of Multi-Agent Reinforcement learning for Independent and Co-operative behaviours on Highways and Ring Roads.   Fellowship Website: Link   ","categories": [],
        "tags": [],
        "url": "/achievements/iptif/",
        "teaser": "/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "Winter of Code",
        "excerpt":"Here is the link to my blog for WoC: Blog Link  ","categories": [],
        "tags": [],
        "url": "/achievements/woc/",
        "teaser": "/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "Something",
        "excerpt":"Testing  ","categories": ["Algorithm"],
        "tags": ["AI"],
        "url": "/algorithm/test-copy/",
        "teaser": "/assets/images/images.jpeg"
      },{
        "title": "Something",
        "excerpt":"Testing  ","categories": ["Algorithm"],
        "tags": ["AI"],
        "url": "/algorithm/test/",
        "teaser": "/assets/images/images.jpeg"
      },{
        "title": "Capstone Project: MARL for Cooperative and Independent Behaviors on Highways and Ring Roads",
        "excerpt":"You can find full details about the project in this report Capstone Project Report.  ","categories": [],
        "tags": [],
        "url": "/projects/%20Multi%20Agent%20Reinforcement%20Learning%20for%20Cooperative%20and%20Independent%20behaviors%20on%20Highways%20and%20Ring%20Roads/",
        "teaser": "/assets/images/projects/MultiAgent/Teaser2.png"
      },{
        "title": "Meet.me",
        "excerpt":"The recent pandemic has changed the ways of working collaboratively: it has moved to online services such as video conferencing. We aim to facilitate the collaboration experience with our application: meet.me. Meet.me has the features of chats, a whiteboard, screen-sharing, summary generation and telemetry. The whiteboard is a canvas with...","categories": [],
        "tags": [],
        "url": "/projects/Meetme/",
        "teaser": "/assets/images/projects/Meetme/Meetme-teaser.png"
      },{
        "title": "Paraphrase Generator with T5 transformer",
        "excerpt":"A Paraphrase-Generator built using transformers which takes an English sentence as an input and produces a set of paraphrased sentences. This is an NLP task of conditional text-generation. The model used here is the T5ForConditionalGeneration from the huggingface transformers library. This model is trained on the Google’s PAWS Dataset and...","categories": [],
        "tags": [],
        "url": "/projects/ParaphraseGen/",
        "teaser": "/assets/images/projects/Paraphrase/nlp.png"
      },{
        "title": "Autonomous Pesticide Spraying Robot",
        "excerpt":"You can find full details about the project in this drive link.  ","categories": [],
        "tags": [],
        "url": "/projects/Pesticide/",
        "teaser": "/assets/images/projects/Pesticide/Teaser.jpg"
      },{
        "title": "IIT Palakkad Project Allocation Portal",
        "excerpt":"Web Apps have been with us since early 2000’s. However, with today’s technology and opens source libraries, they have become an irreplaceable part of our day-to-day lives. Our initial motivations of making this portal was to reduce the drudgery people have to go through due to manual project allocation in...","categories": [],
        "tags": [],
        "url": "/projects/ProjectAll/",
        "teaser": "/assets/images/projects/ProjectAllocation/Teaser.png"
      },{
        "title": "Sparse Reward Propagation for Deep Reinforcement Learning",
        "excerpt":"This work is based on the paper Reward Propagation using Graph Convolutional Networks using the Proto Value Functions by Mahadevan and Maggioni as features to the GCN. The underlying MDP of the Gridworld is captured as a graph which is then used to calculate the Proto Value Functions. The implementation...","categories": [],
        "tags": [],
        "url": "/projects/SparseReward/",
        "teaser": "/assets/images/projects/Reward/Teaser.png"
      },{
        "title": "Tic Tac Toe on FPGA",
        "excerpt":"Tic-tac-toe originated from the ancient Roman Empire around the first century BCE, and it was called Terni Lapilli. The rules of the game differ as each player only had three pieces, moving around the empty spaces to keep playing. The first print reference of the game appears in Britain with...","categories": [],
        "tags": [],
        "url": "/projects/Tictactoe/",
        "teaser": "/assets/images/projects/Tictactoe/Teaser.jpg"
      },{
    "title": "Something",
    "excerpt":"Testing  ","url": "http://localhost:4000/_posts/2023-07-21-test-copy/"
  },{
    "title": "Something",
    "excerpt":"Testing  ","url": "http://localhost:4000/_posts/2023-09-21-test/"
  },{
    "title": "About Me",
    "excerpt":"I am a fresh graduate from IIT Palakkad majoring in Computer Science &amp; Engineering with a potent blend of industry and research experiences. I am interested in problem-solving be it in a social aspect or analytical aspect, and nothing brings me more joy than solving something that is on the...","url": "http://localhost:4000/about/"
  },{
    "title": "Achievements",
    "excerpt":"                                                 Winter of Code                          Top contributor at winter of code open source program.                                                IPTIF                          UG Fellowship awarded for my capstone project                                                Inter IIT Tech Meet 2018                          Won the first place in Tata Center of Technology and Developement Challenge in Inter IIT Tech Meet 2018 at IIT Bombay            ","url": "http://localhost:4000/achievements/"
  },{
    "title": null,
    "excerpt":" ","url": "http://localhost:4000/_pages/carousels/"
  },{
    "title": "Education",
    "excerpt":"Indian Institute of Technology (IIT) Palakkad                                       (2018-2022) Course Work (CSE) Introduction to Programming Logic for Computing Data Structures and Algorithms Discrete Mathematics for Computer Science Design and Analysis of Algorithms Theory...","url": "http://localhost:4000/education/"
  },{
    "title": null,
    "excerpt":"Hey Everyone!        This is my personal portfolio, well more like a life blog lol. I hope you have fun browsing through some stuff I've done!! Also I am someone who is interested in technology, science, and computers in general. And most of all AI!!       ","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Misc",
    "excerpt":"## Artwork I watch a lot of anime, and inherently I wanted to portray my love for anime. It is through art I feel I can share more than what I can with mere words. A picture is indeed worth more than a thousand words (Finally I get to quote...","url": "http://localhost:4000/misc/"
  },{
    "title": null,
    "excerpt":"## Notable Works:    {% assign collection = 'projects' %}   {% assign posts = site[collection] | reverse %}   {% for post in posts %}     {% include archive-single.html type=\"grid\" %}   {% endfor %}     ","url": "http://localhost:4000/projects/"
  },{
    "title": "Research",
    "excerpt":"My research interestes include reinforcement learning, natural language processing, customizable AI. ## Research Experience - **Summer Research Intern - CiSTUP Lab - IISc Bangalore** - Working on developing coordinated MARL (Mutli Agent Reinforcement Learning) algorithms for collision avoidance in open traffic systems and to mitigate phantom jams in closed traffic...","url": "http://localhost:4000/research/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]