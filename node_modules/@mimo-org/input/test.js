const input = require('./index.js');

const input1 = input("Enter 'input 1': ");

if (input1 != 'input 1') {
  throw new Error(`'${input1}' is not equal to 'input 1'`);
}

const input2 = input("Enter 'input 2': ");

if (input2 !== 'input 2') {
  throw new Error(`'${input2}' is not equal to 'input 2'`);
}

console.log('All tests passed!');
