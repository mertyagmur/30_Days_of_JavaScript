//////// LEVEL 1

// 1
const emptyArr = []

// 2
const arrayTwo = [1, 2, 3, 4, 5, 6, 7]

// 3
let arrayTwoLength = arrayTwo.length
console.log(arrayTwoLength)

// 4
let arrayTwoFirst = arrayTwo[0]
let arrayTwoMiddle = arrayTwo.length % 2 === 0
    ? arrayTwo.slice((arrayTwo.length / 2) - 1, (arrayTwo.length / 2) + 1)
    : arrayTwo[Math.round(arrayTwo.length / 2) - 1]

let arrayTwoLast = arrayTwo[arrayTwo.length - 1]
console.log(`First: ${arrayTwoFirst}\nMiddle: ${arrayTwoMiddle}\nLast: ${arrayTwoLast}`)

// 5
const mixedDataTypes = [1, "aaa", true, null, undefined, {1: "a"}]
console.log(mixedDataTypes.length)

// 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7
console.log(itCompanies)

// 8 
console.log(itCompanies.length)

// 9 
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[Math.round(itCompanies.length / 2) - 1]
let lastCompany = itCompanies[itCompanies.length - 1]
console.log(`First: ${firstCompany}\nMiddle: ${middleCompany}\nLast: ${lastCompany}`)

// 10
console.log(itCompanies.join(" "))

// 11
const itCompaniesUppercase = itCompanies.join(" ").toUpperCase().split(" ")
console.log(itCompaniesUppercase)

// 12
let itCompaniesSentence = `${itCompanies.slice(0, 6).join(", ")}, \
and ${itCompanies[itCompanies.length - 1]} \
are big IT companies.`
console.log(itCompaniesSentence)

// 13
let company = "Amazon"
let hasCompany = itCompanies.includes(company)
console.log(
    hasCompany
    ? company
    : "company is not found"
)

// 14 ??

// 15
//console.log(itCompanies.sort())

// 16
//console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0, 3))

// 18
console.log(itCompanies.slice(-3, itCompanies.length))

// 19
itCompanies.length % 2 == 0
    ? console.log(itCompanies.slice(itCompanies.length / 2) - 1, (itCompanies.length / 2) + 1)
    : console.log(itCompanies[(Math.round(itCompanies.length / 2)) - 1])

// 20
//itCompanies.shift()
//console.log(itCompanies)

// 21
itCompanies.length % 2 == 0
    ? itCompanies.splice((itCompanies.length / 2) - 1, 2)
    : itCompanies.splice((Math.round(itCompanies.length / 2)) - 1, 1)
console.log(itCompanies)

itCompanies.length % 2 == 0
    ? itCompanies.splice((itCompanies.length / 2) - 1, 2)
    : itCompanies.splice((Math.round(itCompanies.length / 2)) - 1, 1)
console.log(itCompanies)

itCompanies.length % 2 == 0
    ? itCompanies.splice((itCompanies.length / 2) - 1, 2)
    : itCompanies.splice((Math.round(itCompanies.length / 2)) - 1, 1)
console.log(itCompanies)

itCompanies.length % 2 == 0
    ? itCompanies.splice((itCompanies.length / 2) - 1, 2)
    : itCompanies.splice((Math.round(itCompanies.length / 2)) - 1, 1)
console.log(itCompanies)

// 22
// itCompanies.pop()
// console.log(itCompanies)

// 23
// itCompanies.splice(0, itCompanies.length)
// console.log(itCompanies)



//////////// LEVEL 2

// 1
import {countries} from "./countries.js"
import {webTechs} from "./web_techs.js"
console.log(countries)
console.log(webTechs)

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/gi, "")
let words = text.split(" ")
console.log(words)
console.log(words.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(`Original cart: ${shoppingCart}`)
if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
console.log(`Meat added to beginning: ${shoppingCart}`)

if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
console.log(`Sugar added to the end: ${shoppingCart}`)

let isAllergic = true
if (isAllergic) {
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
}
console.log(`Honey removed: ${shoppingCart}`)

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(`Tea -> Green Tea: ${shoppingCart}`)

// 4
if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia")
}

// 5
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess")
} else {
    webTechs.push("Sass")
    console.log(webTechs)
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/////////////// LEVEL 3
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages = ages.sort()
// console.log(`Min: ${Math.min(...ages)}`)
// console.log(`Max: ${Math.max(...ages)}`)

ages.length % 2 == 0
    ? console.log(`Median: ${(ages[(ages.length / 2) - 1] + ages[(ages.length / 2)]) / 2}`)
    : console.log(`Median: ${ages[Math.round(ages.length / 2) - 1]}`)

const average = ages.reduce((a, b) => a + b, 0) / ages.length
console.log(`Average: ${average}`)
console.log(`Range: ${(Math.max(...ages)) - (Math.min(...ages))}`)
