# Star Wars Planet Dashboard API

## Description:
This repository contains the development of a React web application designed to display data about the planets in the Star Wars Universe. 
<br></br>
Please Note: This application has not yet been deployed and can only run via local machine at http://localhost:3000 (default). 

## Setup:
The environments and technologies used:
1. React v17.0.2 
2. JavaScript, HTML, CSS, Bootstrap 
3. Visual Studio Code, WSL 2 (Ubuntu 20.04.2 LTS)
4. node v14.16.0
5. npm 8.1.0

Clone this repository to the desired workspace path. 
Install the neccessary dependencies via npm: 
```
$ npm install
```
To start the server-side interface use the command:
```
$ npm start
```
If an 'Error: listen EADDRINUSE: address already in use :3000' occurs, simply kill all node processes before running 'npm start'. To do this use the command: 
```
$ killall -9 node
```
Run the command 'npm start' again after all node processes are stopped. This will start the development server and open a new browser where the application can be viewed at http://localhost:3000. 

## Project Development and Design Choices