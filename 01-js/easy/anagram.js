/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	let visited = Array(str2.length).fill(false); //We need a visited array because strings may have repeated characters
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();

	for (let i = 0; i < str1.length; i++) {
		let flag = false;

		//Checking if str1[i] is present in str2
		for (let j = 0; j < str2.length; j++) {
			if (visited[j] === true) {
				continue;
			} else if (str1[i] === str2[j]) {
				visited[j] = true;
				flag = true;
				break;
			}
		}
		if (flag === false) return false;
	}

	/*
		Simplest approach : 
		str1 = str1.toLowerCase.sort();
		str2 = str2.toLowerCase.sort();
		return str1 === str2;
	*/
	return true;
}

module.exports = isAnagram;
