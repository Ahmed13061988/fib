const arr = ["Ahmed", "Ali", "Hussein"];

arr.forEach((name) => console.log(name));

const splitted = arr.map((name) => name.split());

const sliced = arr.slice(0, 1);
console.log(sliced);

arr.splice(3, 0, "Alubaidi");

console.log(arr);
