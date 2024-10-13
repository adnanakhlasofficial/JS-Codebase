const person1 = {
    name: "Rakib",
    age: 20, 
    profession: "developer",
    "class-college" : 12
};

const person2 = {
    name: "Laju",
    age: 30, 
    profession: "developer"
};

// Dot Notation
const person1Name = person1.name;
// const person1Class = person1.class-college;

person2["class"] = 6;

// Bracket Notation
const person2Name = person2["age"];
const person1Class = person1["class-college"];

// console.log(person1Class);
// console.log(person2Name);
console.log(person1);
console.log(person2);

console.log(Object.keys(person2));
console.log(Object.values(person2));
console.log(Object.entries(person2));