const market = require("./scripts/markets.js");
const fcns = require("./scripts/functions.js");
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";
let data = {};
function handle_db(results){
    console.log("recieved data");
    data = results;
}

market.db_update(URL, function(results){
    console.log('recieved');
    handle_db(results);
})
fcns.is_open();
//console commands

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    if(input == "exit"){
        console.log("Closing application");
        rl.close();
        return 0;
    }
    if(input == "output"){
        console.log(data);
    }
})