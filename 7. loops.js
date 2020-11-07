/* #7 loops
for , while
*/
console.log("looping 1");
var a;
// parameter ada 3, pertama sebagai awal, kedua sebagai batas dan ketiga sebagai polanya
for (a = 0; a < 3; a = a + 1)
{
    //menampilkan hasil looping
    console.log(a);
}

console.log("looping 2");
var arrayKu = ["A", "B", "C"];
//sama seperti parameter looping yg ke 1 hanya parameter batas menggunakan properti milik array
for (var i = 0; i < arrayKu.length; i++)
{
    console.log("Data dari arrayKu pada indeks " + i + " adalah " + arrayKu[i]);
}

console.log("looping 3");
var i = 4;
while (i >= 0) //kondisi harus sesuai agar looping berjalan dan batas looping itu 0
{
    console.log(i + " botol minum tersisa disana");
    i -= 1; //pola looping yang (-1) setiap looping
}

console.log("looping 4");
var i = 4;
while (i >= 0) //kondisi harus sesuai agar looping berjalan dan batas looping itu 0
{
    console.log(i + " botol minum tersisa disana");
    i -= 1; //pola looping yang (-1) setiap looping
    //walaupun kondisi looping sesuai (true) namun bisa di interupsi
        if (i == 2){ //ini interupsinya sehingga looping berhenti ketika sudah mencapai 2
        break;
    }
}

console.log("looping 5");
for (var g = 0; g < 10; g++)
{
//cek angka bilangan genap atau tidak
    if(g % 2 ==0){
        continue;
    }
    console.log(g+" bilangan ganjil")
}
