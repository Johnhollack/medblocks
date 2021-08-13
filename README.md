Welcome to MEBLOCKS-HEALTHCARE

MEDBLOCK-HEALTHCARE is a simple healthcare service web-app with the features such as patient registration, listing registered patients, and check json response data from fhir server in tree structure.

This application is a pet project for medblocks.org. The docker image is available for public view at;

    https://hub.docker.com/r/johnolami/medblocks-healthcare/

And the source code available at;

    https://github.com/Johnhollack/medblocks

To run and use this app, follow the processes as discussed below;

To run with Docker Compose or Docker Desktop, you need to first pull the container image using this command as shown below;

    docker pull johnolami/medblocks-healthcare:latest

Once you've successfully pull this to your Docker desktop, cd to the project directory and run start your docker containers using this command as shown below;

    docker compose up

Once your servers are up and running, to confirm this, you can use this command in your terminal;

    docker ps

This will show the list of all running containers and their available ports;

    frontend: port:3000/tcp
    fhir_server: port:8080/tcp
    database: port 5432/tcp

Open your browser and run your localhost to see the application running at;

    http://localhost:3000


You will see the home page as shown below;

    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-home.PNG?raw=true)


The 3 CTA buttons are navigators to the differents pages/routes on this application. 

- Use the register CTA button to register a new patient to the fhir database, this will redirect you to this route: /register

    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-home.PNG?raw=true)

- Use the list CTA button to check the list of all registered patients in the database, this will redirect you to this route: /list
  
    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-list.PNG?raw=true)

- Use the tree CTA button to upload a json response file from fhir server to view the file in tree structure, this is for the purpose of visualization and comprehension of your json data.
   
    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-tree.PNG?raw=true)

    Note: on the /tree page, at first load if it returns an error, don't fuse or panic, just refresh the page and the error will be clear.
   
    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-tree-error.PNG?raw=true)

    To upload the json file, click the upload a json file button to pick your local file and then use the import button on the right side to import the json file, then you will see your data structure shown below which is collapsible to see the children or files in each folder.
   
    ![alt text](https://github.com/Johnhollack/medblocks/blob/main/public/medblocks-tree-upload.PNG?raw=true)

- Use the Github CTA button to go to the source code on my github profile;

    https://github.com/Johnhollack/medblocks








