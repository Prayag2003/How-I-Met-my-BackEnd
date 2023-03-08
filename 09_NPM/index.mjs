// const chalk = require("chalk"); // run npm install chalk@4.2.1 and then it works

import chalk from "chalk"  // have to make file as index.mjs (ECMAScript Modules)
import validator from 'validator';

console.log(chalk.blue("Hello world"))
console.log(chalk.blue.underline("Hello world"))
console.log(chalk.blue.underline.inverse("Hello world"))
console.log(chalk.green.underline.inverse("Success"))

// Form Validator
const res = validator.isEmail('prayagbhatt200@3lco.m')
console.log(res ? chalk.green.inverse(res) : chalk.redBright.inverse(res))

