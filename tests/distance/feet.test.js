import { describe, it, expect } from "@jest/globals";
import { ConvertToFeet } from "../../src/distance/feet";

describe("Convert to Feet", () => {
    it("should convert 10 meters to equal 32.8084 feet", () => {
        const res = ConvertToFeet(10);

        expect(res).toBeCloseTo(32.8084);
    });
});
