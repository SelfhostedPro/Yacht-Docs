---
title: Advanced Projects
description: Yacht Advanced Project Documentation
id: Advanced
---
For larger projects you're likely going to want to clone an entire git repository into your project folder and pass through a variety of files. As an example you can look at [docker-elk](https://github.com/deviantony/docker-elk).

The way to go about deploying something like this would be to mount your yacht config to your host machine for easy editing/persistance. For this example I'm going to use `/opt/yacht/`. I would go into `/opt/yacht/compose` (if the `compose` directory doesn't exist you'll need to create it), clone the repository (`git clone https://github.com/deviantony/docker-elk.git`) and then when you go to your projects page you'll see the new project available (you may need to refresh the page to see it).

From here you can make changes to the files on your host or edit the docker-compose.yml as needed in the project editor and then deploy the project.
