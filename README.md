# Simple URL Sample

Sample of a simple Symphony Extension API app that loads an external URL within a Symphony module.
App has a simple Controller that after registering the app : 
1. uses the 'applications-nav' service to display an item in the Symphony left nav
2. uses the 'modules' service to open a module and load a URL
Note that the URL must be HTTP and allowed to be embedded within an iFrame on the pods domain

Building the sample and running locally assumes NodeJS is installed.

# Running Locally
Sample can be run locally using NodeJS http-server (https://www.npmjs.com/package/http-server)

http-server --cors --ssl --key ssl.key --cert ssl.cert

Note that has to be run with CORS enabled for the "Access-Control-Allow-Origin" header and SSL.
Can generate a simple cert/key pair using OpenSSL

openssl req -newkey rsa:4096 -nodes -keyout ssl.key -x509 -days 365 -out ssl.cert


# Running on Google Firebase Hosting
Google Firebase is great place to host Symphony Extension API Apps. Simple to set up and free to run simple apps
Go to https://console.firebase.google.com and create a new Firebase project
Install Firebase tools: npm install -g firebase-tools
From within the working folder
Login: firebase login
Initialise: firebase init
Deploy: firebase deploy


