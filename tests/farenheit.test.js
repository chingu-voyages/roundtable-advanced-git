import { it, describe, expect } from "@jest/globals";
import convertToFarenheit from "../src/temperature/farenheit.js";

describe("Convert to Celcius", () => {
    it("should convert 0°C to equal 32°F", () => {
        const far = convertToFarenheit(0);

        expect(far).toBe(32);
    });

    it("should convert 21°C to 69.8°F", () => {
        const far = convertToFarenheit(21);

        expect(far).toBeCloseTo(69.8);
    });
});
