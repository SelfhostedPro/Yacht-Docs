# Install Yacht

## via Docker
Installing Yacht via docker is as simple as running two commands:

```
docker volume create yacht
docker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config selfhostedpro/yacht
```
This will start Yacht on port 8000 (change this to 8001 if you're also using portainer).

The default credentials are `admin@yacht.local` and `pass`.