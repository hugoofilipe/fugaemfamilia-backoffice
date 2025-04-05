# fuga em familia - frontoffice

## Description
This is the frontoffice of the fuga em familia project. It is a web application that allows managers to manage their clients, bookings, ads, automated messages.
This project was bootstrapped with [Vue CLI], so it uses javascript and vuejs. To install and run the project, you need to have nodejs and npm installed on host machine.
To install the project, you need to import the dist folder from the frontend project to the host machine. The dist folder is located in the src/frontend folder.
After importing the dist folder, you need to create a subdomain on the host machine and point it to the dist folder. The subdomain should be named "backoffice" and the path should be "/". The subdomain should be created as a subdomain of huna.pt.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

# Installation and Setup Instructions for hosting (CPaenel)

## Frontend

To generate dist folder  run the following command in the frontend project:
```
npm run build
```


### Compiles and minifies for production
Every time you want to deploy the frontoffice you just need to push to the master branch. The github actions will take care of the rest. After that you just need to go to cpanel and pull the changes from the master branch to the server.
See the file ".github/workflows/README.md" for more information.
If you want to deploy it manually you can run the following command:
```
npm run build:prod
# after that you can copy the files in the dist folder to the server
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# FAQ
- What todo if i cannot get in on auth page with error "Access to XMLHttpRequest at 'http://localhost:5000/api/validate' from origin 'http://192.168.1.184:8080' has been blocked by CORS policy"
    - You need to add your local ip address to the allowed origins in the backend. 
    - Go to the backend folder and open the file "app.py"
    - Add your local ip address to the allowed origins in the CORS configuration
    - check if port 5000 already in use by running the command "netstat -tuln | grep ":5000"