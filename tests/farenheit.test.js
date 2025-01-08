const { it, describe, expect } = require("@jest/globals");
const convertToFarenheit = require("../src/farenheit.cjs");

describe("Convert to Celcius", () => {
    it("should convert 0°C to equal 32°F", () => {
        const far = convertToFarenheit(0);

        expect(far).toBe(32);
    });

    it("should convert 21°C to 69.8°F", () => {
        const far = convertToFarenheit(21);

        expect(far).toBe(69.8);
    });
});
