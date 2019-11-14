#!/bin/bash

export SCRIPT_ROOT_FOLDER=pwd

#testing the application
cd ../src
npm run clean
npm ci
npm run lint
npm run coverage
