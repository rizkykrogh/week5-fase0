/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.

RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()

*/

//Tulislah Pseudocode disini

function subset(arr1,arr2) {
    arr1 = []
    arr2 = []
 //tulis function disini
 for(i = 0; i < arr1.length; i++)
    for(j = 0; j < i; j++)
 for(i = 0; i < arr2.length; i++)
    for(j = 0; j < i; j++)
    if (arr2.length[i][j] = arr2.length[i][j])
}

console.log(subset([3,9,5],[1, 3, 9, 5, 8, 44])); //true
console.log(subset([1,3], [1,3,5,7,8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false