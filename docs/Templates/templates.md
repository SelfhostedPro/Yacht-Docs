---
title: Templates Explained
description: Yacht Template Documentation
id: Templates
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page will go over building a template. The templates are all compatible with portainer v1 templates so you can always check that documentation too. All of the keys (type, name, title, etc.) are optional and will simply be blank if left empty.

Single app templates will be surrounded by `{}` as is standard for .json files. Multi app templates with consist of multiple `{}` sections (separated with a `,` after the `}` (ie. `},`) surrounded in `[]`.

More info on writing JSON is available [here](https://www.tutorialspoint.com/json/json_quick_guide.htm)

If you don't like writing in JSON another option is to use YAML. It's automatically converted into JSON in the backend so all of the options are the same.


<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
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
  "network_mode": "bridge",
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

</TabItem>
<TabItem value="yaml">

```yaml
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
network_mode: bridge
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
</TabItem>
</Tabs>

## This is what each section does:
*\* = required*

### type*

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "type": 1,
}
```

</TabItem>
<TabItem value="yaml">

```yaml
type: 1
```
</TabItem>
</Tabs>

This currently isn't in use. It's just here to keep compatibility with portainer but is ignored.

### title*

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "title": "App Title",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
title: App Title
```
</TabItem>
</Tabs>

This is what is displayed when in the apps list page. Punctuation is nice here and adds to the polish

### name

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "name": "app_name",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
name: app_name
```
</TabItem>
</Tabs>

This is what the actual container is named. Information on this is [here](https://docs.docker.com/engine/reference/run/#name---name).

### description

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "description": "This is a description.",
}
```
</TabItem>
<TabItem value="yaml">

```yaml
description: This is a description.
```
</TabItem>
</Tabs>

This is the description that is shown in the app list. `\n` is interpreted as a newline character

### logo

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",
}
```
</TabItem>
<TabItem value="yaml">

```yaml
logo: https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png
```

</TabItem>
</Tabs>

This is the logo that is show in the app list.

### image*

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "image": "haugene/transmission-openvpn:latest",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
image: haugene/transmission-openvpn:latest
```
</TabItem>
</Tabs>

This is the image that's pulled from dockerhub. The tag (`:latest`) is optional.

### note

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "note": "List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
note: List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.,
```
</TabItem>
</Tabs>

This is shown when someone clicks on "VIEW" in the app list. It will render HTML appropriately.

### categories

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "categories": [
    "Other", 
    "VPN", 
    "Tools"
  ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
categories:
- Other
- VPN
- Tools
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "categories": ["Other", "VPN", "Tools"],
}
```
</TabItem>
</Tabs>

A list of categories associated with the application. This is optional but sorting/filtering by category will eventually be a feature.

### platform*

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "platform": "linux",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
platform: linux,
```
</TabItem>
</Tabs>

The platform the image will run on. Haven't tested anything but linux.

### restart_policy

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "restart_policy": "unless-stopped",
}
```

</TabItem>
<TabItem value="yaml">

```yaml
restart_policy: unless-stopped
```
</TabItem>
</Tabs>

Define your restart policy. Info [here](https://docs.docker.com/engine/reference/run/#restart-policies---restart).

### ports

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "ports": [
      "9091:9091/tcp",
      "9090:9090/tcp",
      "9092/tcp"
    ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
ports:
- 9091:9091/tcp
- 9090:9090/tcp
- 9092/tcp
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "ports": ["9091:9091/tcp", "9090:9090/tcp", "9092/tcp"]
}
```
</TabItem>
</Tabs>

Ports to be passed through. The host port is on the left of the `:` and the container port is on the right. Protocol is after the `/`. If no host port is specified a random one is used. I frequently leave out the host port on applications that use common ports.

#### Port Labels

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "ports": [
    {
      "WebUI": "8096:8096/tcp",
      "HTTPS WebUI": "8920:8920/tcp",
      "DNLA": "1900:1900/udp",
      "Discovery": "7359:7359/udp"
    }
  ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
ports:
- WebUI: 8096:8096/tcp
- HTTPS WebUI: 8920:8920/tcp
- DNLA: 1900:1900/udp
- Discovery: 7359:7359/udp
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "ports": [{ "WebUI": "8096:8096/tcp", "HTTPS WebUI": "8920:8920/tcp",  "DNLA": "1900:1900/udp", "Discovery": "7359:7359/udp"}]
}
```
</TabItem>
</Tabs>

You can label ports for the services that are on them if you would like. This will auto-fill the label field in the deploy form and give users a better understanding of the applications they're running.

### network_mode

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
  ]}>
<TabItem value="json">

```json
{
  "network_mode": "host"
}
```

</TabItem>
<TabItem value="yaml">

```yaml
network_mode: host
```
</TabItem>
</Tabs>

You can set a certain network mode if you're using a legacy application that requires it. 

*any ports mapped will not be passed through if you choose host as your networking mode and you cannot change the ports*

### volumes

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "volumes": [
    {
      "container": "/data",
      "bind": "!downloads"
    },
    {
      "container": "/etc/localtime",
      "bind": "/etc/localtime"
    },
      "container": "/config",
      "bind": "app_config"
  ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
volumes:
- container: "/data"
  bind: "!downloads"
- container: "/etc/localtime"
  bind: "/etc/localtime"
- container: "/config"
  bind: "app_config"
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "volumes": [{ "container": /data, "bind": "!downloads" }, { "container": "/etc/localtime", "bind": "/etc/localtime" }, { "container": "/config", "bind": "app_config"}]
}
```
</TabItem>
</Tabs>

List of bind mounts. Container will mount inside of the container and bind will mount on the host. The bind section can utilize Template Variables in the users settings so if they're set they'll be replaced by what's there. You can use a named volume by using the name of the volume instead of a path (no `/` at the beginning).

### sysctls

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "sysctls": [
    {
    "net.ipv6.conf.all.disable_ipv6": "0"
    }
  ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
sysctls:
- net.ipv6.conf.all.disable_ipv6: '0'
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "sysctls": [ { "net.ipv6.conf.all.disable_ipv6": "0" } ]
}
```
</TabItem>
</Tabs>

Key value pair for sysctl options. More info available [here](https://docs.docker.com/engine/reference/commandline/run/#configure-namespaced-kernel-parameters-sysctls-at-runtime)

### cap_add

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "cap_add": [
    "NET_ADMIN"
  ],
}
```

</TabItem>
<TabItem value="yaml">

```yaml
cap_add:
- NET_ADMIN
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "cap_add": ["NET_ADMIN"]
}
```
</TabItem>
</Tabs>

Value of capabilities you want to add to a container. More info available [here](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

### env

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
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
}
```

</TabItem>
<TabItem value="yaml">

```yaml
env:
- name: PUID
  label: PUID
  default: 1000
- name: PGID
  label: PGID
  default: 100
- name: EnvWithDescription
  label: EnvWithDescription
  description: This is a description
  default: defaullt
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "env": [{"name": "PUID","label": "PUID","default": "1000"},{"name": "PGID","label": "PGID","default": "1000"},{"name": "EnvWithDescription","label": "EnvWithDescription","description": "This is a description","default": "default"}]
}
```
</TabItem>
</Tabs>

Env is used to set environment variables within the docker container. The description and default are both optional. Label currently isn't used but will be what is shown as the name of the field in the deploy form.

### labels

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
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
}
```

</TabItem>
<TabItem value="yaml">

```yaml
labels:
- label: local.yacht.label
  value: this is a label
- label: local.yacht.otherlabel
  value: this is another label
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "labels": [{"label": "local.yacht.label","value": "this is a label"},{"label": "local.ycht.otherlabel","value": "this is another label"}]
}
```
</TabItem>
</Tabs>

Labels can be used for automating services like traefik automatically as well as store information about containers (this is where port descriptions are stored on containers). These will show up in the advanced section like sysctls and capabilities. 

### devices

<Tabs
  defaultValue="json"
  values={[
    {label: 'JSON', value: 'json'},
    {label: 'YAML', value: 'yaml'},
    {label: 'Single Line JSON', value: 'sjson'}
  ]}>
<TabItem value="json">

```json
{
  "devices": [
    {
      "host": "/dev/null",
      "container": "/dev/null"
    }
  ]
}
```

</TabItem>
<TabItem value="yaml">

```yaml
devices:
- host: /dev/null
  container: /dev/null
```
</TabItem>
<TabItem value='sjson'>

```json
{
  "devices": [{"host": "/dev/null","container": "/dev/null"}]
}
```
</TabItem>
</Tabs>

Devices allow devices to be passed through containers for things like transcoding.