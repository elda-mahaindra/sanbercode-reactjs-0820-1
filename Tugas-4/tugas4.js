// ---------------------------------------------- soal 1
var min = 0;
var max = 20;
var index = 0;

while (index <= max) {
  if (index <= min) {
    console.log("LOOPING PERTAMA");
  } else {
    console.log(index.toString(), " - I Love Coding");
  }

  index += 2;
}

while (index > min) {
  if (index > max) {
    console.log("LOOPING KEDUA");
  } else {
    console.log(index.toString(), " - I will become a frontend developer");
  }
  index -= 2;
}

// ---------------------------------------------- soal 2
for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i, " - I Love Coding");
  } else if (i % 2 !== 0) {
    console.log(i, " - Santai");
  } else {
    console.log(i, " - Berkualitas");
  }
}

// ---------------------------------------------- soal 3
var dimensi = 7;
var str = "#".repeat(dimensi);

for (let i = 0; i < dimensi; i++) {
  console.log(str.substring(0, i + 1));
}

// ---------------------------------------------- soal 4
var kalimat = "saya sangat senang belajar javascript";

console.log(kalimat.split(" "));

// ---------------------------------------------- soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

for (var i = 0; i < daftarBuah.length; i++) {
  console.log(daftarBuah.sort()[i]);
}
