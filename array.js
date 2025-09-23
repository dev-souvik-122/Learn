const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers);
for (const item of ["a", "b", "c"]) console.log(item);
numbers.forEach((element) => {
  console.log(element);
});
const filteredArray = console.log(numbers.filter((value) => value >= 3));
const newMappedArray = console.log(numbers.map((value) => value * 2));
const initialValue = 10;
const reducedArray = numbers.reduce(function (acc, curr) {
  console.log(`acc - ${acc} curr - ${curr}`);
  return acc + curr;
}, initialValue); //0 is the initial value(acc used it). used first time only.
console.log(reducedArray);

// EX-
const courses = [
  {
    itemName: "Web Dev",
    price: 2999,
  },
  {
    itemName: "static Dev",
    price: 299,
  },
  {
    itemName: "back Dev",
    price: 2979,
  },
  {
    itemName: "front Dev",
    price: 2969,
  },
  {
    itemName: "mob Dev",
    price: 29977,
  },
  {
    itemName: "api Dev",
    price: 299,
  },
  {
    itemName: "app Dev",
    price: 2997,
  },
];

const total = courses.reduce((acc, item) => acc+ item.price, 0);
console.log(total);
