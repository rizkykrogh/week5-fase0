/**
===========
Pirate ID
===========


Sebelum memasuki kawasan grand blue, para bajak laut harus melalui sistem administrasi kelautan. 
Sistem ini akan menyaring Bajak Laut yang boleh melewati lautan ini dan membuat ID mereka. 
Di dalam program ini, masing-masing bajak laut akan menginput `nama`, `umur`, serta tempat 
tinggal/ `location` mereka. 
Di dalam soal ini diasumsikan bahwa lokasi hanya ada 4, dan lokasi-lokasi tersebut memiliki kode sebagai berikut: 
LOKASI    KODE LOKASI
-Jakarta  "JKT"
-Bogor    "BGR"
-Depok    "DPK"
-Bekasi   "BKS"

Jika ada seorang bajak laut yang berasal dari tempat lain selain dari 4 tempat tersebut, maka bajak laut tersebut 
tidak boleh melewati laut ini.
Kalian diminta untuk membuat suatu function yang bernama 'filterPirates()'.
Function ini menerima input berupa nama-nama bajak laut yang direpresentasikan dengan suatu `Array-Of-Objects`.
Di dalam function ini, kalian harus menyaring dan membuat ID dari bajak laut yang boleh lewat. 

ID bisa dibuat dengan:
> "2 DIGIT ANGKA TERAKHIR TAHUN KELAHIRAN" + "KODE LOKASI"

Asumsikan bahwa: -Tahun ini adalah tahun 2020

misal bajak laut tahun kelahiran 1987 dan berasal dari bogor akan memiliki ID:
"87-BGR"

Namun, beberapa orang marinir malah menyamar menjadi bajak laut. Kalian juga harus menyaring dan 
menolak orang-orang yang menyamar.
Orang-orang yang menyamar ini memiliki unsur nama yang mengandung "A.", "B.", "C.", "D.", ......., 
"R.", "F.", dll. (Nama yang memiliki
Huruf Kapital satu huruf saja dan titik).

Saring dan buatlah ID untuk para bajak laut yang bisa melewati kawasan Grand Blue, format output yang diharapkan
 adalah suatu array of objects
yang HANYA BERISI bajak laut yang boleh lewat beserta nama dan ID mereka:
[{name: 'nama bajak laut', ID: 'XX-LOK'},...]

Contoh:
- input: [
    { name: 'Frankie', age: 30, location: 'Jakarta'},
    { name: 'Nami', age: 20, location: 'Bogor' },
    { name: 'Luffy', age: 19, location: 'Bekasi' }]

- output:
   [{name: 'Frankie', ID: '90-JKT'}, {name: 'Nami', ID:'00-BGR'}, {name: 'Luffy', ID: '01-BKS'}]

-input: [
  {name: 'Gol D. Roger', age: 60, location: 'Jakarta'},
  {name: 'Portgas D. Ace', age: 22, location: 'Jakarta'},
  {name: 'Usop Yassop', age: 23, location: 'Payakumbuh' },
  {name: 'Shanks', age: 35, location: 'Bogor'}
]
-output:
[{name: 'Shanks', ID:'85-BGR'}]

RULES:
Dilarang menggunakan built-in function kecuali .push()



*/
function filterPirates (pirates) {
    //implementasi function disini
    name = []
    for(var i = 0; i < name.length; i++);
    if(name [i] !== "A.", "B.", "C.", "D.","R.", "F.",) {
      name.push[i]
    } else
    age = []
    for(var j = 0; j < age; j++);
    var yearsNow = 2020
    var kodeLahir = yearsNow - 1900
    console.log(name.push(kodeLahir - age))
    switch location
    case 'Jakarta':
      console.log('JKT');
      break;
    case 'Bogor':
      console.log('BGR');
      break;
    case 'Depok':
      console.log('DPK');
      break;
    case 'Bekasi':
      console.log('BKS');
      break;
    default:
}
    
  
  console.log(filterPirates([
    { name: 'Frankie', age: 30, location: 'Jakarta'},
    { name: 'Nami', age: 20, location: 'Bogor' },
    { name: 'Luffy', age: 19, location: 'Bekasi' }]))
  /**
   Output:
   [
    { name: 'Frankie', ID: '90-JKT' },
    { name: 'Nami', ID: '00-BGR' },
    { name: 'Luffy', ID: '01-BKS' }
  ]
   */
  
  
  console.log(filterPirates([
    {name: 'Gol D. Roger', age: 60, location: 'Jakarta'},
    {name: 'Portgas D. Ace', age: 22, location: 'Jakarta'},
    {name: 'Usop Yassop', age: 23, location: 'Payakumbuh' },
    {name: 'Shanks', age: 35, location: 'Bogor'}
  ]))
  /**
   Output:
   [{name: 'Shanks', ID:'85-BGR'}]
   */

  console.log(filterPirates([
    {name: 'Monkey D. Luffy', age: 21, location: 'Bekasi'},
    {name: 'Portgas D. Ace', age: 23, location: 'Jakarta'},
    {name: 'Chopper', age: 17, location: 'Thriller Bark'}
  ]))
//Output: []