# Beginners Guide
This guide will take you through setting up Yacht, adding your first template, and deploying your first app.

## Setting Up Yacht
Running Yacht is as simple as running the following two commands:
```
docker volume create yacht
docker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config selfhostedpro/yacht
```
After that you can access Yacht on port 8000 on your server in a web browser.

_If you're using Yacht alongside portainer you'll want to change the 8000 on the left of the `:` to 8001, then it will be available on that port on your host._

Once you're at the login page you can login with the username `admin@yacht.local` and the password `pass`.

## Template Variables
We'll setup template variables so that if you're using a template built for Yacht, you'll be able to have all of your files mounted in the correct places.

Click on the Settings cog in the left sidebar and then click on Template Variables along the top.

Replace the paths on the right with where you want each variable to be mounted. (This will typically be in your file shares if you're using a NAS).

Add any additional Variables you would like and when you're done, hit save at the bottom.

## Adding a Template
To add a template, click on the Folder icon in the left sidebar and then on "New Template". If you don't have a template added yet it'll recommend you add the one that I maintain for Yacht. Once you've entered a name and URL you'll click submit.

Now that you're on the "View Templates" page you can click on the template you added to see all the apps included with your template.

From the "View Templates" page you can also click on the 3 dots and from there you can update if there are any changes, view the template, or delete the template.

## Deploying from a Template
Now that you have a template added let's deploy an application. Click on your template to view it. Then pick an app to deploy. You can click on view to see any details about the application.

One you've got an app in mind click on deploy and you'll be taken to the deploy form. Everything should be filled out for you but double check that everything looks correct. Click on continue until you get to the last page and then click on Deploy.

Now you'll see your running app. You can click on it to view more detailed stats or click on the Arrow to the right of the name to perform an action with it.
