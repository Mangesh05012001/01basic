const name = "mangesh"
const repoCount = 50
// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`)



const gameName = new String('Mangesh-haral-patil')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);



console.log(gameName.toLocaleUpperCase ());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(2,4)
console.log(newString);


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('mangesh'))

console.log(gameName.split('-'));
