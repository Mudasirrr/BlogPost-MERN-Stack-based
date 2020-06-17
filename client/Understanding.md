
const PORT =process.env.PORT || 8180;//we use this line because we have to connect app with port, if 8180 is busy then it will take another port process.env..



step#4
 add the below in the server side package.json
    "build": "cd client && npm run build",
    "install-client": "cd client && install",
    "heroku-postbuild": "npm run install-client && npm run build",
