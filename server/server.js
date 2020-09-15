const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
    res.send({
        message: 'Hello world!'
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`This API is running on port ${port}`)
});