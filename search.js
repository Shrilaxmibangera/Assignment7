function sLargest(arr) {
			const arrSort = arr.sort((a, b) => a - b);
			return arrSort[arr.length - 2];
		}
		var arr = [1, 5, 4, 9, 8];
		console.log(sLargest(arr));