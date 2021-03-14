const market = require("./scripts/markets.js");
const fcns = require("./scripts/functions.js");
const fs = require('fs');
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";

let data = {};
function handle_db(results){
    console.log("recieved data");
    data = results;
}
function availability_check(data){
    for(x in data){
        let open = data[x].fields.open;
        let close = data[x].fields.close;
        let day = data[x].fields.day;
        let month = data[x].fields.months;
        
        fcns.is_open(open,close,day,month);
    }
    console.log("done");
}
market.db_update(URL, function(results){
    console.log('recieved');
    handle_db(results);
})
//console commands

const readline = require('readline');
const { add } = require("lodash");
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
    if(input == "open"){
        fcns.is_open(data);
    }
    if(input == "check"){
        availability_check(data);
    }
    if(input == "convert"){
        add(firebaseConfig, db, data);
    }
})

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = fs.readFileSync("config.json");
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app);