const fetch = require('node-fetch');

const getGallery = (req, res) => {
  fetch(`http://localhost:9999/tripAdvisor/${req.params.id}/gallery`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getPrice = (req, res) => {
  const { id } = req.params;
  fetch(`http://localhost:3001/api/trip/${id}/price`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getCalendar = (req, res) => {
  const { id } = req.params;
  const { startdate, adults } = req.query;

  fetch(`http://localhost:3001/api/trip/${id}/calendar/?startdate=${startdate}&enddate=${startdate}&adults=${adults}`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
};

const getTour = (req, res) => {
  fetch('http://localhost:3000/tour')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

const getReviews = (req, res) => {
  fetch('http://3.12.90.50:3000/reviews')
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

const updateReview = ({body: { _id }}, res) => { // nested destructuring
  fetch('http://3.12.90.50:3000/reviews', {
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