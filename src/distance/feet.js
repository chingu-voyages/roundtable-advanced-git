import { DistanceFactor } from "../constants";

/**
 * Converts a distance expressed in meters to feet
 *
 * @type val {number} distance in meters
 * @returns {number} the distance in feet
 */
export function ConvertToFeet(val) {
    return val * DistanceFactor;
}
