// Dependencies
const express = require('express');
const compression = require('compression');
const cache = require('express-cache-controller');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

// Express configuration
app.use(cache({maxAge: 31536000}));
app.use(express.json());
app.use(compression());
app.use(express.static('client'));
app.use(express.json());
app.use(cors());

// Controllers
const { getGallery, getPrice, getCalendar, getTour } = require('./controllers');

app.get('/tripAdvisor/:id/gallery', getGallery);


app.get('/api/trip/:id/price', getPrice);

app.get('/api/trip/:id/calendar/?', getCalendar);

app.get('/tour', getTour);

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