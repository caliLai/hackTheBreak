//uses records API to GET up-to-date data from site
const axios = require('axios')

function db_update(URL){
    axios.get(URL)
        .then((res) => {
           //output in console all available data 1 by 1
            for(x in res.data.records){
                return res.data;
            }
        })
    .catch((err) => console.log(err));
};
module.exports = {db_update};