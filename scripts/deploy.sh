#!/bin/bash

export SCRIPT_ROOT_FOLDER=pwd

#Deploying the database
cd ../infrastructure/db
sls deploy --region ${AWS_DEFAULT_REGION} --env ${NODE_ENV}

#Deploying the application
cd SCRIPT_ROOT_FOLDER
cd ../src
sls deploy --region ${AWS_DEFAULT_REGION} --env ${NODE_ENV}
