'use strict';
const xlsx = require('xlsx')
var fs = require('fs');
 
convertExcelFileToJsonUsingXlsx();

function convertExcelFileToJsonUsingXlsx() {

  const file = xlsx.readFile('./excel_file_name_here.xlsx');
  const sheetNames = file.SheetNames;

  let objeto = {}

  for (let i = 0; i < 400; i++) {

      const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[0]]);

      const id = tempData[i].ID.replace("BOF-", "")

      objeto[id] = {
        institution_name: tempData[i].COMERCIAL ?? "",
        logo: tempData[i].LOGO == 0 || !tempData[i].LOGO ? "https://google.com" : tempData[i].LOGO
      }
  }

  generateJSONFile(objeto);
  console.log(objeto)
}

function generateJSONFile(data) {
  try {
   	fs.writeFileSync('data.json', JSON.stringify(data))
  } catch (err) {
   	console.error(err)
  }
}