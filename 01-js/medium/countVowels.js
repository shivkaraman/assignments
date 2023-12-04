/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	let count = 0;
	str = str.replace(/[^a-zA-Z]/g, '').toLowerCase(); //Removes all aplhabetic characters

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			count++;
		}
	}
	return count;
}

module.exports = countVowels;
