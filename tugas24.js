function panggilSort(){
	var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
	console.log('Sebelumnya :', angka.join(", "));
	
	var angka2 = angka.sort();
	console.log('Ascending :', angka2.join(", "));

	var angka3 = angka2.reverse();
	console.log('Descending :', angka3.join(", "));	
}

panggilSort();



// C:\Users\USER\Documents\JS\javascript>node tugas24.js
// Sebelumnya : 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66
// Ascending : 1, 11, 16, 2, 32, 33, 40, 44, 66, 7, 9
// Descending : 9, 7, 66, 44, 40, 33, 32, 2, 16, 11, 1