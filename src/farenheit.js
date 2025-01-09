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
    let value = (temp * 9) / 5;
    value = value + 32;

    return value;
}

export default ConvertToFarenheit;
