import { DistanceFactor } from "../constants.js";

/**
 * Converts a distance expressed in feet to meters
 *
 * @type val {number} distance in feet
 * @returns {number} the distance in meters
 */
export function ConvertToMeters(val) {
    return val / DistanceFactor;
}
