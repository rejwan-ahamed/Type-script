"use strict";
var size;
(function (size) {
    size[size["Small"] = 0] = "Small";
    size[size["Medium"] = 1] = "Medium";
    size[size["Large"] = 2] = "Large";
})(size || (size = {}));
let mySize = size.Medium;
console.log(mySize);
