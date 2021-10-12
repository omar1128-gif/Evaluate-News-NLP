import { validateURL } from "../js/URLValidator";

describe("Testing validateURL functionality", () => {
    test("validateURL is defined", () => {
        expect(validateURL).toBeDefined();
    });
    test("Returns false if the input is empty", () => {
        expect(validateURL("")).toBe(false);
    });

    test("Returns true if the input is a valid URL", () => {
        expect(
            validateURL("https://www.nature.com/articles/d41586-021-02643-y")
        ).toBe(true);
    });
    test("Returns false if the input is an invalid URL", () => {
        expect(validateURL("https://nature")).toBe(false);
    });
});
