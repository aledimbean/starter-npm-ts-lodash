"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
it('expect myFunc(5) to equal 25', function () {
    expect(index_1.default(5)).toEqual(25);
});
describe("suite desctiption", function () {
    it("describe the spec", function () {
        var myVar = true;
        expect(myVar).toBe(true);
    });
});
