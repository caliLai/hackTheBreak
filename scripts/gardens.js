/****
	BCIT HACK THE BREAK 2021

	PAGE FOR VANCOUVER'S COMMUNITY GARDENS AND FOOD TREES
****/

//modules
const axios = require("axios")
const utilities = require("./utilities");

const GARDENS_URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-gardens-and-food-trees&q=&rows=5&sort=mapid&facet=mapid&facet=name&facet=merged_address&facet=notes&facet=food_tree_varieties&facet=public_e_mail&facet=website&facet=geom";

axios.get(GARDENS_URL)
	// .then(res => utilities.filter(res.data.records, ))
	.then(res => res.data.records)
	.then(res => res.map(k => k.fields))
	.then(res => utilities.filterData(res, "jurisdiction", "Park Board"))
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
