const fs = require("fs");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Read CSV
function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// Write CSV
function writeCSV(filePath, data) {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: "type", title: "type" },
      { id: "name", title: "name" },
      { id: "id", title: "id" },
      { id: "price", title: "price" },
    ],
  });

  return csvWriter.writeRecords(data);
}

module.exports = { readCSV, writeCSV };
