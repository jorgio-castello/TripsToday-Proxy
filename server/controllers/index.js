const fetch = require('node-fetch');
const { galleryURL, galleryPort,
        bookingURL, bookingPort,
        itineraryURL, itineraryPort,
        reviewsURL, reviewsPort }
= require('./ServiceURLS');


const getGallery = (req, res) => {
  fetch(`${galleryURL}:${galleryPort}/tripAdvisor/${req.params.id}/gallery`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getPrice = (req, res) => {
  const { id } = req.params;
  fetch(`${bookingURL}:${bookingPort}/api/trip/${id}/price`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getCalendar = (req, res) => {
  const { id } = req.params;
  const { startdate, adults } = req.query;

  fetch(`${bookingURL}:${bookingPort}/api/trip/${id}/calendar/?startdate=${startdate}&enddate=${startdate}&adults=${adults}`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getTour = (req, res) => {
  fetch(`${itineraryURL}:${itineraryPort}/tour`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

const getReviews = (req, res) => {
  fetch(`${reviewsURL}:${reviewsPort}/reviews`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

const updateReview = ({body: { _id }}, res) => { // nested destructuring
  fetch(`${reviewsURL}:${reviewsPort}/reviews`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ _id })
  })
  .then(res => res.json())
  .then(data => res.send(data));
};

module.exports.getGallery = getGallery;
module.exports.getPrice = getPrice;
module.exports.getCalendar = getCalendar;
module.exports.getTour = getTour;
module.exports.getReviews = getReviews;
module.exports.updateReview = updateReview;