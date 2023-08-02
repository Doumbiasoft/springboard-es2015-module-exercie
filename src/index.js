import {choice,remove} from './helpers';
import fruits from './foods.js';

const random_fruit = choice(fruits);

console.log(`I'd like one ${random_fruit}, please`);
console.log(`Here you go: ${random_fruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits,random_fruit);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
