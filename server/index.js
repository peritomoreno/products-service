const PORT = 3000;

// require libraries
const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

// add routers here
const router = require('./routes/productServicesRoutes');

// initialize express
const app = express();

// middleware
app.use(parser.json());
app.use(morgan('dev'));
app.use(cors());

// start routers here
app.get('/loaderio-51300b50a8fc03780468f70e5467d7c6.txt', (req, res) => {
  res.send('loaderio-51300b50a8fc03780468f70e5467d7c6');
});
app.use(router);

// listen on port
app.listen(PORT, () =>
  console.log(`Zion products service listening on port ${PORT}`)
);
