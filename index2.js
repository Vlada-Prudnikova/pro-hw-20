class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
let person1 = new Person("Julia", "female");

console.log(person1);

class Apartment extends Person {
  array = [];
  adder(livingPerson) {
    this.array.push(livingPerson);
  }
}
let flat = new Apartment();
flat.adder("Kate");
console.log(flat.adder);

class House {
  apartmentsInHouse = [];

  constructor(maxApartments) {
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartmentsInHouse.length < this.maxApartments) {
      this.apartmentsInHouse.push(apartment);
    } else {
      console.log("too many apartments");
    }
  }
}
const house1 = new House(6);

house1.addApartment(flat);

let flat1 = new Apartment();
flat1.adder("jerry");
house1.addApartment(flat1);

console.log(house1);
