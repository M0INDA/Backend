#!/bin/bash
npm install
sudo pm2 kill
sudo pm2 start dist/main.js
