///////// LEVEL 1

// 1
function fullName() {
    console.log("Mert Yağmur")
}
fullName()

// 2
function fullName(firstName, lastName) {
    return firstName + " " + lastName
}
console.log(fullName("Mert", "Yağmur"))

// 3
function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(1, 3))

// 4
function calcAreaOfRectangle(length, width) {
    return length * width
}
console.log(calcAreaOfRectangle(3, 4))

// 5 ez

// 6 ez

// 7 ez

// 8
const circumOfCircle = (r) => 2 * Math.PI * r
console.log(circumOfCircle(3))

// 9
const density = (mass, volume) => mass / volume
console.log(density(10, 2)) 

// 10
const speed = function(distance, time) {
    return distance / time
}
console.log(speed(40, 2))

// 11 ez

// 12 ez

// 13 ez

// 14 ez

// 15
function findMax(num1, num2, num3) {
    let maxNum = num1
    if (num2 > maxNum) {
        maxNum = num2
    }
    if (num3 > maxNum) {
        maxNum = num2
    }
    return maxNum
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

////////////// LEVEL 2

// 1 ez

// 2 ez

// 3
const printArray = (arr) => {
    for (item of arr) {
        console.log(item)
    }
}
printArray(["M", "E", "R", "T"])

// 4
const showDateTime = () => {
    let dt = new Date()
    console.log(`${dt.getDay()}/${dt.getMonth()}/${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`)
}
showDateTime()

// 5
const swapValues = (x, y) => [y, x]

let x = 3
let y  = 4
console.log("----------- Before Swap -------------")
console.log(`x: ${x} y: ${y}`)
const [x1, y1] = swapValues(x, y)
console.log("----------- After Swap -------------")
console.log(`x: ${x1} y: ${y1}`)

// 6
const reverseArray = (arr) => {
    let reversedArr = []
    for (item of arr) {
        reversedArr.unshift(item)
    }
    return reversedArr
}

console.log(reverseArray([1, 2, 3, 4, 5]))

// 7
const capitalizeArray = (arr) => {
    let capitalizedArr = []
    for (item of arr) {
        capitalizedArr.push(item.toUpperCase())
    }
    return capitalizedArr
}

console.log(capitalizeArray(["mert", "yağmur"]))

// 8 ??

// 9 ??

// 10
const sumOfNumbers = (number) => {
    let sum = 0
    for (let i=0; i<=number; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(20))

// 11
const sumOfOdds = (number) => {
    let sum = 0
    for (let i=0; i<=number; i++) {
        if (i % 2 != 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(20))

// 12
const sumOfEvens = (number) => {
    let sum = 0
    for (let i=0; i<=number; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEvens(20))

// 13
const evensAndOdds = (number) => {
    let evens = 0
    let odds = 0
    for (let i=0; i<=number; i++) {
        if (i % 2 == 0) {
            evens += 1
        } else {
            odds += 1
        }
    }
    console.log(`The number of odds is ${odds}`)
    console.log(`The number of evens is ${evens}`)
}

evensAndOdds(100)

// 14
const sumOfArguments = (...arr) => {
    let sum = 0
    for (item of arr) {
        sum += item
    }
    return sum
}
console.log(sumOfArguments(1, 2, 3, 4))

// 15 ez

// 16 ez

// 17 ez

// 18 ez

/////////////// LEVEL 3

// 1
const userIdGeneratedByUser = () => {
    const characters = 'ABCDEFGHIJsKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let numChars = prompt("Enter the number of characters: ")
    let numIds = prompt("Enter the number of Ids to be generated: ")
    
    for (let j=1; j<=numIds; j++) {
        randomId = ""
        for (let i=1; i<=numChars; i++) {
            let randIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1)) + 0
            randomId = randomId.concat(characters[randIndex])
        }
        console.log(randomId)
    }
}
//userIdGeneratedByUser()

// 2
const rgbColorGenerator = () => {
    let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    return `rgb(${rgb.join(",")})`
}
console.log(rgbColorGenerator())

// 3 
const arrayOfHexaColors = (num) => {
    let chars = '0123456789ABCDEF';
    let colors = []
    for (let j=0; j<num; j++) {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += chars[Math.floor(Math.random() * 16)];
        }
        colors.push(color)
    }
    return colors;
}
console.log(arrayOfHexaColors(5))

// 4
const arrayOfRgbColors = (num) => {
    let colors = []
    for (let i=0; i<num; i++) {
        let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
        colors.push(`rgb(${rgb.join(",")})`)
    }
    return colors
}
console.log(arrayOfRgbColors(5))

// 5
const convertHexaToRgb = (hexaColor) => {
    let rgbValues = []
    for (let i=1; i<=3; i++) {
        let rgbValue = parseInt(hexaColor.slice((i*2)-1, (i*2)+1), 16)
        rgbValues.push(rgbValue)
    }
    return `rgb(${rgbValues.join(",")})`
}
console.log(convertHexaToRgb('#a3e12f'))

// 6
const convertRgbToHexa = (rgbColorArr) => {
    let hexaColor = "#"
    for (value of rgbColorArr) {
        let hexValue = value.toString(16)
        hexValue.length == 1
            ? hexValue = "0" + hexValue
            : hexValue = hexValue
        hexaColor += hexValue
    }
    return hexaColor
}
console.log(convertRgbToHexa([163, 225, 47]))

// 7
const generateColors = (type, num) => {
    if (type == "hexa") {
        return arrayOfHexaColors(num)
    } else if (type == "rgb") {
        return arrayOfRgbColors(num)
    }
}

console.log(generateColors('hexa', 3))

// 8
const shuffleArray = (arr) => {
    let currentIndex = arr.length
    let randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// 9
const factorial = (num) => {
    let result = 1
    for (num; num>=1; num--) {
        result *= num
    }
    return result
}
console.log(factorial(6))

// 10
const isEmpty = (param) => {
    return param.length == 0
}
console.log(isEmpty([]))
console.log(isEmpty(""))

// 11 Already done at Level 2

// 12 ez

// 13 ez

// 14
const modifyArray = (arr) => {
    if (arr.length < 5) {
        return "Item not found"
    }
    arr[4] = arr[4].toUpperCase()
    return arr
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

// 15 Already done before

// 16
const isUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
          return false
        }
      }
      return true
}

console.log(isUnique([1, 2, 3, 4, 5]))
console.log(isUnique([1, 2, 3, 3, 4, 5]))

// 17 ez

// 18 ez

// 19 ez

// 20 ez

