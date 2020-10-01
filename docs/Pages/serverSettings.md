# Server Settings

![Server Settings Page](Yacht-ServerSettings.png)

## Server Info
In the server info section you can import and export the configuration of your server. This is limited to templates and template variables.

## Template Variables
Read more about this section [here](../Templates/variables.md).

## Prune
Here you can clear out unused images, networks, volumes, and stopped containers.

## Update
Here you can update your server. This will launch watchtower with the `--run-once` command targeting the name of your Yacht instance and then remove itself once Yacht has been upgraded. This will restart Yacht so don't worry if it becomes unavailable for a short period.

*Please always backup your configuration in case you run into an issue*