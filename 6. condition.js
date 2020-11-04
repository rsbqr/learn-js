/* #6 Pengkondisian
(if, switch)
*/

//pengunaan if dengan else
console.log("======== 1.if dengan else =======");
nama = "Cena"; //ini variabelnya
    if (nama == "John") // ketika variabel nama sesuai dengan kondisi ini
    {
        //jika sesuai maka ini yang akan ditampilkan
        console.log("Hello John, berapa umurmu?");
    }
    else if (nama=="Jon")
    {
        //jika tidak sesuai dengan semua kondisi, maka yang ini yang tampil
        console.log("Hello Jon, berapa umurmu?");
    } else
    {
    //jika tidak sesuai dengan semua kondisi, maka yang ini yang tampil
    console.log("wah siapa ini?");
    }

//penggunaan if tanpa else if dan else
console.log("======== 2. if tanpa else if dan else =========");
var umurKu = 18;
    if (umurKu == 18)
    {
    //ini yang akan ditampilkan jika sesuai dengan kondisi. ketika tidak sesuai, tidak ada yg ditampilkan
    console.log("Umurku 18 tahun bro");
    }

//penggunaan if sebagai perbandingan
console.log("======= 3. if sebagai perbandingan ========");
var nilaiA = 95, nilaiB = 95;
    if(nilaiA > nilaiB) {
        console.log("Nilai A lebih besar dari Nilai B");
    }
    else if (nilaiB > nilaiA) {
        console.log("Nilai B lebih besar dari Nilai A");
    }
    else {
        console.log("Nilai sama besar")
    }

//penggunaan if sebagai perbandingan
console.log("======= 4. if sebagai perbandingan dgn operator && ========");
var a = 1, b = 9, c = 3; //variabelnya
    //kondisi yang diinginkan dan ketika pakai operator && (AND) harus terpenuhi semua
    if (a < b && c > b) {
        console.log("nilai a lebih kecil dari b dan nilai c lebih besar dari b")
    }else{
        console.log("kondisi tidak ada benar")
    }

//penggunaan if sebagai perbandingan
console.log("======= 5. if sebagai perbandingan dgn operator || ========");
    //kondisi yang diinginkan dan ketika pakai operator || (OR) boleh terpenuhi salah satunya
    if (a < b || c > b) {
        console.log("nilai a lebih kecil dari b dan nilai c lebih besar dari b")
    }else{
        console.log("kondisi tidak ada benar")
    }

//penggunaan switch
console.log("======= 5. switch ========");
var kelasKu = "SSSR";
switch(kelasKu){
    //kondisi ketika variabel kelasKu SSR atau SR
    case "SSR":
    case "SR":
        console.log("wow kelas yang luar biasa"); //maka akan tampil seperti ini
        break; //diakhiri sebagai tanda case berakhir
        case "A":
        console.log("kelas yang cukup bagus");
        break;
    case "R":
        console.log("bersyukur aja bro")
        break;
    //kondisi jika variabel kelasKu diluar dari semua kondisi
    default:
        console.log("kelas tidak terdaftar tuh!!")
}
console.log("======= tambahan ========");
console.log("1" == 1); // hasilnya true karena == hanya melihat kontennya saja tidak sampai tipe datanya
console.log("1" === 1); // hasilnya false karena pakai === harus satu tipe data
