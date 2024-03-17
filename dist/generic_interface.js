"use strict";
var _a, _b;
function fetch(url) {
    return { data: null, error: null };
}
let userData = fetch('google.com');
(_a = userData.data) === null || _a === void 0 ? void 0 : _a.Username;
let productData = fetch('unknown.com');
(_b = productData.data) === null || _b === void 0 ? void 0 : _b.ProductID;
