const market = require("./scripts/markets.js");
const fcns = require("./scripts/utilities.js");
const fs = require('fs');
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";

var data = {};
/*function handle_db(results){
    console.log("recieved data");
    data = fcns.data_sort(results,'day');
}*/
let data = {};
function handle_db(results){
    console.log("recieved data");
    data = results;
    //convert am/pm to 24-hour
    for(x in data){
        if(data[x].fields.open != undefined)    data[x].fields.open = fcns.hourconv(data[x].fields.open)
        if(data[x].fields.close != undefined)   data[x].fields.close = fcns.hourconv(data[x].fields.close)
    }
}

market.db_update(URL, function(results){
    console.log('recieved');
    handle_db(results);
})
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
    if(input == "sort"){
        rl.question("sort by:", (answer) => {
            data = fcns.data_sort(data, answer)
            console.log(data);
        })
    }
    if(input == "search"){
        rl.question("search location host:", (answer) => {
            let response = fcns._search(data, 'marketname_location_host', answer);
            console.log(response); 
        })
    }
})
