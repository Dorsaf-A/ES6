let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

// function getAge(pet) {
//   return new Date().getFullYear() - pet.bornOn;
// }

let getAge = (pet) => {return new Date().getFullYear() - pet.bornOn};

var petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
petsWithAge = pets.map((a) => {a = {...a, age : getAge(a)}})
console.log(petsWithAge);

let dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
dogs = pets.filter((a) => a.type === "dog")
console.log(dogs);

let jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }

jasper = pets.find(a => a.name === "Jasper")
console.log(`Jasper is ${jasper} years old`);
