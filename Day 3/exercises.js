// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Mert"
let lastName = "Yağmur"
let country = "Turkey"
let city = "Istanbul"
let age = 24
let isMarried = false
//let year = 2024

console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)

// Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10)

console.log(4 === "4")

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter base: ")
// let height = prompt("Enter height: ")
// let area = base * height * 1/2
// alert(`The area of the triangle is ${area}`)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//let sideA = parseInt(prompt("Enter side a: "))
//let sideB = parseInt(prompt("Enter side b: "))
//let sideC = parseInt(prompt("Enter side c: "))
//let perimeter = sideA + sideB + sideC
//alert(`The perimeter of the triangle is ${perimeter}`)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//let length = parseInt(prompt("Enter length: "))
//let width = parseInt(prompt("Enter width: "))
//alert(`Area of the rectangle is ${length*width}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//let radius = parseInt(prompt("Enter radius: "))
//const PI = 3.14
//alert(`Area: ${radius**2 * PI}`)
//alert(`Circumference: ${radius * 2 * PI}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
//let firstName2 = prompt("Enter name: ")
//let longOrShort = firstName2.length > 7 ? "long" : "short"
//alert(longOrShort)

//Compare your first name length and your family name length and you should get this output.
let isLonger = firstName.length > lastName.length ? "longer" : "shorter"
// alert(`Your first name ${firstName} is ${isLonger} than your family name, ${lastName}`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/* let birthYear = parseInt(prompt("Enter birth year: "))
const now = new Date()
let yearsOld = parseInt(now.getFullYear()) - birthYear
let isOldEnough = yearsOld > 18

isOldEnough
    ? alert(`You are ${yearsOld}. You are old enough to drive`)
    : alert(`You are ${yearsOld}. You will be allowed to drive after ${18 - yearsOld} years`) */

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

let newMonth = month < 10 ?  0 + month.toString() : month
let newHours = hours < 10 ?  0 + hours.toString() : hours
let newMinutes = minutes < 10 ?  0 + minutes.toString() : minutes
console.log(`${date}/${newMonth}/${year} ${newHours}:${newMinutes}`)