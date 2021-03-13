//uses records API to GET up-to-date data from site
const axios = require('axios')
const fs = require('fs');

const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&q="
axios.get(URL)
    .then((res) => fs.writeFile("./community-food-markets-and-farmers-markets.json",res))
    .catch((err) => console.log(err));