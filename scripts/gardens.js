/****
	BCIT HACK THE BREAK 2021

	PAGE FOR VANCOUVER'S COMMUNITY GARDENS AND FOOD TREES
****/

//modules
const axios = require("axios");
// const utilities = require("./utilities");

const MARKETS_URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&q=&facet=MarktName-Location-Host&facet=MergedAddress&facet=Open&facet=Close&facet=MarketOperator&facet=NumberOfVendors&facet=Offerings";

axios.get(MARKETS_URL)
	// .then(res => utilities.filter(res.data.records, ))
	.then(res => res.data.records)
	.then(res => res.map(k => k.fields))
	// .then(res => res.filter(k => k.markettype == "Farmers Market"))
	// .then(res => )
	.then(res => utilities.filterData(res, "markettype", "Farmers Market"))
	.then(res => console.log(res))
	.catch(err => console.log(err))

// let data = {};
//
// const getData = (results) => {
// 	console.log("data extracted");
// 	data = results;
// }
//
// utilities.getRaw(GARDENS_URL, (results) => {
// 	console.log("data recieved");
// 	getData(results);
// })
