/*
#3 Array
berguna untuk membuat variabel dalam objek Array
bahkan variabel array bisa menambung data yang berbeda tipe.
Perlu diingat bahwa isi pada array (indeks) dimulai dari nol bukan satu
*/

//deklarasi
var arrayKu = ['Raihan', 'Sabiq' , 'Rabbani'];      // cara 1 dengan variabel array dengan tipe huruf (string)
var arrayBaru = new Array('Tes', 123 , {}, true);   // cara 2 dengan variabel array dengan berbagai tipe
var arrayKosong = []

// eksekusi variabel
console.log("ini array pertama : "+arrayKu+"\n"+"ini array kedua : "+arrayBaru);  // outputnya data dari array
console.log(arrayKu[0]);        // outputnya isi dari array yang indeks 0 di arrayKu
console.log(arrayBaru[2]);      // outputnya objek kosong yang ada di indeks 2 di arrayBaru
console.log(arrayKosong);       // outputnya isi dari array kosong

// buat deklarasi variabel kosong tadi dengan isi
arrayKosong[1] = "ini isi indeks satu pada array kosong"
console.log(arrayKosong); //outputnya dari array kosong

/*
Note
1. \n untuk outputnya dibuat baris baru antar variabel
2. + untuk mengeksekusi 2 variabel
3. "" untuk jarak antar 2 variabel jika tidak pakai \n
*/
