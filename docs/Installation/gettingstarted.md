Raspberry Pi OS Lite 64 Bit
ssh pi@ets001.local
passwd && sudo passwd
sudo apt update && sudo apt upgrade -y
sudo sed -i "s/# en_US.UTF-8/en_US.UTF-8/g" /etc/locale.gen && sudo locale-gen && locale -a
sudo timedatectl set-timezone Europe/Copenhagen
curl -sSL https://get.docker.com | sh && sudo usermod -aG docker ${USER} && docker --version && sudo su - ${USER} && sudo reboot
sudo apt update && sudo apt upgrade -y && sudo apt-get install libffi-dev libssl-dev -y && sudo apt install python3-dev -y && sudo apt-get install -y python3 python3-pip -y && sudo pip3 install docker-compose && sudo systemctl enable docker &&  sudo usermod -aG docker ${USER} && docker compose --version


Username : cb0001
Password : *****
Confirm Password : *****
https://raw.githubusercontent.com/technorabilia/portainer-templates/main/lsio/templates/templates-2.0.json

homeassistant

http://ets001.local:8123





cd && cd dockerMaster/dockerCompose/homeassistant && docker-compose up -d
cd && cd dockerMaster/dockerCompose/homer && docker-compose up -d


https://github.com/bushvin/hass-integrations#manual



templates


http://ets001.local:8183/

http://192.168.2.1:9000/
wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb && dpkg -i homeassistant-supervised.deb -y
mkdir -p /home/pi/dockermaster/homeassistant && cd /home/pi/dockermaster/homeassistant
192.168.0.123:9443
docker-compose up -d
docker-compose ps

mkdir -p /home/pi/dockermaster && cd /home/pi/dockermaster
rm -f ~/.ssh/known_hosts![image](https://user-images.githubusercontent.com/103714062/163650268-fc57a8de-ffc2-41b1-8329-b1de4ff4893b.png)
