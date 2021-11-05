#!/bin/bash
git clone https://github.com/Ganesha2282882/paddleballjs.git node_modules/paddleballjs
cd node_modules/paddleballjs
mv index.js dev.js
npx uglifyjs dev.js > index.js
rm dev.js
cd -
