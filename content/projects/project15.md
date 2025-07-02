---
title: "Personal Website"
date: 
tags: 
summary: "this site - an ongoing project!"
---

## Background 

My mission of making a personal website as been through multiple iterations. Around 2019, I made a basic HTML page from scratch, with some words and not much else. Eventually I added some stylistic elements, borrowed from a CSS template I found online. 

This current website is the product of a leap of motivation I experienced at the end of college (2025). There were so many things I had learned, so many projects I had worked on, so many conversations and stories - what would it mean to create a meaningful space to share some of this? 

This website emerges from my desire to connect my personal experience to a digital space, and in this way, connect myself to the world. I have intended for this website to be a container for sharing introspections and extrospections, meditations and expositions. 

How about the title, "me, you, and the universe"? I plan to write a longer piece about what this phrase means to me soon, but basically, this triad reflects that I see the universe through my interactions with you. In all my social relationships, it is not just me and the other person, but also the universe we exist within that acts as a medium for our relationship to exist and even flourish. Nothing exists in a vacuum -- neither do me and you! It is in the matrix, the network of our relationships that the universe derives its beauty, and it is through our mutual relationship to the universe that we even understand ourselves. 

The basic elements I wanted for my website are a space to share about myself, a place to share my projects, a place to share my longer-form writing, and a place to share my free-form thoughts. I hope for this website to be a place for all of this at once! Let's see how it goes.

---

## Website Development

I set up my website with Hugo, an open-source framework for generating static sites. The reason I used Hugo was multifold. First, I wanted to include a blog with markdown capabilities, and Hugo is great for this. I also wanted to implement some creative features of my own, such as some Javascript-based animations, which Hugo allowed me to do relatively seamlessly. There is also extensive documentation for Hugo, and from my experiencing, debugging is stress-reduced because of rapid build time. 


This website has a welcome page, an about page, a projects page, a blog page, and a thoughts page. The welcome page just contains my header, footer, and an introduction to this website's project. The about me page contains multiple collapsible sections on who I am, a brief timeline of my journey, a gallery of some pictures, and what I am doing now and into the future. The projects page contains a multitude of projects that I have worked on in card format, each with tags as well as a summary description. Clicking the cards opens up a longer description of the project - as you see here! My blogs page contains more longer-form articles, essays, and reflections. This is organized by tags, so you can filter by topic. The thoughts page contains more free-form words that I clear and re-write intermittently - check out what is written there right now!

I create an extensive custom theme, what I title "harmony", with custom layouts, partials, and shortcodes. There is a CSS file that contains details for all of this too. 

I host my website using Github pages -- I don't have to share the link because you are already on it if you are reading this! (Unless there is a mirror or this has been adapted to a different place - if that is the case, so be it.)

---

## Architecture Benefits

This structure provides several advantages for a personal website:

**Maintainability** - Clear separation between content, presentation, and configuration makes updates straightforward and reduces technical debt.

**Performance** - Static generation eliminates database queries and server-side processing, resulting in fast page loads and excellent SEO.

**Scalability** - Modular architecture supports easy addition of new content types, layouts, and features as the site grows.

**Portability** - Standard Hugo structure ensures compatibility with various hosting platforms and deployment strategies.

**Deployment** -  The site deploys as static files, making it compatible with CDN hosting and ensuring reliable uptime with minimal infrastructure requirements. itHub Actions for continuous deployment


---


## Technologies Used
- Hugo
- JavaScript
- HTML
- CSS
- Markdown
- Git



