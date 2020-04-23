const axios = require('axios');

module.exports = {
  getJoke(req, res) {
    return axios.get(`https://api.chucknorris.io/jokes/random`)
      .then(response => {
        res.status(200).send(response.data); // .data ?
      });
  }
}