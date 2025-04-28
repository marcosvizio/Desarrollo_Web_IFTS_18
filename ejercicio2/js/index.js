class Humano {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let human1 = new Humano("Brisa", 20)
console.log(human1.greet())
console.log(human1.age)

