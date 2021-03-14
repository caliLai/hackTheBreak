let records;

$(document).ready(function(){
	// let main = $("#main");
	getData();
})

async function getData() {
	const MARKETS_URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&q=&facet=MarktName-Location-Host&facet=MergedAddress&facet=Open&facet=Close&facet=MarketOperator&facet=NumberOfVendors&facet=Offerings";
	const res = await fetch(MARKETS_URL);
	const data = await res.json();
	records = data.records;
	// console.log(records);
}

function displayData() {
	for(let row of records) {

	}
}
