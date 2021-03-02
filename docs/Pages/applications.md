---
title: Applications
description: Yacht Application Documentation
id: Applications
---
![Applications Page](Images/Yacht-Applications.png)

## View Applications
In the main view of the applications page you can see the following:

* **Running Apps:**
    * App Name
    * App Status
    * App Image
    * Ports/Port Labels
    * Created time
* **App Actions (down chevron to the left):**
    * Start
    * Stop
    * Restart
    * Update (one click utilizing watchtower on the backend)
    * Kill
    * Remove

Apps are sortable by the columns at the top or searchable via the searchbar at the top. Click on an app to view more details. Ports will be labeled if they were set when deployed. 

### Updates
To check for updates click on the chevron next to "Apps" at the top of the page and then "Check for updates". This will querry dockerhub and check the latest manifest for your tag against the currently running one. Once the check is complete there will be a green dot next to applications with updates available. You can go into App Actions to update the app.

## Application Info

### Info
In this view you can see configuration settings for your container.

### Processes
This page shows the processes currently running on your container.

### Logs
The logs page will stream logs from the container to your browser so you don't need to refresh the page.

### Stats
This page shows a live view of the CPU and Memory usage for your container with 5 minutes worth of historical data (starting when you load the page).

## New Application
This is the page where you can deploy containers. In the top right there's a button to load an app from a template. The page walks you through all of the different information required to deploy a container.