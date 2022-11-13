"use strict";
// constants way
exports.__esModule = true;
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
// if(seat === AISLE) {
// statement
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 11] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 12] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 13] = "WINDOW";
})(SeatChoice2 || (SeatChoice2 = {}));
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3["AISLE"] = "AISLE";
    SeatChoice3["MIDDLE"] = "MIDDLE";
    SeatChoice3["WINDOW"] = "WINDOW";
})(SeatChoice3 || (SeatChoice3 = {}));
var SeatChoice4;
(function (SeatChoice4) {
    SeatChoice4["AISLE"] = "aisle";
    SeatChoice4[SeatChoice4["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice4[SeatChoice4["WINDOW"] = 2] = "WINDOW";
})(SeatChoice4 || (SeatChoice4 = {}));
var seatChoice5Aisle = "aisle" /* SeatChoice5.AISLE */;
var seatChoice5Middlle = 1 /* SeatChoice5.MIDDLE */;
var pgSeat = SeatChoice.AISLE;
