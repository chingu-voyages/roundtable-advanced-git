import { it, describe, expect } from "@jest/globals";
import convertToCelcius from "../../src/temperature/celcius.js";

describe("Convert to Celcius", () => {
    it("should convert 32°F to equal 0°C", () => {
        const cel = convertToCelcius(32);

        expect(cel).toBe(0);
    });

    it("should convert 69.8°F to 21°C", () => {
        const cel = convertToCelcius(69.8);

        expect(cel).toBe(21);
    });
});
