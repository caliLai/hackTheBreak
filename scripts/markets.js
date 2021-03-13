//uses records API to GET up-to-date data from site
const axios = require('axios')
const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";

function db_update(URL,callback){
    axios.get(URL)
        .then((res) => {
           //output in console all available data 1 by 1
            callback(res.data.records);
        })
    .catch((err) => console.log(err));
};

function handle_db(results){
    console.log(results);
}

db_update(URL, function(results){
    console.log('recieved');
    handle_db(results);
})