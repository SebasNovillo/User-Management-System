require('dotenv').config();

const express = require('express');
const expresLayout = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;


