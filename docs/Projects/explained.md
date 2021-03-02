---
title: Projects
description: Yacht Project Documentation
id: Projects
---
Docker-compose projects are a container orchestration tool to help manage containers that need to talk to each other. Yacht provides an in browser docker-compose editor as well as a way to manage them easily via the projects tab in the yacht UI.

The easiest way to get started is to find a project that you want to launch, then click on the `+` button in the projects tab to create a new project. This will create a new folder with your project name and write whatever you've put into the editor into the docker-compose.yml inside of that folder.

By default, these are mapped in the container to `/config/compose`. You'll want to have a separate folder inside of `/config/compose` with the project name as the name of the folder (if you create your project via yacht this is taken care of for you).

Yacht uses docker-compose via the sh submodule for python so it supports the latest versions that are available and you wont need to worry about mismatches.


# Docker Compose Folder Structure:
The following is an example folder structure:

!!! code "Folder Structure"

    ``` bash
    compose
    ├── docker-pulls                ### Project Folder###
    │   ├── Docker_Hub_Stats.json
    │   ├── README.md
    │   ├── config.monitoring
    │   ├── docker-compose.yml      ### docker-compose.yml ###
    │   ├── prometheus
    │   │   ├── alert.rules
    │   │   └── prometheus.yml
    │   └── prometheus.yml
    ├── opendistro                  ### Project Folder
        └── docker-compose.yml      ### docker-compose.yml ###
    ```
The way this works is the Project will be named the same as the project folder. Inside of the project folder you can put the docker-compose.yml file as well as any other files you need to pass through.

These will be seen by Yacht and you'll be able to control the projects, as well as the services within them. When you view a project, the docker-compose file is parsed and you'll see all of the details of the project.