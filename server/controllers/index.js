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

module.exports.getGallery = getGallery;
module.exports.getPrice = getPrice;
module.exports.getCalendar = getCalendar;
module.exports.getTour = getTour;