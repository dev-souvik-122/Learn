// Make the object constant
// (the reference can't be changed)
const obj = Object.freeze({
  name: "Souvik",
  "full name": "Souvik Das",
  age: 21,
  location: "West Bengal",
  isLogedIn: false,
  lastLogInDays: ["Monday", "Tuesday", "Wednesday"],
  10: "This is number 10",
});

// Now these are the correct ways to access:
// console.log(obj.name);          // ✅ works with dot, prints "Souvik"
// console.log(obj["full name"]);  // ✅ works with bracket, prints "Souvik Das"
// console.log(obj["10"]);         // ✅ works with bracket, prints "This is number 10"

// These would all throw or fail:
// obj.name = "Deepanwita";    // ❌ silently fails (frozen object)
// obj.full name              // ❌ syntax error
// obj.10                     // ❌ syntax error

const obj2 = {
  name: "Souvik Das",
  family: {
    parents: {
      father: "Raj Kumar Das",
      mother: "Sujata Das",
    },
  },
};
//Optional Chaining ?.
// console.log(obj2?.name);
// console.log(obj2?.family?.parents?.father); //Raj Kumar Das
// console.log(obj2?.family?.parents?.brother); // undefined (no error thrown)

// Nullish Coalescing ??
// const input1 = null ?? "The default value is null"
// const input2 = 1 ?? "This is not null"
// console.log(input1);
// console.log(input2);

//Sprade Operator used to make shallow copy of object and arrays and marging them.

// Syntax-> ...iterable // (array, string, object, etc.)

const obj3 = { ...obj, ...obj2 };
console.log(obj3);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(typeof(Object));

