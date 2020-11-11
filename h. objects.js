/*#8 objects
javascript menggunakan untuk berorientasi objek menggunakan fungsi dan objek, 
objek biasanya digunakan sebagai struktur data
*/

//ini fungsi dengan objek
var objekOrang = {
    namaDepan : "John", //objek 1
    namaBelakang : "Cena" //objek 2
}

//objek tambahan
objekOrang.usia = 21 ; //khusus untuk data yg sederhana (objek 3)
objekOrang["gaji"] = 8000000; //seperti array namun data akan berupa string walaupun isi data angka (objek 4)

//eksekusi dengan looping dan condition
for (var anggota in objekOrang) //membuat variabel anggota kedalam objekOrang
{
    if(objekOrang.hasOwnProperty(anggota))//semua objek dimasukan ke variabel anggota dan kondisi looping sesuai objek yg ada di objekOrang 
    {
        //yang ditampilkan 
        console.log("anggota dengan objek"+anggota+" dari fungsi objekOrang adalah "+objekOrang[anggota])
    }
}
