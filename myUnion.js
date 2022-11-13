var score = 33;
score = 44;
score = "55";
var pravesh = {
    name: "Pravesh",
    id: 334
};
pravesh = {
    username: "pg",
    id: 334
};
// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // making some API calls
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    if (typeof id == 'number') {
        id.toFixed();
    }
}
