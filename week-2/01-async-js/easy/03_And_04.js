const fs = require('fs');

function readFile() {
	console.log('Reading file');
	fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Content read from file : ' + data);
	});
}

function writeFile() {
	console.log('Writing to a file');
	fs.writeFile('./dummy.txt', 'Hello Shivkaraman', (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Content written to file');
	});
}

function busyWait(end) {
	let sum = 0;
	for (let i = 0; i <= end; i++) {
		sum += i;
	}
}

function demo() {
	readFile();
	console.log('JS Thread busy');
	busyWait(1000000000);

	writeFile();
	console.log('JS Thread busy');
	busyWait(1000000000);

	console.log('Demonstration complete');
}

demo();
