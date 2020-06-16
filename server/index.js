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
const { getGallery, getPrice, getCalendar, getTour, getReviews, updateReview } = require('./controllers');

// Routes
app.get('/tripAdvisor/:id/gallery', getGallery);
app.get('/api/trip/:id/price', getPrice);
app.get('/api/trip/:id/calendar/?', getCalendar);
app.get('/tour', getTour);
app.get('/reviews', getReviews);
app.put('/reviews', updateReview);

// Port Configuration
const PORT = process.env.port || 2400;

app.listen(PORT, () => console.log(`Proxy Server Listening to Requests on Port ${PORT}...`));