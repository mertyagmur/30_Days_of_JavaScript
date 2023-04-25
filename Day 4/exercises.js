// Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' 
// but if not 18 give another feedback stating to wait for the number of years 
// he needs to turn 18.
/* let userAge = parseInt(prompt("Enter your age: "))
if (userAge >= 18) {
    alert("You are old enough to drive")
} else {
    alert(`You are left with ${18-userAge} years to drive`)
}
 */

// Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older 
// (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* let userAge = parseInt(prompt("Enter your age: "))
let myAge = 24
if (myAge > userAge) {
    alert(`I am ${myAge - userAge} years older than you`)
} else {
    alert(`You ara ${userAge - myAge} years older than me`)
} */

// If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways

let a = 4
let b = 3

if (a > b) {
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
}

a > b
    ? console.log("a is greater than b")
    : console.log("a is less than b")
