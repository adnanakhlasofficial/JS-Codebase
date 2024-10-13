/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

// destructing array
const [nums1, num2, num3, nums4, nums8] = numbers; 
const [, , , num4, , , , num8] = numbers; 


// console.log(num1);
// console.log(num2);
console.log(num4);
console.log(num8);
 */


const person = {
    name: "Jhakar",
    age: "jani na",
    profession: "software engineer",
    favActress: "Alia Bhat"
}

const {age, profession : kiKoro, name, favActress} = person;

console.log(age);
// console.log(profession);
console.log(kiKoro);
console.log(name);
console.log(favActress);
