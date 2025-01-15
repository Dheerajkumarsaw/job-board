# job-board

# Node.js Application with TypeScript, Express, MySQL, and Sequelize.

# Project Overview
This project is a Node.js application built with TypeScript, Express, Sequelize, and MySQL. It demonstrates how to set up and run a REST API that interacts with a MySQL database.

# Prerequisites
Before setting up the application, ensure you have the following installed:

Node.js (v18 or higher)
Download Node.js

Docker (for containerized setup)
Download Docker

MySQL (if running without Docker)
Download MySQL

# 1. Clone the Repository
Clone the project to your local machine:

```shell
$ git clone https://github.com/Dheerajkumarsaw/job-board.git
$ cd job-board
```

# Step 1: Run Mysql server with docker
Run the following command to start the containers:

```shell
# Make sure you have installed and running docker desktop
$ docker-compose up
```

# Step 2: Run the Application Locally

# Install Dependencies
Install the required Node.js packages:
```shell
$ npm install
```

# Start the Application
```shell
$ npm start
```

# Test APIs 
# Open Postman and all the apis
# Method          URL                           Description
```shell
$ POST      http://localhost:3000/api/jobs         To Create the Job
$ GET       http://localhost:3000/api/jobs         To Get All the jobs
$ GET       http://localhost:3000/api/jobs/{id}    To Get By Id
$ PUT       http://localhost:3000/api/jobs/{id}    To Update job
$ DELETE    http://localhost:3000/api/jobs/{id}    To Delete job
```

