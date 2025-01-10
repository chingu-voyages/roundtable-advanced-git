import { describe, it, expect } from "@jest/globals";
import { ConvertToMeters } from "../../src/distance/meters";

describe("Convert to meters", () => {
    it("should convert 32.8084 feet to equal 10 meters", () => {
        const res = ConvertToMeters(32.808);

        expect(res).toBeCloseTo(10);
    });
});
