function addTwo(num: number): number {
    return num +2;
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myVal = addTwo(5);
getUpper("4");
signUpUser("Pravesh", "email@test.com", false)
loginUser("Pravesh", "email@test.com")

// function getValue(myVal: number) {
//     if(myVal>5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string = ""): string => {
    return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map((hero: number): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
    // return 1;
}

// When return isn't expected at all
function handleError(errmsg: string): never {
    console.log(errmsg);
    throw new Error(errmsg);
    // return 1;
}

export {}