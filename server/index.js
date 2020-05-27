const express = require('express');
const compression = require('compression');
const cache = require('express-cache-controller');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

// app.use(cache({maxAge: 31536000}));
// app.use(express.json());
// app.use(compression());
app.use(express.static('client'));
app.use(express.json());
app.use(cors());

app.get('/tripAdvisor/:id/gallery', (req, res) => {
  fetch(`http://54.215.51.250/tripAdvisor/${req.params.id}/gallery`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/api/trip/:id/price', (req, res) => {
  const { id } = req.params;
  fetch(`http://3.12.241.47/api/trip/${id}/price`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/api/trip/:id/calendar/?', (req, res) => {
  const { id } = req.params;
  const { startdate, adults } = req.query;

  fetch(`http://3.12.241.47/api/trip/${id}/calendar/?startdate=${startdate}&enddate=${startdate}&adults=${adults}`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/tour', (req, res) => {
  fetch('http://34.222.61.220/tour')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/reviews', (req, res) => {
  fetch('http://18.217.110.214:3004/reviews')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.put('/reviews', ({body: { _id }}, res) => { // nested destructuring
  fetch('http://18.217.110.214:3004/reviews', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ _id })
  })
  .then(res => res.json())
  .then(data => res.send(data));
});

app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));