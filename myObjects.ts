// const User = {
//     name: "Pravesh", 
//     email: "test@email.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// // createUser({name: "Pravesh", isPaid: false, email: "test@email.com"})

// let newUser = {name: "Pravesh", isPaid: false, email: "test@email.com"};
// createUser(newUser)

// createUser({name: "Pravesh", isPaid: false})

// function createCourse():{name: string, price: number}{
//     return {name: "phone", price: 399}
// }

// ############################################

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return user
// }

// let userPravesh = {
//     name: "Pravesh", 
//     email: "email@test.com",
//     isActive: false
// }

// createUser(userPravesh)

// ############################################

type User = {
    readonly _id: string,
    name: string,
    email: string, 
    isActive: boolean,
    ccDetails?: number // optional - ?
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// function createUser(u: User) {}
let myUser: User = {
    _id: "1234",
    name: "Pravesh",
    email: "email@test.com",
    isActive: false
}

myUser.email = "newEmail@test.com"
// myUser._id = 1313; // readonly

export {}