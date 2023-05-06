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
