const numbers = [54, 976, 235, 87, 51, 63, 7, 632, 932, 1234];

/* 
// Push method
numbers.push(11)
numbers.push(12)
numbers.push(13)
 */

/* 
// Pop method
const popOut = numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
 */

/* 
// Shift means out
const shiftOut = numbers.shift();
numbers.shift();
numbers.shift();
 */

/* 
// Unshift
numbers.unshift(56);
numbers.unshift(72);
 */

/* 
// Slice
const newArray = numbers.slice(0, 5);
*/

/* 
// Splice
numbers.splice(0, 4)
*/

// const newArray = numbers.slice(0, 5);

// numbers.splice(0, 4)


// const newArray = numbers.splice(0, 4)

/* 
numbers.includes(5); // output: true
numbers.includes(11); // output: false
 */

/* 
const joinArr = numbers.join("-");// convert array to string.
 */


/* 

const friends = ["Shakil", "Rifat", "Anupom", "Tusher"];
const joinFrnd = friends.join(", ");
console.log(joinFrnd);
*/

// console.log(numbers.indexOf(51)); // check index value;

// console.log(numbers.reverse()); 

const friends = ["Shakil", "Rifat", "Anupom", "Tusher"];
// console.log(friends.sort().reverse());

// console.log(numbers.sort((a, b) =>{
//     return b-a;
// }
// ));

const person = {
    name: "Rakib",
    age: 30,
}

const car = ["BMW", "Rolls Royece", "Ferari", "Lamborgini"]

console.log(friends.concat(numbers));
console.log(friends.join(" * "));