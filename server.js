const express = require('express');
const  logger = require('./middleware/logger');
const app = express();
app.use (logger);
app.use(express.json());
app.use(express.static(__dirname +'/public'));
const port = 4000;
app.listen(port,(err) => {
  if(err) 
  {
    console.log(err);
  }
  else
  {
     console.log('The server is running,' + port);
  } 
});