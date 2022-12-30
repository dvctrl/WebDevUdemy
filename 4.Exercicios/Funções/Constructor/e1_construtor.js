class Animal {
    constructor(type, name, sound, age) {
      this.type = type;
      this.name = name;
      this.sound = sound;
      this.age = age;
    }
    makeASound() {
      console.log(`${this.name} says: ${this.sound}`);
    }
  }
let cabra = new Animal('capríneo', 'belinha', 'béééé',3)
let pudim = new Animal('felino', 'pudim', 'miiau',3)

cabra.makeASound()