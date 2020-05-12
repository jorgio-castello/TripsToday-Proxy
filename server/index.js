const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('client'));
app.use(cors());



app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));