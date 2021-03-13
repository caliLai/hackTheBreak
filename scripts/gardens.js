/****
	BCIT HACK THE BREAK 2021

	PAGE FOR VANCOUVER'S COMMUNITY GARDENS AND FOOD TREES
****/

//modules
// const axios = require("axios");
// const utilities = require("./utilities");
const fetch = require(".node-fetch");

const CITY_URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-gardens-and-food-trees&q=&rows=5&sort=mapid&facet=mapid&facet=name&facet=merged_address&facet=notes&facet=food_tree_varieties&facet=public_e_mail&facet=website&facet=geom";
//
// let data = (url) => {
// 	axios.get(url)
// 	.then((res) => console.log(res.data.records))
// 	.catch((err) => console.log(err))
// }
// let a = data(CITY_URL);
// console.log(a);

const a = await fetch(CITY_URL);
// console.log(a);

// a.filter(thing => thing.record_timestamp);

// let fil = utilities.filterer(a, "jurisdiction", "Park Board");
// console.log(fil);
