# Templates Explained
This page will go over building a template. The templates are all compatible with portainer v1 templates so you can always check that documentation too. All of the keys (type, name, title, etc.) are optional and will simply be blank if left empty.

Single app templates will be surrounded by `{}` as is standard for .json files. Multi app templates with consist of multiple `{}` sections (separated with a `,` after the `}` (ie. `},`)).

More info on writing JSON is available [here](https://www.tutorialspoint.com/json/json_quick_guide.htm)
```JSON
{
    "type": 1,
    "title": "App Title",
    "name": "container-name",
    "description": "This is a description.",
    "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",
    "image": "dev/application:latest",
    "note": "This is a note",
    "categories": [
      "Other",
      "Tools"
    ],
    "platform": "linux",
    "restart_policy": "unless-stopped",
    "ports": [
      "9091:9091/tcp",
      "9090:9090/tcp"
    ],
    "volumes": [
      {
        "container": "/data",
        "bind": "!downloads"
      },
      {
        "container": "/etc/localtime",
        "bind": "!localtime"
      }
    ],
    "sysctls": [
      {
      "net.ipv6.conf.all.disable_ipv6": "0"
      }
    ],
    "cap_add": [
      "NET_ADMIN"
    ],
    "env": [
      {
        "name": "PUID",
        "label": "PUID",
        "default": "1000"
      },
      {
        "name": "PGID",
        "label": "PGID",
        "default": "1000"
      },
      {
        "name": "EnvWithDescription",
        "label": "EnvWithDescription",
        "description": "This is a description",
        "default": "default"
      }
    ]
  }
```

## This is what each section does:

### type
```json
    "type": 1,
```

This currently isn't in use. It's just here to keep compatibility with portainer but is ignored.

### title
```json
    "title": "Transmission-OpenVPN",
```

This is what is displayed when in the apps list page. Punctuation is nice here and adds to the polish

### name
```json
    "name": "transmission-openvpn",
```

This is what the actual container is named. Information on this is [here](https://docs.docker.com/engine/reference/run/#name---name).

### description
```json
    "description": "This container contains OpenVPN and Transmission with a configuration\nwhere Transmission is running only when OpenVPN has an active tunnel.\nIt bundles configuration files for many popular VPN providers to make the setup easier.",
```

This is the description that is shown in the app list. `\n` is interpreted as a newline character

### logo
```json
    "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",
```

This is the logo that is show in the app list.

### image
```json
    "image": "haugene/transmission-openvpn:latest",
```

This is the image that's pulled from dockerhub. The tag (`:latest`) is optional.

### note
```json
    "note": "List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.",
```

This is shown when someone clicks on "VIEW" in the app list. It will render HTML appropriately.

### categories
```json
    "categories": [
      "Other",
      "VPN",
      "Tools"
    ],
```

A list of categories associated with the application. This is optional but sorting/filtering by category will eventually be a feature.

### platform
```json
    "platform": "linux",
```

The platform the image will run on. Haven't tested anything but linux.

### restart_policy
```json
    "restart_policy": "unless-stopped",
```

Define your restart policy. Info [here](https://docs.docker.com/engine/reference/run/#restart-policies---restart).

### ports
```json
  "ports": [
      "9091:9091/tcp",
      "9090:9090/tcp",
      "9092/tcp"
    ],
```

Ports to be passed through. The host port is on the left of the `:` and the container port is on the right. Protocol is after the `/`. If no host port is specified a random one is used. I frequently leave out the host port on applications that use common ports.

#### Port Labels
```json
    "ports": [
      {
        "WebUI": "8096:8096/tcp",
        "HTTPS WebUI": "8920:8920/tcp",
        "DNLA": "1900:1900/udp",
        "Discovery": "7359:7359/udp"
      }
    ],
```
You can label ports for the services that are on them if you would like. This will auto-fill the label field in the deploy form and give users a better understanding of the applications they're running.

### volumes
```json
    "volumes": [
      {
        "container": "/data",
        "bind": "!downloads"
      },
      {
        "container": "/etc/localtime",
        "bind": "/etc/localtime"
      }
    ],
```
List of bind mounts. Container will mount inside of the container and bind will mount on the host. The bind section can utilize Template Variables in the users settings so if they're set they'll be replaced by what's there.

### sysctls
```json
    "sysctls": [
      {
      "net.ipv6.conf.all.disable_ipv6": "0"
      }
    ],
```
Key value pair for sysctl options. More info available [here](https://docs.docker.com/engine/reference/commandline/run/#configure-namespaced-kernel-parameters-sysctls-at-runtime)

### cap_add
```json
    "cap_add": [
      "NET_ADMIN"
    ],
```

Value of capabilities you want to add to a container. More info available [here](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

### env
```json
    "env": [
      {
        "name": "PUID",
        "label": "PUID",
        "default": "1000"
      },
      {
        "name": "PGID",
        "label": "PGID",
        "default": "1000"
      },
      {
        "name": "EnvWithDescription",
        "label": "EnvWithDescription",
        "description": "This is a description",
        "default": "default"
      },
    ]
```

Env is used to set environment variables within the docker container. The description and default are both optional. Label currently isn't used but will be what is shown as the name of the field in the deploy form.

### labels
```JSON
"labels": [
  {
    "label": "local.yacht.label",
    "value": "this is a label"
  },
  {
    "label": "local.yacht.otherlabel",
    "value": "this is another label"
  }
]
```
Labels can be used for automating services like traefik automatically as well as store information about containers (this is where port descriptions are stored on containers). These will show up in the advanced section like sysctls and capabilities. 

### devices
```json
"devices": [
  {
    "host": "/dev/null",
    "container": "/dev/null"
  }
]
```
Devices allow devices to be passed through containers for things like transcoding.

## YAML
Yaml templates are also supported and support all of the same options. Here is the example but converted to yaml:

```YAML
---
type: 1
title: App Title
name: container-name
description: This is a description.
logo: https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png
image: dev/application:latest
note: This is a note
categories:
- Other
- Tools
platform: linux
restart_policy: unless-stopped
ports:
- 9091:9091/tcp
- 9090:9090/tcp
volumes:
- container: "/data"
  bind: "!downloads"
- container: "/etc/localtime"
  bind: "!localtime"
sysctls:
- net.ipv6.conf.all.disable_ipv6: '0'
cap_add:
- NET_ADMIN
env:
- name: PUID
  label: PUID
  default: '1000'
- name: PGID
  label: PGID
  default: '1000'
- name: EnvWithDescription
  label: EnvWithDescription
  description: This is a description
  default: default

```