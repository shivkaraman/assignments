/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}

function waitTwoSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

function waitThreeSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
}

function getCurrentTime() {
	return new Date().getTime();
}

function calculateTime() {
	let start = getCurrentTime();
	let end = null;
	Promise.all([waitThreeSecond(), waitTwoSecond(), waitThreeSecond()]).then(
		() => {
			end = getCurrentTime();
			console.log(
				`Time required for Promise-all: ${(end - start) / 1000} seconds`
			);
		}
	);

	start = getCurrentTime();
	end = null;
	waitOneSecond().then(() => {
		waitTwoSecond().then(() => {
			waitThreeSecond().then(() => {
				end = getCurrentTime();
				console.log(
					`Time required for Promise-Chiaining:${
						(end - start) / 1000
					} seconds`
				);
			});
		});
	});
}

calculateTime();
