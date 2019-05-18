const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const user = require('./routes/user');
const network = require('./routes/network');
const generation = require('./routes/generation');

app.use(cors());
app.use(bodyParser());

app.use('/user', user);
app.use('/network',network);
app.use('/generation', generation);


app.listen(3000, function () {
    console.log('Neuro listening on port 3000')
})