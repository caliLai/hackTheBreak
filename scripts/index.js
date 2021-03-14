// import {data_sort} from "./utilities.js";

let records;

$(document).ready(function(){
	// let main = $("#main");
	getData();
	// displayData();
})

async function getData() {
	const MARKETS_URL = "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&q=&facet=MarktName-Location-Host&facet=MergedAddress&facet=Open&facet=Close&facet=MarketOperator&facet=NumberOfVendors&facet=Offerings&rows=100";
	const res = await fetch(MARKETS_URL);
	const data = await res.json();
	// records = data.records;

	for(let row in data.records) {

		if(!("marketname_location_host" in data.records[row].fields) ||
		!("mergedaddress" in data.records[row].fields) ||
		!("open" in data.records[row].fields)){
			continue;
		}

		let card = `
		<div class="col">
			<div class='card'>
				<div class='card-body'>
					<div class='card-title'>
						${data.records[row].fields.marketname_location_host}
					</div>
					<div class='card-text'>
						Hours: ${data.records[row].fields.open} - ${data.records[row].fields.close}
					</div>
					<div class='card-text'>
						Location: ${data.records[row].fields.mergedaddress}
					</div>
					<div class='card-text'>
						Market type: ${data.records[row].fields.markettype}
					</div>
				</div>
			</div>
		</div>
		`
		$("main").attr("class", "row row-cols-1 row-cols-md-3 g-4");
		$("main").append(card);
		// console.log(row, data.records[row].fields.open);
	}
	// console.log(records);
}

// function displayData() {
// 	for(let row in records) {
// 		// $("main").append(row.fields.open)
// 		console.log(row);
// 	}
// 	// $("main").after("<p>hello</p>")
// }
