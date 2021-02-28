require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000
const app = express();

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));