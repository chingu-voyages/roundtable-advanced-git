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
 * @param {number} temp 
 * @returns {number}
 */
function ConvertToFarenheit(temp) {
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
 * @param {number} temp 
 * @returns {number}
 */
function ConverToCelcius(temp) {
    var value = temp - 32
    value = value * 5 / 9

    return value
}

const far = ConvertToFarenheit(21)
const cel = ConverToCelcius(far)

console.log(far)
console.log(cel)
