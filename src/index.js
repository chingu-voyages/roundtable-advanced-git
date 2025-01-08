/**
 * In this project we will be discussing some advanced git techniques, the actual content of it
 * is not really important
 */

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
    let value = temp * 9 / 5;
    value = value + 32

    return value
}

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
    var value = temp - 32
    value = value * 5 / 9

    return value
}

const far = ConvertToFarenheit(21)
const cel = ConverToCelcius(far)

console.log(far)
console.log(cel)
