// import {data_sort} from "./utilities.js";
// const util = require("./utilities");
// function includeJs(jsFilePath) {
//     var js = document.createElement("script");
//     js.src = jsFilePath;
//     js.type = "text/javascript";
//     document.head.appendChild(js);
// }
// includeJs("../scripts/utilities.js");

$(document).ready(function () {
  // let main = $("#main");
  $(window)
    .resize(function () {
      checkWidth();
    })
    .resize();

  // let sorted = data_sort(getData(), "markettype");
  // console.log(sorted);
  getData("mergedaddress");
  $("select").change(function() {
	  console.log($("select").val());
	  // return $("select").val();
	  // r_sorted = data_sort(records, $("select").val());
	  // displayData(data_sort(getData(), $("select").val()));
	  getData($("select").val());
  });
});


//-------------------------------------//

function hourconv(_int) {
  if (_int.includes("am")) {
    _int = parseInt(_int.replace("am"));
  } else if (_int.includes("pm")) {
    _int = parseInt(_int.replace("pm")) + 12;
  }
  return _int;
}
function compare(field, order = "asc") {
  return function innerSort(a, b) {
    let A, B;
    A =
      typeof a.fields[field] === "string"
        ? a.fields[field].toUpperCase()
        : a.fields[field];
    B =
      typeof b.fields[field] === "string"
        ? b.fields[field].toUpperCase()
        : b.fields[field];
    let comp = 0;
    if (A === undefined && B != undefined) comp = -1;
    if (b === undefined && A != undefined) comp = 1;
    if (A > B) comp = 1;
    else if (A < B) comp = -1;
    return order === "desc" ? (comp *= -1) : comp;
  };
}
function data_sort(data, field, order = "asc") {
  return data.sort(compare(field, order));
}
function _search(data, key, keyword) {
  let response = [];
  for (x in data) {
    if (data[x].fields[key].includes(keyword)) {
      response.push(data[x]);
    }
  }
  return response;
}
function checkWidth() {
  if ($(window).width() < 1050) {
    $("#main").addClass("row-cols-2");
    $("#main").removeClass("row-cols-3");
  } else {
    $("#main").removeClass("row-cols-2");
    $("#main").addClass("row-cols-3");
  }
}
//-------------------------------------//

async function getData(field) {
  const MARKETS_URL =
    "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=community-food-markets-and-farmers-markets&q=&facet=MarktName-Location-Host&facet=MergedAddress&facet=Open&facet=Close&facet=MarketOperator&facet=NumberOfVendors&facet=Offerings&rows=100";
  const res = await fetch(MARKETS_URL);
  const data = await res.json();

  // console.log(data.records);
  // return data.records;
 await displayData(data_sort(data.records, field));
}

function displayData(records) {
  $("main").empty();
  for (let row in records) {
    if (
      !("marketname_location_host" in records[row].fields) ||
      !("mergedaddress" in records[row].fields) ||
      !("open" in records[row].fields)
    ) {
      continue;
    }

    let card = `
		<div class="col">
			<div class='card'>
				<div class='card-body'>
					<div class='card-title'>
						<b>${records[row].fields.marketname_location_host}</b>
					</div>
					<div class='card-text'>
						Hours: ${records[row].fields.open} - ${records[row].fields.close}
					</div>
					<div class='card-text'>
						Location: ${records[row].fields.mergedaddress}
					</div>
					<div class='card-text'>
						Market type: ${records[row].fields.markettype}
					</div>
				</div>
			</div>
		</div>
		`;
    $("main").attr("class", "row row-cols-2 g-4 bigText");
    $("main").attr("id", "main");
    $("main").append(card);
    // console.log(row, records[row].fields.open);
  }
  // $("main").after("<p>hello</p>")
}
