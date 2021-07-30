"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.add(3, 4));
console.log(lodash_1.default.dropRight([1, 2, 3, 4, 5], 2));
console.log(lodash_1.default.dropRight(["cat", "dog", "fish", "blueberry", "pineapple"], 1));
console.log(lodash_1.default.multiply(2, 5));
var myFunc = function (num) { return (num * 5); };
exports.default = myFunc;
