"use strict";
let number = 1;
number = 10;
console.log(number);
let level;
level = 1;
level = "1";
level = true;
level = {};
function render(document) {
    return document;
    console.log(document);
}
let numbers = [] = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number / 2));
let user = [1, "Steve"];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let go = Direction.Up;
console.log(go);
function calculateTax(income) {
    return income * 0.4;
}
//# sourceMappingURL=index.js.map