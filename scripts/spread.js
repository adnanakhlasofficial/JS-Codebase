/* 
const num1 = [1, 2, 3, 4, 5];
console.log(num1);
console.log(...num1); // spread operator

const allNum = [...num1];
console.log(allNum);

allNum[allNum.length] = 6;
console.log(allNum);
// console.log(num1);
 */



const person = {
    name: "Adnan", 
    age: 16,
    profession: "student"
}


const person1 = {...person}
console.log(person1);


person1["class"] = 6;