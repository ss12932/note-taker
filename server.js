//import all dependencies

const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

//added PORT
const PORT = process.env.PORT || 3001;

//create new express instance
const app = express();

//middlewares
//logger mw
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
