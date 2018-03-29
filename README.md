

# live drawing app built in Angular 2

Angular2 based live drawing canvas application for more than one participants, Every action is broadcasted to all participants in real-time using WebSocket.

Here are the technologies used :
- Angular 2 on the client side.
- websocket for communication. 
- pure HTML5 Canvas.
- Server side : Node.js
- MongoDB for storage 

## Needed packages

- socket.io for realtime broadcasting
   `$ npm install socket.io`

- MongoDB object modeling tool
   `$ npm i -S mongoose`
   
- allowing it to automatically start on boot for node.js server
   `$ npm i -g forever`
   
-   Node.js body parsing middleware
   `$ npm i -S body-parser`
   
- MongoDB Session Storage for ExpressJS
   `$ npm i -S express-session`
   
- MongoDB session store for Connect
   `$ npm i -S connect-mongo`
   
- Express is a minimal and flexible Node.js web application framework
   `$ npm install express --save`
   
## Test Users
 - username: user  | password:123
 - username: bob   | password:1234
 - username:alice   | password:123
 - username:besho | password:123
 
## Try The Live Demo
   https://angular2-live-drawing-app.herokuapp.com
