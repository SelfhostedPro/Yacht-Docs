---
title: Reverse Proxy Setup
description: Reverse proxy setup instructions
hide_table_of_contents: true
id: Proxy
---
To put Yacht behind a reverse proxy you'll need to enable websockets support as Logs, Stats, and the Dashboard use websockets. In Nginx Proxy Manager this is done by enabling "Websockets Support" for a standard nginx setup you'll need to add the following to your Yacht location block:

```conf
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "Upgrade";
```