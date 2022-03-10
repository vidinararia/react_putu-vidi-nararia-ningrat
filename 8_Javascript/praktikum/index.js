var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "Perkenalkan nama saya" +
        nama +
        "nomor urut" +
        a +
        "sekarang sedang mengikuti" +
        b +
        "berasal dari" +
        asal
    );
}

terdaftar = true;
if(terdaftar === true) {
    console.log(nama + "Terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
const budi = lengkap_arr.filter((budi2) => budi2 === 'budi');

console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);


//jawaban no.2
//a. dikarenakan pada baris 21, 22, dan 23 terdaftar masih bernilai false dan juga belum ada perubahan dalam code yang membuat nilai terdaftar bernilai true
//b. dikarenakan pada baris 26 ada error pada nama yang merupakan constant jika ingin menjalankan baris 26 maka harus merubah tipe variable nama menjadi let atau var
//c. tidak, dikarenakan pada line 28 terdapat variable yang di assign pada function perkenalan, jadi variable tersebut hanya bisa digunakan disana, dan hal tersebut membuat code line no 29 menjadi tidak berjalan

//jawaban no.3
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(a);
console.log(b);
console.log(c);

//jawaban no.4
let bdays = [`10-17`, `05-19`, `20-19`];
let hasil = bdays.map((item) => item.replace(`-`, `/`));
console.log(hasil);

//jawaban no.5
let value = [1, 2, 3, 4, 5, 6];
let hasil1 = value.map((item) => item * 2);
console.log(hasil1);

//jawaban no.6
let arr = [1.5, 2.56, 5.1, 12.33];
let pembulatan = arr.map((angka) => Math.round(angka));

console.log(pembulatan);