/*#9 function
Dalam JavaScript, function (fungsi) : fitur
penting dari program, dan fungsi dapat mengakses 
variabel lokal dari fungsi induk (closure).
*/

//fungsi temen dengan parameter nama (cara 1)
function temen (nama){
    //ketika fungsi di jalankan akan menampilkan ini
    return "nama temanku " +nama;
}
//parameternya dimasukin langsung didalam fungi temen
console.log(temen("Jomblo")); 

//fungsi tanpa nama (anonim) dengan parameter name (cara 2)
var salam = function(name) //namun fungsi diakses dengan variabel
{
    return "Halo " + name;
}
/*hampir sama dengan yg diatas namun 
nama variabelnya dipakai untuk panggil parameternya*/
console.log(salam("Mblo"));

//latihan
console.log("\n latihan")
function dikaliLima(angka){
    return angka * 5
}
console.log("ini hasilnya "+dikaliLima(3));
