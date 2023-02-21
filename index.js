const express=require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/static'));

app.get('/counter', (req, res) => {
    res.sendFile(path.resolve('static/counter.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})