const fs = require('fs');
const { parse } = require('path');

function readFile(filePath) {
	console.log('Reading file');
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			}
			console.log('Read opertation completed');
			resolve(data);
		});
	});
}

function writeFile(filePath, content) {
	console.log('Writing to a file');
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, content, (err) => {
			if (err) {
				reject(err);
			}
			console.log('Write operation completed');
			resolve();
		});
	});
}

async function textParse(filePath) {
	let dataRead = await readFile(filePath);
	if (!dataRead) return;

	const parsedData = dataRead.replace(/\s+/g, ' ').trim();
	console.log('Parsed data : ' + parsedData);
	await writeFile(filePath, parsedData);
	console.log('Data parsed and written');
}

textParse('./dummy.txt');
