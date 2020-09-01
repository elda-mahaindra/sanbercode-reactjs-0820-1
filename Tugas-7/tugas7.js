// ---------------------------------------------- soal 1
// release 0

class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}

const sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// release 1
class Frog extends Animal {
  jump() {
    console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name);

    this._legs = 2;
  }

  yell() {
    console.log("Auooo");
  }
}

const sungokong = new Ape("kera sakti");
sungokong.yell();

const kodok = new Frog("buduk");
kodok.jump();

// ---------------------------------------------- soal 2
class Clock {
  constructor(config) {
    this.template = config.template;
    this.timer = 0;
  }

  render = () => {
    const date = new Date();

    let hours = date.getHours().toString();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes().toString();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds().toString();
    if (secs < 10) secs = "0" + secs;

    const output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

const clock = new Clock({ template: "h:m:s" });
clock.start();
