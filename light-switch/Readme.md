# Light and Battery Status Script

This is a simple Javascript script that will check the status of the light and the battery.

## Features

**Determine daytime status**: A boolean value (`isDay`) represents whether it is daytime or not.
**Light statu**: The `isLightOn` variable determines whether the light is on or not.
**Battery level**: The script evaluates whether the system is working by checking if the light is on and if the battery level is sufficient.

## Code Explanation

```javascript
const isDay = false; // Boolean to indicate daytime status
const isLightOn = !isDay; // Negates `isDay` to turn the light on at night

console.log("Daytime?");
console.log(isDay); // logs whether it is daytime

console.log("Light on?");
console.log(isLightOn); // logs whether the light is on

let batteryLevel = 50; // Battery level in percentage
const isWorking = isLightOn === true && batteryLevel > 0; // Checks if the light is on and the battery level is sufficient

console.log(batteryLevel + "%");
console.log("Everything working?" + isWorking); // logs system functionality
```
