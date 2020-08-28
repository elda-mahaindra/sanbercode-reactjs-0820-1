// ---------------------------------------------- soal 1
function halo() {
  return "Halo Sanbers!";
}

console.log(halo());

// ---------------------------------------------- soal 2
function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

// ---------------------------------------------- soal 3
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age.toString() +
    " tahun, alamat saya di " +
    address.toLowerCase() +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// ---------------------------------------------- soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};

// ---------------------------------------------- soal 5
var dataBuah = [
  {
    nama: "strawberry",
    warna: "merah",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

console.log(dataBuah[0]);

// ---------------------------------------------- soal 6
var dataFilm = [];

function tambahFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama,
    durasi,
    genre,
    tahun,
  });
}
