/*#11 callback
akan berfungsi ketika ada fungsi yang tidak harus berjalan sinkron (asynchronous), jika sinkron maka fungsi saling berkaitan satu sama lain dan saling menunggu nilai
*/
var callback = function() {
    console.log("Done!, ini muncul setelah 1 menit");
}
setTimeout(callback, 60000); //parameter nya itu (fungsi dan milidetik)
console.log("ini tanpa delay");