#!/bin/bash

cd /home/ubuntu/Backend
npm install
sudo pm2 kill
sudo pm2 start dist/main.js
