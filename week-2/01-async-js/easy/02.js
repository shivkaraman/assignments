function Counter2(count) {
	setTimeout(() => {
		console.log(count);
		Counter2(count + 1);
	}, 1000);
}

Counter2(0);
