const fs = require('fs');

function csvToJson(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        headers.forEach((header, j) => {
            let value = currentLine[j].trim();


            if (!isNaN(value) && value !== '') {
                value = Number(value);
            }
    
            // Remove surrounding quotes if present
            if (typeof value === 'string') {
                value = value.replace(/^['"]+|['"]+$/g, '');
            }
    
            obj[header.trim()] = value;
        });

        result.push(obj);
    }

    return result;
}

fs.readFile('./vendors/csv/PetMassaPut.csv', 'utf8', (err, data) => {
          //'./vendors/csv/PetMassaPut.csv'
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Process the CSV data
    const jsonData = csvToJson(data);
    console.log('Results - Csv to Json', JSON.stringify(jsonData, null, 2));


    fs.writeFile('./csvToJson/JsonFileConverted-PUT.js', JSON.stringify(jsonData, null, 2), (err) => {
                //csvToJson\JsonFileConverted-PUT.js
        if (err) {
            console.error('Error writing JSON to file:', err);
            return;
        }
        console.log('JSON file has been saved.');
    });

});