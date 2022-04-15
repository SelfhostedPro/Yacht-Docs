version: '3.5'
services:
  homeassistant:
    container_name: homeassistant
    image: "ghcr.io/home-assistant/home-assistant:stable"
    volumes:
      - ~/dockerMaster/dockerConfig/homeassistant:/config
      - /etc/localtime:/etc/localtime:ro
    restart: unless-stopped
    privileged: true
    environment:
      - TZ=Europe/Copenhagen
    network_mode: host![image](https://user-images.githubusercontent.com/103714062/163650170-60b1dd50-7bfa-4ed2-a583-2c09511361b4.png)
