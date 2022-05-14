const path = require('path')

console.log(path.join(__filename, 'first', 'second'))
const fullPath = path.join(__filename, 'first', 'second')
console.log(path.parse(fullPath));


const abstrUrl = 'https://locallhost:8080/users?id=1234'
const url = new URL(abstrUrl);
console.log(url)