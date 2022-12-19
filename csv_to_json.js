const fs = require("fs");
const csv = fs.readFileSync("file_name_here.csv")

var array = csv.toString().split("\n");
let result = {};

let headers = array[0].split(",")

for (let i = 1; i < array.length - 1; i++) {
	let headers = array[i].split(",")

	if(headers[12] === '#N/A' || headers[12] === ''){
		headers[12] = "https://google.com"
	}

	result[headers[1].replace('BOF-', "")] = {
		institution_commercial_name: headers[7],
		logo: headers[12]
	}
}

let json = JSON.stringify(result);
console.log(result)
fs.writeFileSync('data.json', json);