import myFunc from "../index";

it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
});

describe("suite desctiption", () => {
    it("describe the spec", () => {
        const myVar = true;
        expect(myVar).toBe(true);
    });
});
