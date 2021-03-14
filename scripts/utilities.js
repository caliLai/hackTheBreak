/***

***/

//-----modules-----//
// const axios = require("axios");


// basically db_update, gets the raw data fields
// from the url
const getRaw = (url, callback) => {
	axios.get(url)
		.then(res => callback(res.data.records))
		.catch(err => console.log(err))
}


//==============================//


const filterData = (data, key, value) => {
	return new Promise((resolve, reject) => {
		let filtered = data.filter(garden => {
			garden[key] == value;
		})
		resolve(filtered);
	})
}

module.exports = {
	getRaw,
	filterData,
}
