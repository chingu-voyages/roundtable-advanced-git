import ConvertToFarenheit from "./temperature/farenheit.js";
import ConverToCelcius from "./temperature/celcius.js";
import {ConvertToMeters} from "./distance/meters.js";
import {ConvertToFeet} from "./distance/feet.js";

const far = ConvertToFarenheit(21);
const cel = ConverToCelcius(69.8);

const met = ConvertToMeters(3)
const feet = ConvertToFeet(0.9144)

console.log(far);
console.log(cel);
