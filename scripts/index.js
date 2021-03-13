const market = require("./markets.js")
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";


function handle_db(results){
    console.log(results);
}

market.db_update(URL, function(results){
    console.log('recieved');
    handle_db(results);
})