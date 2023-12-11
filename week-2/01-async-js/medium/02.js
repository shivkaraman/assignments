/*
function Counter2(time) {
	setTimeout(() => {
		console.log(new Date(time).toLocaleTimeString());
		Counter2(time + 1000);
	}, 1000);
}
Counter2(Date.now());
*/

function displayTime1(time) {
	console.log(time.toLocaleTimeString());
}

function displayTime2(time) {
	const hour = time.getHours().toString().padStart(2, '0');
	const min = time.getMinutes().toString().padStart(2, '0');
	const sec = time.getSeconds().toString().padStart(2, '0');

	console.log(`${hour}:${min}:${sec}`);
}

function Counter1() {
	let start = Date.now();
	setInterval(() => {
		start += 1000;
		// displayTime1(new Date(start));
		displayTime2(new Date(start));
	}, 1000);
}

Counter1();
