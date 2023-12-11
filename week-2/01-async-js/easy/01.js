function startCounter() {
	let count = 0;
	const intervalId = setInterval(() => {
		count++;
		console.log(count);

		/*
    //If we want to stop counter after some time, we can use this
		if (count >= 100) {
			clearInterval(intervalId);
			console.log('Aborted counter after count = 100');
		}
    */
	}, 1000);
}

startCounter();
