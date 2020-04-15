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
app.use(router);

// listen on port
app.listen(PORT, () => `Zion products service listening on port ${PORT}`);
