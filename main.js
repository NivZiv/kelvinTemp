const kelvinUnit = 293;

/* The forecast today is '293' Klevin, the line above is setting the Klevin to '293' and
   it's constant because it won't be changed. */

const celsiusUnit = (kelvinUnit - 273);

/* In the line above we declared a Celsius unit, the difference between celsius to
   kelvin is '273' degrees less than Kelvin */

const fahrenheitUnit = ((celsiusUnit) * (9/5) + 32);
let fahrenheitUnit_Rounded = Math.round(fahrenheitUnit);

/* In the line above we declared a Fahrenheit unit, the math above is how we
   calculate Fahrenheit from Celsius, in the next line we rounded the number we gets
   because we want it non-decimal */

console.log(`The temperature is ${fahrenheitUnit_Rounded} degrees Fahrenheit.`);

// The code above is just an output of our program

const newtonUnit = ((celsiusUnit) * (33/100));
let newtonUnit_Rounded = Math.floor(newtonUnit);

/* In the line above we declared a Fahrenheit unit, the math above is how we
   calculate Fahrenheit from Celsius, in the next line we floored the number we gets
   because we want it non-decimal */

console.log(`The temperature is ${newtonUnit_Rounded} degrees Newton.`);

// The code above is just an output of our program
