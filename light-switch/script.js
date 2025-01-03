const isDay = false;
const isLightOn = !isDay;

console.log("Daytime?");
console.log(isDay);

console.log("Light on?");
console.log(isLightOn);

let baterryLevel = 50;
const isWorking = isLighOn === true && batteryLevel > 0;

console.log(batteryLevel + "%");
console.log("Everything working?" + isWorking);
