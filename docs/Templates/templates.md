# Templates Explained
This page will go over building a template. The templates are all compatible with portainer v1 templates so you can always check that documentation too. All of the keys (type, name, title, etc.) are optional and will simply be blank if left empty.

Single app templates will be surrounded by `{}` as is standard for .json files. Multi app templates with consist of multiple `{}` sections (separated with a `,` after the `}` (ie. `},`) surrounded in `[]`.

More info on writing JSON is available [here](https://www.tutorialspoint.com/json/json_quick_guide.htm)

If you don't like writing in JSON another option is to use YAML. It's automatically converted into JSON in the backend so all of the options are the same.

=== "JSON"

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

=== "YAML"

    ``` yaml
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

## This is what each section does:
*\* = required*

### type*

=== "JSON"
    ```json
    {
      "type": 1,
    }
    ```
=== "YAML"
    ```yaml
    type: 1
    ```

This currently isn't in use. It's just here to keep compatibility with portainer but is ignored.

### title*

=== "JSON"
    ```json
    {
      "title": "App Title",
    }
    ```
=== "YAML"
    ```yaml
    title: App Title
    ```

This is what is displayed when in the apps list page. Punctuation is nice here and adds to the polish

### name

=== "JSON"
    ```json
    {
      "name": "app_name",
    }
    ```
=== "YAML"
    ```yaml
    name: app_name
    ```

This is what the actual container is named. Information on this is [here](https://docs.docker.com/engine/reference/run/#name---name).

### description

=== "JSON"
    ```json
    {
      "description": "This is a description.",
    }
    ```
=== "YAML"
    ```yaml
    description: This is a description.
    ```

This is the description that is shown in the app list. `\n` is interpreted as a newline character

### logo

=== "JSON"
    ```json
    {
      "logo": "https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png",
    }
    ```
=== "YAML"
    ```yaml
    logo: https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/transmission-icon.png
    ```
This is the logo that is show in the app list.

### image*

=== "JSON"
    ```json
    {
      "image": "haugene/transmission-openvpn:latest",
    }
    ```
=== "YAML"
    ```yaml
    image: haugene/transmission-openvpn:latest
    ```
This is the image that's pulled from dockerhub. The tag (`:latest`) is optional.

### note

=== "JSON"
    ```json
    {
      "note": "List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.",
    }
    ```
=== "YAML"
    ```yaml
    note: List of supported providers available <a href='https://haugene.github.io/docker-transmission-openvpn/supported-providers'/>here</a>.,
    ```

This is shown when someone clicks on "VIEW" in the app list. It will render HTML appropriately.

### categories

=== "JSON"
    ```json
    {
      "categories": [
        "Other",
        "VPN",
        "Tools"
      ],
    }
    ```
=== "YAML"
    ```yaml
    categories:
    - Other
    - VPN
    - Tools
    ```
=== "Single Line JSON"
    ```json
    {
      "categories": ["Other", "VPN", "Tools"],
    }
    ```

A list of categories associated with the application. This is optional but sorting/filtering by category will eventually be a feature.

### platform*

=== "JSON"
    ```json
    {
      "platform": "linux",
    }
    ```
=== "YAML"
    ```yaml
    platform: linux,
    ```

The platform the image will run on. Haven't tested anything but linux.

### restart_policy

=== "JSON"
    ```json
    {
      "restart_policy": "unless-stopped",
    }
    ```
=== "YAML"
    ```yaml
    restart_policy: unless-stopped
    ```

Define your restart policy. Info [here](https://docs.docker.com/engine/reference/run/#restart-policies---restart).

### ports

=== "JSON"
    ```json
    {
      "ports": [
          "9091:9091/tcp",
          "9090:9090/tcp",
          "9092/tcp"
        ],
    }
    ```
=== "YAML"
    ```yaml
    ports:
    - 9091:9091/tcp
    - 9090:9090/tcp
    - 9092/tcp
    ```
=== "Single Line JSON"
    ```json
    {
      "ports": ["9091:9091/tcp", "9090:9090/tcp", "9092/tcp"]
    }
    ```

Ports to be passed through. The host port is on the left of the `:` and the container port is on the right. Protocol is after the `/`. If no host port is specified a random one is used. I frequently leave out the host port on applications that use common ports.

#### Port Labels

=== "JSON"
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
=== "YAML"
    ```yaml
    ports:
    - WebUI: 8096:8096/tcp
    - HTTPS WebUI: 8920:8920/tcp
    - DNLA: 1900:1900/udp
    - Discovery: 7359:7359/udp
    ```
=== "Single Line JSON"
    ```json
    {
      "ports": [{ "WebUI": "8096:8096/tcp", "HTTPS WebUI": "8920:8920/tcp",  "DNLA": "1900:1900/udp", "Discovery": "7359:7359/udp"}]
    }
    ```

You can label ports for the services that are on them if you would like. This will auto-fill the label field in the deploy form and give users a better understanding of the applications they're running.

### volumes

=== "JSON"
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
        }
      ],
    }
    ```
=== "YAML"
    ```yaml
    volumes:
    - container: "/data"
      bind: "!downloads"
    - container: "/etc/localtime"
      bind: "/etc/localtime"
    ```
=== "Single Line JSON"
    ```json
    {
      "volumes": [{ "container": /data, "bind": "!downloads" }, { "container": "/etc/localtime", "bind": "/etc/localtime" }]
    }
    ```

List of bind mounts. Container will mount inside of the container and bind will mount on the host. The bind section can utilize Template Variables in the users settings so if they're set they'll be replaced by what's there.

### sysctls

=== "JSON"
    ```json
    {
      "sysctls": [
        {
        "net.ipv6.conf.all.disable_ipv6": "0"
        }
      ],
    }
    ```
=== "YAML"
    ```yaml
    sysctls:
    - net.ipv6.conf.all.disable_ipv6: '0'
    ```
=== "Single Line JSON"
    ```json
    {
      "sysctls": [ { "net.ipv6.conf.all.disable_ipv6": "0" } ]
    }
    ```

Key value pair for sysctl options. More info available [here](https://docs.docker.com/engine/reference/commandline/run/#configure-namespaced-kernel-parameters-sysctls-at-runtime)

### cap_add

=== "JSON"
    ```json
    {
      "cap_add": [
        "NET_ADMIN"
      ],
    }
    ```
=== "YAML"
    ```yaml
    cap_add:
    - NET_ADMIN
    ```
=== "Single Line JSON"
    ```json
    {
      "cap_add": ["NET_ADMIN"]
    }
    ```

Value of capabilities you want to add to a container. More info available [here](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

### env

=== "JSON"
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
=== "YAML"
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
=== "Single Line JSON"
    ```json
    {
      "env": [{"name": "PUID","label": "PUID","default": "1000"},{"name": "PGID","label": "PGID","default": "1000"},{"name": "EnvWithDescription","label": "EnvWithDescription","description": "This is a description","default": "default"}]
    }
    ```

Env is used to set environment variables within the docker container. The description and default are both optional. Label currently isn't used but will be what is shown as the name of the field in the deploy form.

### labels

=== "JSON"
    ```JSON
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
=== "YAML"
    ```yaml
    labels:
    - label: local.yacht.label
      value: this is a label
    - label: local.yacht.otherlabel
      value: this is another label
    ```
=== "Single Line JSON"
    ```JSON
    {
      "labels": [{"label": "local.yacht.label","value": "this is a label"},{"label": "local.ycht.otherlabel","value": "this is another label"}]
    }
    ```

Labels can be used for automating services like traefik automatically as well as store information about containers (this is where port descriptions are stored on containers). These will show up in the advanced section like sysctls and capabilities. 

### devices

=== "JSON"
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
=== "YAML"
    ```yaml
    devices:
    - host: /dev/null
      container: /dev/null
    ```

=== "Single Line JSON"
    ```json
    {
      "devices": [{"host": "/dev/null","container": "/dev/null"}]
    }
    ```

Devices allow devices to be passed through containers for things like transcoding.