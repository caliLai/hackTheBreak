const market = require("./scripts/markets.js");
const fcns = require("./scripts/functions.js");
const fs = require('fs');
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";

var data = {};
function handle_db(results){
    console.log("recieved data");
    data = results;
}
function availability_check(data){
    let open = data.fields.open;
    let close = data.fields.close;
    let day = data.fields.day;
    let month = data.fields.months;
    
    fcns.is_open(open,close,day,month);
    console.log("done");
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
    test = input.split(' ');
    if(test[0] == "exit"){
        console.log("Closing application");
        rl.close();
        return 0;
    }
    if(test[0] == "output"){
        console.log(data);
    }
    if(test[0] == "open"){
        fcns.is_open(data);
    }
    if(test[0] == "check"){
        availability_check(data[0]);
    }
    if(test[0] == "sort"){
        console.log('sorting');
        data = fcns.data_sort(data, test[1], test[2]);
        console.log('done');
    }
})
