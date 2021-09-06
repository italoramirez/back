const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.use('/anagrama', require('./routes/anagram'));
app.use('/matriz', require('./routes/matriz'));
app.use('/frutas', require('./routes/frutas'));

app.listen(port, () => { 
    console.log('listening on port ' + port);
})

