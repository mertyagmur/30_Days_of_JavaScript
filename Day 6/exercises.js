const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
////////////// LEVEL 1

// 1
console.log("For loop 0 to 10")
for(let i = 0; i<=10; i++) {
    console.log(i)
}

console.log("While loop 0 to 10")
let i = 0
while (i<=10) {
    console.log(i)
    i++
}

console.log("Do while loop 0 to 10")
let j = 0
do {
    console.log(j)
    j++
} while (j<=10) 

// 2
console.log("For loop 10 to 0")
for(let k = 10; k>=0; k--) {
    console.log(k)
}

console.log("While loop 10 to 0")
let l = 10
while (l>=0) {
    console.log(l)
    l--
}

console.log("Do while loop 10 to 0")
let m = 10
do {
    console.log(m)
    m--
} while (m>=0) 

// 3
console.log("For loop 0 to n")
let n = 5
for (let i = 0; i<=n; i++) {
    console.log(i)
}

// 4
for (let i = 1; i<=7; i++) {
    console.log("#".repeat(i) + "\n")
}

// 5
for (let i = 0; i<=10; i++) {
    console.log(`${i} x ${i} = ${i*i}`)
}

// 6
console.log("i\ti^2\ti^3")
for (let i=0; i<=10; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`)
}

// 7
console.log("Use for loop to iterate from 0 to 100 and print only even numbers")
for (let i=0; i<=100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 8
console.log("Use for loop to iterate from 0 to 100 and print only odd numbers")
for (let i=0; i<=100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// 9 
console.log("Use for loop to iterate from 0 to 100 and print only prime numbers")
for (let i=0; i<=100; i++) {
    for (let j=0; j<=100; j++){
        if (j!=i && j!=1 && i%j==0) {
            break
        } else if (j == 100) {
            console.log(i)
        }
    }
}

// 10
let sum = 0
for (let i=0; i<=100; i++) {
    sum+=i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11
let sumEvens = 0
let sumOdds = 0
for (let i=0; i<=100; i++) {
    if (i % 2 == 0){
        sumEvens += i
    } else {
        sumOdds += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}.`)
console.log(`The sum of all odds from 0 to 100 is ${sumOdds}.`)

// 12
console.log([sumEvens, sumOdds])

// 13
let randomArr = []
for (let i=0; i<5; i++) {
    randomArr.push(Math.round(Math.random() * 100))
}
console.log(randomArr)

// 14
let randomArr2 = []
for (let i=0; i<5; i++) {
    let randomNum = Math.round(Math.random() * 100)
    if (!randomArr2.includes(randomNum))
    randomArr2.push(randomNum)
}
console.log(randomArr2)

// 15
let randomId = ""
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i=0; i<=5; i++) {
    let randIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1)) + 0
    randomId = randomId.concat(characters[randIndex])
}
console.log(randomId)

//////////////// LEVEL 2

// 1
let length = 16
let randomId2 = ""
const characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i=0; i<=length; i++) {
    let randIndex = Math.floor(Math.random() * ((characters2.length - 1) - 0 + 1)) + 0
    randomId2 = randomId2.concat(characters2[randIndex])
}
console.log(randomId2)

// 2
let randNum = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000
console.log(randNum.toString(16))

// 3 ez

// 4
let countriesUpper = []
for (country of countries) {
    countriesUpper.push(country.toUpperCase())
}
console.log(countriesUpper)

// 5
let countriesLength = []
for (country of countries) {
    countriesLength.push(country.length)
}
console.log(countriesLength)

// 6
let countriesArr = []
for (country of countries) {
    countriesArr.push([country, country.slice(0, 3).toUpperCase(), country.length])
}
console.log(countriesArr)

// 7
let countriesWithLand = []
for (country of countries) {
    if (country.includes("land")) {
        countriesWithLand.push(country)
    }
    
}
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand)
} else {
    console.log("All these countries are without land")
}

// 8
let countriesThatEndWithIa = []
for (country of countries) {
    if (country.endsWith("ia")) {
        countriesThatEndWithIa.push(country)
    }
    
}
if (countriesThatEndWithIa.length > 0) {
    console.log(countriesThatEndWithIa)
} else {
    console.log("These are countries ends without ia")
}

// 9
let longestNameCountry = ""
for (country of countries) {
    if (country.length > longestNameCountry.length) {
        longestNameCountry = country
    }
}
console.log(longestNameCountry)

// 10
let countriesWithFiveChars = []
for (country of countries) {
    if (country.length == 5) {
        countriesWithFiveChars.push(country)
    }
}
console.log(countriesWithFiveChars)

// 11
let longestWebTech= ""
for (webTech of webTechs) {
    if (webTech.length > longestWebTech.length) {
        longestWebTech = webTech
    }
}
console.log(longestWebTech)

// 12
let webTechCharCounts = []
for (webTech of webTechs) {
    webTechCharCounts.push([webTech, webTech.length])
}
console.log(webTechCharCounts)

// 13
let acronymMern = ""
for (webTech of mernStack) {
    acronymMern = acronymMern.concat(webTech[0])
}
console.log(acronymMern)

// 14
for (webTech of webTechs) [
    console.log(webTech)
]

// 15
let fruitArr = ['banana', 'orange', 'mango', 'lemon'] 
let reversed = []
for (fruit of fruitArr) {
    reversed.unshift(fruit)
}
console.log(reversed)

// 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for (arr of fullStack) {
    for (webTech of arr) {
        console.log(webTech.toUpperCase())
    }
}

////////////////// LEVEL 3

// 1
let countriesCopy = []
for (country of countries) {
    countriesCopy.push(country)
}
console.log(countriesCopy)

// 2
let sortedCountries = countriesCopy.sort()
console.log(sortedCountries)

// 3 ez

// 4 ez

// 5 ez

// 6 ez

// 7 ez

// 8 ez

// 9 ez