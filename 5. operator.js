/* #5 Operator
(Mathematics, Modul Math)
*/

//variabel
var nama = "Raihan"
var a = 1; //variabel tipe angka
var b = 2;
var c = "3"; //variabel tipe string
var hasil = a+b;
var campur = a+c;

//eksekusi
console.log("hasil penjumlahan a dan b : "+(a+b)); //tanpa variabel hasil
console.log("hasil penjumlahan a dan b : "+hasil); //dengan variabel hasil
console.log("nama : "+nama); //dengan variabel hasil
console.log("hasil dari 2 varibel berbeda : "+campur); //tampilan hasil menjadi 13 karena nilai variabel default itu string
console.log("==================================\n");

// pembagian , pengurangan , perkalian, modulus
console.log(3/3); //pembagian
console.log(3-3); //pengurangan
console.log(3*3); //perkalian
console.log(3%2); //modulus (sisa hasil pembagian yg ditampilkan)
console.log("==================================\n");

// mengoperasikan dengan variabel diri sendiri (cek variabel yg sebelumnya)
a /= 1; // 1 dibagi 1
b += 1; // 2 ditambah 1
console.log(a,b);
console.log("==================================\n");

// Math modul
console.log(Math.random()); //random angka diantara 0 <= c < 1
console.log(Math.pow(3,3)); //hasilnya 27 karena parameter 3 yg dipangkatkan dan parameter 3 sebagai pangkatnya atau parameter menggunakan variabel sebelumnya
