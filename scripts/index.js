const market = require(market.js)
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";
const data = market.db_update(URL);
console.log(data);