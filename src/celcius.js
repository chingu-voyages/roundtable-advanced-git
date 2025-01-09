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
    var value = temp - 32;
    value = (value * 5) / 9;

    return value;
}

export default ConverToCelcius;
