const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

const publichPath = path.resolve(__dirname, './public');
 app.use ( express.static(publichPath) );


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))});

app.listen(process.env.PORT || 3002, () => console.log('servidor andando'));