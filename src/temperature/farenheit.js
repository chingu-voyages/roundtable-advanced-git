import { FarenheitFactor, TemperatureOffset } from "../constants.js";

/**
 * Convert a temperature that is in Celcius to farenheit
 *
 * Formula used
 * farenheit = 32 + (9/5 * celcius)
 *
 * @param {number} temp The temperature in celcius
 * @returns {number} The converted farenheit value
 *
 * @author Andres Court
 */
function ConvertToFarenheit(temp) {
    /** @type {number} */
    let value = temp * FarenheitFactor;
    value = value + TemperatureOffset;

    return value;
}

export default ConvertToFarenheit;
