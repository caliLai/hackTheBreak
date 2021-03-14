//uses records API to GET up-to-date data from site
const axios = require("axios");

function db_update(URL, callback) {
  axios
    .get(URL)
    .then((res) => {
      callback(res.data.records);
    })
    .catch((err) => console.log(err));
}
module.exports = { db_update };
