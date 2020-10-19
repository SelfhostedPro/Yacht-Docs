### Setting up
This assumes you're using vscode and will want to use the debugging tools for the backend. If you're not using vscode then skip the launch.json section.

## Project Layout
Clone the repo:

!!! code "Code"
    ```
    git clone https://github.com/SelfhostedPro/Yacht.git
    ```
Create the config directory for the sqlite db:

!!! code "Code"
    ```
    cd Yacht
    mkdir config
    ```
## Requirements

### Install the backend requirements

!!! code "Code"
    ```
    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
### Install the frontend requirements

!!! code "Code"
    ```
    cd ../frontend
    npm install
    ```
### Setup a launch.json (optional)
in the root directory create a .vscode folder and paste the following launch.json:

!!! code "Code"
    ```
    cd ..
    mkdir .vscode
    nano launch.json
    ```

!!! code "Installation Script"
    ```JSON
    {
        "configurations": [
            {
                "name": "Python: Module",
                "type": "python",
                "request": "launch",
                "module": "uvicorn",
                "args": [
                    "backend.api.main:app",
                    "--reload"
                ]
            }
        ]
    }
    ```
## Run everything
Start the backend using the run button in the debugging tab in vscode or manually run it. Then for the frontend run the following from inside the frontend folder:

!!! code "Code"
    ```
    npm run serve
    ```

### Script:
Here is an untested script that basically combines everything except for the launch.json stuff:

!!! code "Code"
    ```
    #!/bin/bash
    git clone https://github.com/SelfhostedPro/Yacht.git
    cd Yacht
    mkdir config
    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ../frontend
    npm install
    ```
Then just use the "Run Everything section above