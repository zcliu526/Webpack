import age from './module.js'
import 'core-js/stable'

console.log('index.js', age);

const add = (x,y) => x+y;

new Promise((resolve, reject) => {
    resolve(123);
}).then(data => console.log(data))

