//import all dependencies

const fs = require('fs');
const path = require('path');
const express = require('express');

//create new express instance
const app = express();

//added PORT

const PORT = process.env.PORT || 3001;
