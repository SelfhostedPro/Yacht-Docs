# Install Yacht

## via Docker
Installing Yacht via docker is as simple as running two commands:

```
docker volume create yacht
docker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config selfhostedpro/yacht
```
This will start Yacht on port 8000 (change this to 8001 if you're also using portainer).

The default credentials are `admin@yacht.local` and `pass`.

## via OpenMediaVault
Installing Yacht via OpenMediaVault can be done through [OMV-Extras](https://omv-extras.org/). Installation instructions for OpenMediaVault can be found [here](https://forum.openmediavault.org/index.php?thread/5549-omv-extras-org-plugin/)

Once OMV-Extras is installed you'll need to do the following steps:

1. In OMV go to OMV-Extras -> Docker
2. Click on "Docker" and then "Install"
    1. (Optional) Click on advanced under "Yacht (Alpha)" and select the port you want to use.
3. Once docker is installed click on "Yacht" and then "Install"

Once it's installed you can use the button to open Yacht.