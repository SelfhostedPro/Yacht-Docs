---
title: Install Yacht
description: Yacht Install Instructions
id: Install
---

## via Docker

Installing Yacht via docker is as simple as running two commands:

```bash
docker volume create yacht
docker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config --name yacht selfhostedpro/yacht
```

This will start Yacht on port 8000 (change this to 8001 if you're also using portainer).

The default login is `admin@yacht.local` and `pass` you should change this immediately by clicking on admin in the top right and then "User" then select "Change Password" in the top menu. You can also change your username using this field.

If you need to reset your password/username to the included defaults, please delete your yacht volume and create a new one (you will lose all of your configurations so be sure to backup when you make changes).

## via OpenMediaVault

Installing Yacht via OpenMediaVault can be done through [OMV-Extras](https://omv-extras.org/). Installation instructions for OMV-Extras can be found [here](https://forum.openmediavault.org/index.php?thread/5549-omv-extras-org-plugin/)

Once OMV-Extras is installed you'll need to do the following steps:

1. In OMV go to OMV-Extras -> Docker
2. Click on "Docker" and then "Install"
   1. (Optional) Click on advanced under "Yacht (Alpha)" and select the port you want to use.
3. Once docker is installed click on "Yacht" and then "Install"

Once it's installed you can use the button to open Yacht.

## via Docker Compose

The following is an example docker-compose.yml file to deploy Yacht:

```yaml title="docker-compose.yml"
---
version: "3"
services:
  yacht:
    container_name: yacht
    restart: unless-stopped
    ports:
      - 8000:8000
    volumes:
      - yacht:/config
      - /var/run/docker.sock:/var/run/docker.sock
    image: selfhostedpro/yacht

volumes:
  yacht:
```

## via DockSTARTer

Yacht is available via DockSTARTer. More information on installing Yacht via DockSTARTer is available [here](https://dockstarter.com/).
