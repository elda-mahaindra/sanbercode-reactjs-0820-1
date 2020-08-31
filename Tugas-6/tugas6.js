// ---------------------------------------------- soal 1
const luasLingkaran = (r) => Math.PI * Math.pow(r, 2);

const kelilingLingkaran = (r) => 2 * Math.PI * r;

// ---------------------------------------------- soal 2
let kalimat = "";

const tambahKata = (kataBaru) => {
  kalimat = kalimat ? `${kalimat} ${kataBaru}` : kataBaru;
};

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);

// ---------------------------------------------- soal 3
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: () => console.log(firstName, lastName),
});

newFunction("William", "Imoh").fullName();

// ---------------------------------------------- soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation } = newObject;

console.log(firstName, lastName, destination, occupation);

// ---------------------------------------------- soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);
