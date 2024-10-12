const year = 2052;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

const marks = "100" ; 

// isNaN means Not a Number;
if (marks > 100 || marks < 0 || isNaN(marks)) {
    console.log("Faltu jinish dewa bondho koro.");
} else if (marks >= 80 ) {
    console.log("A+");
} else if(marks >= 60 && marks <= 79) {
    console.log("A");
} else if (marks >= 50 && marks <= 59) {
    console.log("B");
} else if (marks >= 40 && marks <= 49) {
    console.log("C");
} else {
    console.log("Fail");
}