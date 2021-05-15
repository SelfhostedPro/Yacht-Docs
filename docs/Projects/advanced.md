---
title: Advanced Projects
description: Yacht Advanced Project Documentation
id: Advanced
---
More advanced projects often require that you clone an entire git repository and pass through a veriety of files. As an example of such project you can look at [docker-elk](https://github.com/deviantony/docker-elk). For a larger project like this, it is best to directly access Yacht's configuration folder and clone the repository inside.

For easy editing and persistance you will need to map Yacht's `/config` folder to your host machine. For this example, we assume you have mapped it to the `/opt/yacht/` folder of your host machine.

If it doesn't already exist, you will need to create a `compose` folder, such as `/opt/yacht/compose`. Inside this folder you can clone the repository of your project (ex. `git clone https://github.com/deviantony/docker-elk.git`). Yacht will automatically detect the new project and it will add it in your projects page. You might need to refresh the page to see it.

From here you can make changes to the files directly on your host or edit the docker-compose.yml as needed in the project editor and then deploy the project.
