const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

app.use(express.static('client'));
app.use(cors());

app.get('/tripAdvisor/:id/gallery', (req, res) => {
  fetch(`http://13.52.101.132/tripAdvisor/${req.params.id}/gallery`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/api/trip/:id/price', (req, res) => {
  const { id } = req.params;
  fetch(`http://127.0.0.1:3001/api/trip/${id}/price`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/api/trip/:id/calendar/?', (req, res) => {
  const { id } = req.params;
  const { startdate, adults } = req.query;

  fetch(`http://127.0.0.1:3001/api/trip/${id}/calendar/?startdate=${startdate}&enddate=${startdate}&adults=${adults}`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/tour', (req, res) => {
  fetch('http://127.0.0.1:3000/tour')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/trip/reviews', (req, res) => {
  fetch('http://127.0.0.1:4000/reviews')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));