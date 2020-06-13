const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');

// app.use(express.json());
app.use(express.static('public'))
// app.use(bodyParser());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  console.log(req.body);
  next();
});

app.get('/data', (req, res) => {
  console.log(' I GOT CALLED ')
  // fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json', {
    method: 'GET'
  })
    .then(function(result) {
      return result.json();
    })
    .then(result => res.send(result))
    // .then(result => res.send(result))
    .catch((error) => console.error(error));
})

app.listen(3000, () => console.log('Express server listening on port 3000'));

