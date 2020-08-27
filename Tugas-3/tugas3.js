// ---------------------------------------------- soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// console.log(
//   `${kataPertama} ${kataKedua[0].toUpperCase()}${kataKedua.slice(
//     1
//   )} ${kataKetiga} ${kataKeempat.toUpperCase()}`
// ); // expected output: saya Senang belajar JAVASCRIPT

console.log(
  kataPertama,
  kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1),
  kataKetiga,
  kataKeempat.toUpperCase()
); // expected output: saya Senang belajar JAVASCRIPT

// ---------------------------------------------- soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// var total = [kataPertama, kataKedua, kataKetiga, kataKeempat].reduce(
//   (total, str) => total + parseInt(str),
//   0
// );

var kataPertama_int = parseInt(kataPertama);
var kataKedua_int = parseInt(kataKedua);
var kataKetiga_int = parseInt(kataKetiga);
var kataKeempat_int = parseInt(kataKeempat);

var total = kataPertama_int + kataKedua_int + kataKetiga_int + kataKeempat_int;

console.log(total); // expected output: 12

// ---------------------------------------------- soal 3
var kalimat = "wah javascript itu keren sekali";

// var kataPertama = kalimat.substring(0, 3);
// var kataKedua = kalimat.split(" ")[1];
// var kataKetiga = kalimat.split(" ")[2];
// var kataKeempat = kalimat.split(" ")[3];
// var kataKelima = kalimat.split(" ")[4];

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25, 6);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// ---------------------------------------------- soal 4
var nilai;

nilai = 75;

if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("D");
} else {
  console.log("E");
}

// ---------------------------------------------- soal 5
var tanggal = 30;
var bulan = 4;
var tahun = 1990;
var bulan_str;

switch (bulan) {
  case 1:
    bulan_str = "Januari";
    break;
  case 2: {
    bulan_str = "Februari";
    break;
  }
  case 3: {
    bulan_str = "Maret";
    break;
  }
  case 4: {
    bulan_str = "April";
    break;
  }
  case 5: {
    bulan_str = "Mei";
    break;
  }
  case 6: {
    bulan_str = "Juni";
    break;
  }
  case 7: {
    bulan_str = "Juli";
    break;
  }
  case 8: {
    bulan_str = "Agustus";
    break;
  }
  case 9: {
    bulan_str = "September";
    break;
  }
  case 10: {
    bulan_str = "Oktober";
    break;
  }
  case 11: {
    bulan_str = "November";
    break;
  }
  case 12: {
    bulan_str = "Desember";
    break;
  }
  default: {
    console.log("no match found.");
  }
}

console.log(tanggal.toString(), bulan_str, tahun.toString()); // expected output: 30 April 1990
