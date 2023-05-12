import {countries} from './countries.js';
import {webTechs} from './web_techs.js';

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace('.', '');
 words = text.replace(',',' ')
words = words.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let min = Math.min(...ages)
console.log(min)

let max = Math.max(...ages)
console.log(max)

// ... - to spread th array elements as arguments to the Math.min method
let count = 0;

for (let i=0;i<ages.length;i++){
    count = count + ages[i]
}
count = count / ages.length
console.log(count)

// let userInput = prompt('Enter your age:');

// userInput >= 18
//     ? console.log('old enough to drive')
//     : console.log(`you are left with ${18-userInput}`)


// let myAge = 23;
// let yourAge = prompt('Enter your age:')

// yourAge > myAge
//     ? console.log(`you are older than me by ${yourAge - myAge}`)
//     : console.log(`you are younger than me by ${myAge-yourAge}`)

