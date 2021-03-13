/****
	BCIT HACK THE BREAK 2021

	PAGE FOR VANCOUVER'S COMMUNITY GARDENS AND FOOD TREES

****/

//modules
const axios = require("axios");

const URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-gardens-and-food-trees&q=&rows=5&sort=mapid&facet=mapid&facet=name&facet=merged_address&facet=notes&facet=food_tree_varieties&facet=public_e_mail&facet=website&facet=geom";

axios.get(URL)
	.then((res) => console.log(res.data.records))
	.catch((err) => console.log(err))
