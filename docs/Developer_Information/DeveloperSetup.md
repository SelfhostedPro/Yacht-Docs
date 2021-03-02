---
title: Development Guide
description: Yacht Development Documentation
id: Guide
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Setting up
This assumes you're using vscode and will want to use the debugging tools for the backend. If you're not using vscode then skip the launch.json section.

## Project Layout
Clone the repo:

```bash
git clone https://github.com/SelfhostedPro/Yacht.git
```

Create the config directory for the sqlite db:


```bash
cd Yacht
mkdir backend/config
```

## Requirements

### Install the backend requirements

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Install the frontend requirements

```bash
cd ../frontend
npm install
```


### Setup a launch.json (optional)
in the root directory create a .vscode folder and paste the following launch.json:

```json title=".vscode/launch.json"
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


```bash
npm run serve
```

### Script:
Here is an untested script that basically combines everything except for the launch.json stuff:

```bash
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
