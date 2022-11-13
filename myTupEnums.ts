// Array
// const user: string[] = ["pg"]

// Array - multiple types - no order
// const user: (string | number)[] = [1, "pg"]

// array - multiple types - ordered string type
let user: [string, number, boolean]

// user = [true, 12, "pg"] - error
let rgb: [number, number, number]
rgb = [255, 255, 0]

type User = [number, string]

const newUser: User = [112, "example"]

// values can change
// newUser[1] = "exampleOther" 

// not possible
// newUser.push(true)

export {}