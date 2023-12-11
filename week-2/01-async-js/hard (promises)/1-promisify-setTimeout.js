/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().getTime());
		}, n);
	});
}

const start = new Date().getTime();
wait(3000).then((end) => {
	console.log('Promise Resolved in : ' + (end - start) / 1000 + 's');
});
