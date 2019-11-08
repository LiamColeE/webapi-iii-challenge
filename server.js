const express = require("express");
const server = express();
const userRouter = require("./users/userRouter")
const bodyParser = require('body-parser')
server.use(logger);
server.use(bodyParser.urlencoded({ extended: false }));
server.use('',userRouter)
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware
function logger(req, res, next) {
  let date = new Date();
  console.log("Method: " + req.method + ", URL: " + req.url + ", At " + date.getMonth() + "/" + date.getDay()
   + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

   next();
};

module.exports = server;
