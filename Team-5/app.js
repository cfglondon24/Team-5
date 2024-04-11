const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

app.use(cors());
app.use(express.static('client'));
app.use(express.json());

module.exports = app;