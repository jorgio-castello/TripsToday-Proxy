const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

app.use(express.static('client'));
app.use(cors());

app.get('/trip/gallery/:id', (req, res) => {
  fetch(`http://127.0.0.1:9999/tripAdvisor/${req.params.id}/gallery`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));