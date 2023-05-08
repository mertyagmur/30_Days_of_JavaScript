/////////// LEVEL 1

// 1
const dog = {}

// 2
console.log(dog)

// 3
dog.name = "Max"
dog.legs = 4
dog.color = "Brown"
dog.age = 3
dog.bark = function () { return "woof woof"}

console.log(dog.bark())

// 4
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// 5
dog.breed = "Rottweiler"
dog.getDogInfo = function () {
    return `${this.name} is a ${dog.breed}. It has ${this.color} fur and is ${this.age} years old.`
}
console.log(dog.getDogInfo())

///////////// LEVEL 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1 ??

// 2
let loggedInUsers = 0
let highScoreUsers = 0
for (user of Object.entries(users)) {
    if (user[1].isLoggedIn) {
        loggedInUsers += 1
    }
    if (user[1].points >= 50) {
        highScoreUsers++
    }
}
console.log(`${loggedInUsers} users are logged in`)
console.log(`${highScoreUsers} users have scores higher than 50`)

// 3
let mernStackDevs = []
for (user of Object.entries(users)) {
    if (
        (user[1].skills.includes("MongoDB") &&
        user[1].skills.includes("Express") &&
        user[1].skills.includes("React")) &&
        (user[1].skills.includes("Node") ||
        user[1].skills.includes("Node.js"))
    ) {
        mernStackDevs.push(user[0])
    }
}
console.log(mernStackDevs)

// 4
const usersCopy = Object.assign({}, users)
usersCopy["Mert"] = {
    email: "mert.yagmurcs@gmail.com",
    skills: ["Python", "Java", ".NET", "Vue", "JavaScript", "PostgreSQL"],
    age: 24,
    isLoggedIn: true,
    points: 80
}
console.log(usersCopy)

// 5
console.log(Object.keys(users["Alex"]))

// 6
console.log(Object.values(users))

// 7 ez

///////////////// LEVEL 3

// 1
const personAccount = {
    firstName: "Mert",
    lastName: "Yağmur",
    incomes: [["Salary", 100000], ["Freelancing", 20000]],
    expenses: [["Rent (annual)", 36000], ["Car Payments (annual)", 24000], ["Tax", 10000]],
    totalIncome: function() {
        let total = 0
        for (income of this.incomes) {
            total += income[1]
        }
        return total
    },
    totalExpense: function() {
        let total = 0
        for (expense of this.expenses) {
            total += expense[1]
        }
        return total
    },
    accountInfo: function() {
        return `Total Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`
    },
    addIncome: function(description, amount) {
        this.incomes.push([description, amount])
    },
    addExpense: function(description, amount) {
        this.expenses.push([description, amount])
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }
}

console.log(personAccount)
console.log(personAccount.accountInfo())
console.log(personAccount.addIncome("Test", 50000))
console.log(personAccount.accountInfo())
console.log(personAccount.addExpense("Test", 30000))
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())

// 2
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// 2a
const signUp = (obj) => {
    for (user of users2) {
        if (user.email == obj.email) {
            return "An account with this email already exists"
        }
    }
    users2.push(obj)  

}
signUp(
    {
        _id: 'zwf8fdsg',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    }
)
console.log(users2)

signUp(
    {
        _id: 'zwf8fdsg',
        username: 'Brook',
        email: 'brookfdsf@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    }
)
console.log(users2)

// 2b ez

// 3 ez

// 4 ez