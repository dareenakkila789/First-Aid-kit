const timeconvert =(num)=> {
	
	console.log(Math.floor(num/60) + ":" + num%60);
	
};
const wordsplit = (word) => {
	return word.split('a').length-1;
}

console.log(wordsplit('dareen'));

