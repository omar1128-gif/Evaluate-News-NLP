# Project Instructions

The goal of this project is to give you practice with:

-   Setting up Webpack
-   Sass styles
-   Webpack Loaders and Plugins
-   Creating layouts and page design
-   Service workers
-   Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:

-   `npm install`

You can run the project in `development` or `production` mode by using the following commands:

-   Development mode: `npm run build-dev`
-   Production mode: `npm run build-prod`

Note: scripts can be found in `package.json`

## Setting up the API

Sentiment Analysis is MeaningCloud's solution for performing a detailed multilingual sentiment analysis of texts from different sources.

It identifies the positive, negative, neutral polarity in any text, including comments in surveys and social media. It also extracts sentiment at the document or aspect-based level. In order to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

### Step 1: Signup for an API key

First, you will need to go [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an API key.

### Step 2: Environment Variables

We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

-   [ ] Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
-   [ ] Create a new `.env` file in the root of your project
-   [ ] Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
-   [ ] Fill the .env file with your API keys like this:

```
API_KEY=**************************
```

## Deploying

This site is deployed On

```

```
