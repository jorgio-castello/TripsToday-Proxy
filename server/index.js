const express = require('express');
const app = express();

app.use(express.static('client'));


app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));