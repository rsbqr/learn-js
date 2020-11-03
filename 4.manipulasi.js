/* #4 Manipulasi
(Push, Pop, Shift, Unshift, Slice) */

//1. push
var myStack = [];   //array dengan data kosong dengan konsep tumpukan (stack)
myStack.push(1);    //data dimasukan dan dimulai dari indeks 0 (head)
myStack.push(2);    //data dimasukan dan diurutkan setelah data sebelumnya
myStack.push(3);    //data dimasukan dan diurutkan setelah data sebelumnya
console.log(myStack+" <- data array myStack (before)"); //cek isi array setelah di masukan beberapa data
console.log("ini data dari indeks kedua : "+myStack[2]);  //cek indeks array ke 2 dan outputnya 3
console.log("==================================\n");
//2. pop
console.log(myStack.pop()+" <- data yang dihapus (pop)"); // menghapus data array indeks terakhir (tail) dan ditampilkan pada terminal
console.log(myStack+" <- data array myStack (after)"); //cek isi data array setelah dihapu maka outputnya 1, 2
myStack.pop(); //pakai array sama dan menghapus data tanpa ditampilkan di terminal
console.log(myStack+" <- hasil dari pop yang ditampilkan"); //cek isi data array setelah dihapus maka outputnya 1
console.log("==================================\n");
//3. shift
var myQueue = []; //array dengan data kosong dengan konsep antrian (queue)
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue+" <- data array myQueue (before)"); //data array queue (antrian)
console.log(myQueue.shift()+" <- data yang dikeluarkan");//mengeluarkan data pada indeks awal (head) dengan menampilkan di terminal
myQueue.shift(); //hapus data pada indeks awal (head) tanpa menampilkan di terminal
console.log(myQueue+" <- data array myQueue (after)");
console.log("==================================\n");
//4. unshift
myQueue.unshift(0) //menambahkan data di indeks awal
console.log(myQueue+" <- data myQueue setelah ditambahkan lagi")
console.log("==================================\n");
//5. slice
arrayBaru = [0,1,2,3,4,5]; //membuat variabel array baru
console.log(arrayBaru) //data array sebelum splice
var potong = arrayBaru.splice(0,2) //variabel untuk memotong (splice) data pada array.
//0 sebagai awal potong
//2 sebagai batas potong

console.log(potong); //data yang dipotong (splice)
console.log(arrayBaru); //data array setelah splice

/* note
1. push untuk tambah data array diakhir indeks
2. pop untuk hapus data array diakhir indeks
3. shift untuk hapus data array diawal indeks
4. unshift untuk tambah data array diawal indeks
5. splice untuk memotong data sesuai yang di inginkan
*/
