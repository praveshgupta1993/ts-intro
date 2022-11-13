let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let pravesh: User | Admin = {
    name: "Pravesh",
    id: 334
}

pravesh = {
    username: "pg",
    id: 334
}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    // making some API calls
    if(typeof id === 'string') {
        id.toLowerCase()
    }
    if(typeof id == 'number') {
        id.toFixed()
    }
}

// array

// array multiple datatypes
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number|string)[] = [1, 2, "3"]

// Very strict assignment
let pi:3.14 = 3.14
// pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "middle"
// seatAllotment = "otherValue"

export {}