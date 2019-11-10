chunkArray = (arr, size) => {
	var myArray = [];
	for (var i = 0; i < arr.length; i += size) {
		myArray.push(arr.slice(i, i + size));
	}
	return myArray;
};

data = [
	{ a: 1, b: 1 },
	{ a: 2, b: 2 },
	{ a: 3, b: 3 },
	{ a: 4, b: 4 },
	{ a: 5, b: 5 },
	{ a: 6, b: 6 },
	{ a: 7, b: 7 },
	{ a: 8, b: 8 },
	{ a: 9, b: 9 },
	{ a: 10, b: 10 },
	{ a: 11, b: 11 },
	{ a: 12, b: 12 }
];

let dataArrayToChunk = chunkArray(data, 4);
