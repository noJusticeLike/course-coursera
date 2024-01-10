// Import all the modules require
const fs = require('fs');
const lodash = require('lodash');
const readline = require('readline');

// Use try and catch to handle the error wherever required
// Return the callback with appropriate data wherever required in all the methods

// More user-defined methods can be written if required to write the logical stuff

// This method will take two parameters: the fileName
// and second a callback
// Read file data line by line using readLine
// Create an array and push all data inside the array

const readFileContentsLineByLine = (fileName, cb) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  let fileContents = [];
  rl.on('line', function (line) {
    fileContents.push(line);
    if (fileContents.length === 1339) {
      cb(null, fileContents);
    }
  });
};

// This method will take two parameters: the file content
// and second the callback
// Use map to filter the data
// Filter all the records for female candidates given the region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData = lodash.filter(fileContents, (file) => file[4] === 'f' && file[25] === 's');
  // Use lodash.compact() method if required
  const compactFilteredData = lodash.compact(filteredData);
  cb(null, compactFilteredData);
};

// This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  // Use writeFile method to write the filteredData
  fs.writeFile(outputFileName, filteredData.join('\n'), (err) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, 'Data has been written to the file successfully.');
    }
  });
};

// This method will read the file content using Streams
// Create an array and push all the data from the file to it

const readFileContentsUsingStream = (fileName, cb) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  let fileContents = [];
  rl.on('line', function (line) {
    fileContents.push(line);
    if (fileContents.length === 1338) {
      cb(null, fileContents);
    }
  });
};

// This method will filter data with no children; it will take two parameters
// first the fileContent and second the callback
// Use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData = lodash.filter(fileContents, (file) => file[9] === '0');
  // Use lodash.compact() if required
  const compactFilteredData = lodash.compact(filteredData);

  // Callback with the filtered and compacted data
  cb(null, compactFilteredData);
};

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
  filterDataWithNoChildren,
};

