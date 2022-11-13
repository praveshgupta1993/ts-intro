// constants way

const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

// if(seat === AISLE) {
    // statement
// }

enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

enum SeatChoice2 {
    AISLE=11,
    MIDDLE,
    WINDOW
}

enum SeatChoice3 {
    AISLE="AISLE",
    MIDDLE="MIDDLE",
    WINDOW="WINDOW"
}

enum SeatChoice4 {
    AISLE = "aisle",
    MIDDLE = 1,
    WINDOW
}

const enum SeatChoice5 {
    AISLE = "aisle",
    MIDDLE = 1,
    WINDOW
}

const seatChoice5Aisle = SeatChoice5.AISLE

const seatChoice5Middlle = SeatChoice5.MIDDLE

const pgSeat = SeatChoice.AISLE

export {}