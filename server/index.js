
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');


const port = 3002;

const app = express();

app.use(cors());
app.use(json());

//endpoints

//Checking that server is running
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});