"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myVal = addTwo(5);
getUpper("4");
signUpUser("Pravesh", "email@test.com", false);
loginUser("Pravesh", "email@test.com");
// function getValue(myVal: number) {
//     if(myVal>5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    if (s === void 0) { s = ""; }
    return "";
};
// const heros = ["thor", "spiderman", "ironman"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
