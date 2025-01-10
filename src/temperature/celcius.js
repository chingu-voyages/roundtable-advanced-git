import { CelciusFactor, TemperatureOffset } from "../constants.js";

/**
 * Convert a temperature that is in Farenheit to Celcius
 *
 * Formula used
 * celcius = (farenheit - 32) * 5/9
 *
 * @param {number} temp The temperature in farenheit
 * @returns {number} The converted celcius value
 *
 * @author Andres Court
 */
function ConverToCelcius(temp) {
    /** @type {number} */
    var value = temp - TemperatureOffset;
    value = value * CelciusFactor;

    return value;
}

export default ConverToCelcius;
