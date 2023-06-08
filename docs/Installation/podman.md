---
title: Podman
description: Podman Installation
hide_table_of_contents: true
id: Podman
---

# Podman Installation

Yacht is compatible with podman. In order to run a Yacht container in podman you can use the following command:

```bash
podman machine set --rootful
podman volume create yacht
podman run -v /var/run/podman/podman.sock:/var/run/docker.sock -v yacht:/config -p 8000:8000 --name yacht -d ghcr.io/selfhostedpro/yacht:latest
```
