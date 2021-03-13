//uses records API to GET up-to-date data from site
const axios = require('axios')
const fs = require('fs');

const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&rows=100";
axios.get(URL)
    .then((res) => {
       //output in console all available data 1 by 1
        for(x in res.data.records){
            console.log(res.data.records[x]);
        }
    })
    .catch((err) => console.log(err));