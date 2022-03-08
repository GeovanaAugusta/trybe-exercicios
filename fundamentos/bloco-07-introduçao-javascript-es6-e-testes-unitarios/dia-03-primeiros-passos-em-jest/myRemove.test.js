const {
    myRemove,
} = require("./myRemove.js");


describe("Function remove()", () => {
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    it("remove() returns the new array", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    it("remove() returns the new array", () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });
    // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    it("remove() returns the new array", () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});