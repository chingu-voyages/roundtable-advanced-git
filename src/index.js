/**
 * In this project we will be discussing some advanced git techniques, the actual content of it
 * is not really important
 **/

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

const far = ConvertToFarenheit(21)

console.log(far)
