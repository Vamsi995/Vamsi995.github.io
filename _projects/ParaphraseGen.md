---
title: "Paraphrase Generator with T5 transformer"
layout: single
excerpt: "A Paraphrase-Generator built using transformers which takes an English sentence as an input and always produces a set of unique paraphrased sentences based on sentence similarity scores."
toc: true
toc_sticky: true
header:
  teaser: /assets/images/projects/Paraphrase/nlp.png
sidebar:
  - title: "Link"
    text: <a href="https://github.com/Vamsi995/Paraphrase-Generator">https://github.com/Vamsi995/Paraphrase-Generator</a>
  - title: "Role"
    text: "Research Intern At UST Global"
  - title: "Responsibilities"
    text: "Worked on building production level Paraphrase Generator using SOTA NLP transformer architectures. Developed a web API using streamlit and flask for model inference. Built a data generation CLI tool using the paraphrase generator for creating datasets with similar semantics. Contributed a model to the open-source hugging face library. https://huggingface.co/Vamsi/T5_Paraphrase_Paws"
  - title: "Technology Frameworks & Languages"
    text: "Python, PyTorch, Co-lab Notebooks, Streamlit, Flask, Docker"
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

A Paraphrase-Generator built using transformers which takes an English sentence as an input and produces a set of paraphrased sentences.
This is an NLP task of conditional text-generation. The model used here is the [T5ForConditionalGeneration](https://huggingface.co/transformers/model_doc/t5.html#t5forconditionalgeneration) from the [huggingface transformers](https://huggingface.co/transformers)  library. 
This model is trained on the [Google's PAWS Dataset](https://github.com/google-research-datasets/paws) and the model is saved in the transformer model hub of hugging face library under the name [Vamsi/T5_Paraphrase_Paws](https://huggingface.co/Vamsi/T5_Paraphrase_Paws).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Streamlit library
- Huggingface transformers library
- Pytorch
- Tensorflow 

### Installing

- Streamlit

```
$ pip install streamlit
```

- Huggingface transformers library
```
$ pip install transformers
```

- Tensorflow
```
$ pip install --upgrade tensorflow
```

- Pytorch 
```
Head to the docs and install a compatible version
https://pytorch.org/
```

## Running the web app 

- Clone the repository
```
$ git clone [repolink] 
```
- Running streamlit app

```
$ cd Streamlit
$ streamlit run paraphrase.py
```

- Running the flask app

```
$ cd Server

$ python server.py
```

The initial server call will take some time as it downloads the model parameters. The later calls will be relatively faster as it will store the model params in the cahce.


![](/assets/images/projects/Paraphrase/Paraphrase.png)


![](/assets/images/projects/Paraphrase/TextualSimilarity.png)


## General Usage
PyTorch and TF models are available
​
```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("Vamsi/T5_Paraphrase_Paws")  
model = AutoModelForSeq2SeqLM.from_pretrained("Vamsi/T5_Paraphrase_Paws")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

sentence = "This is something which i cannot understand at all"

text =  "paraphrase: " + sentence + " </s>"

encoding = tokenizer.encode_plus(text,pad_to_max_length=True, return_tensors="pt")

input_ids, attention_masks = encoding["input_ids"].to(device), encoding["attention_mask"].to(device)

outputs = model.generate(
    input_ids=input_ids, attention_mask=attention_masks,
    max_length=256,
    do_sample=True,
    top_k=200,
    top_p=0.95,
    early_stopping=True,
    num_return_sequences=5
)

for output in outputs:
    line = tokenizer.decode(output, skip_special_tokens=True,clean_up_tokenization_spaces=True)
    print(line)

```


## Dockerfile

The repository also contains a minimal reproducible Dockerfile that can be used to spin up a server with the API endpoints to perform text paraphrasing.

_Note_: The Dockerfile uses the built-in Flask development server, hence it's not recommended for production usage. It should be replaced with a production-ready WSGI server.

After cloning the repository, starting the local server it's a two lines script:

```
docker build -t paraphrase .
docker run -p 5000:5000 paraphrase
```

and then the API is available on `localhost:5000`

```
curl -XPOST localhost:5000/run_forward \
-H 'content-type: application/json' \
-d '{"sentence": "What is the best paraphrase of a long sentence that does not say much?", "decoding_params": {"tokenizer": "", "max_len": 512, "strategy": "", "top_k": 168, "top_p": 0.95, "return_sen_num": 3}}'
```

## Built With

* [Streamlit](https://www.streamlit.io/) - Fastest way for building data apps
* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Backend framework
* [Transformers-Huggingface](https://huggingface.co/) - On a mission to solve NLP, one commit at a time. Transformers Library.


## Authors
- [Sai Vamsi Alisetti](https://github.com/Vamsi995)

## Citing

```bibtex
@misc{paraphrasegen,
    author = {Sai Vamsi Alisetti},
    title = {{Paraphrase-Generator}},
    year = {2020},
    publisher = {GitHub},
    journal = {GitHub repository},
    howpublished = {\url{https://github.com/Vamsi995/Paraphrase-Generator}},
}
```
List of publications using Paraphrase-Generator (please open a pull request to add missing entries):


[DeepA2: A Modular Framework for Deep Argument Analysis
with Pretrained Neural Text2Text Language Models](https://arxiv.org/pdf/2110.01509.pdf)

[Sports Narrative Enhancement with Natural Language
Generation](https://www.sloansportsconference.com/research-papers/sports-narrative-enhancement-with-natural-language-generation)

[EHRSQL: A Practical Text-to-SQL Benchmark for
Electronic Health Records](https://proceedings.neurips.cc/paper_files/paper/2022/file/643e347250cf9289e5a2a6c1ed5ee42e-Paper-Datasets_and_Benchmarks.pdf)

[Wissensgenerierung für deutschprachige
Chatbots](https://fbi.h-da.de/fileadmin/Personen/fbi1119/Michel-Masterarbeit.pdf)

