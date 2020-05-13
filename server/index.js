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

app.get('/trip/bookings/data/:id', (req, res) => {
  const { id } = req.params;
  fetch(`http://127.0.0.1:3001/api/trip/${id}/price`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/trip/bookings/price/:id/:date/:adults', (req, res) => {
  const { id, date, adults } = req.params;
  fetch(`http://127.0.0.1:3001/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});

app.get('/trip/itinerary', (req, res) => {
  fetch('http://127.0.0.1:3000/tour')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
});


app.listen(2400, () => console.log('Proxy Server Listening to Requests on Port 2400...'));