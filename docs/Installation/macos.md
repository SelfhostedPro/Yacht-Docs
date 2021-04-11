---
title: MacOS
description: Mac Installation Guide
hide_table_of_contents: true
id: Mac
---

## Permissions Issues
MacOS will throw errors about being unable to access the docker socket (`/var/run/docker.sock`) in order to resolve this problem you'll need to run with `PUID=0` and `PGID=0` environment variables set. 

Here's an example docker-compose:

```yaml title="docker-compose.yml"
version: '3'
services:
  yacht:
    container_name: yacht
    restart: unless-stopped
    ports:
      - 8000:8000
    volumes:
      - yacht:/config
      - /var/run/docker.sock:/var/run/docker.sock
      - /Users/<username>/Development/Docker/compose:/compose
    environment:
      - PUID=0
      - PGID=0
      - COMPOSE_DIR=/compose
    image: selfhostedpro/yacht
volumes:
  yacht:
```

*Please note that the above docker-compose sets up a compose directory for managing compose projects. You'll need to change the paths to fit your system or remove these if you're not going to be using docker-compose*
