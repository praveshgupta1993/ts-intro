interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

// re-opening of interface
interface User {
    githubtoken: string
}

interface Admin extends User {
    role: "admin" | "TA" | "learner"
}

type UserType = {
    email: string,
    userId: number
}

const pravesh: (User | Admin) = {
    dbId: 1122,
    email: "email@test.com",
    userId: 1122,
    startTrail: () => {
        return "Trial Strated"
    },
    getCoupon: (name = "coupon", value = 100) => {
        return 1;
    },
    githubtoken: "token",
    role: "admin"
}

pravesh.email = "email@test.com"
// pravesh.dbId = 123

export {}
