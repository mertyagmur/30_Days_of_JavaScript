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

// 14
