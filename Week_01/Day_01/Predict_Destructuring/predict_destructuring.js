// 1
const cars = ['Tesla', 'Mercedes', 'Honda'] // setting cars array
const [ randomCar ] = cars // setting first item in cars array to randomCar
const [ ,otherRandomCar ] = cars // setting second item in cars array to otherRandomCar
//Predict the output
console.log(randomCar) // Console logs 'Tesla'
console.log(otherRandomCar) // console logs 'Mercedes'

// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // reference error
console.log(otherName); // console logs 'Elon'

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // console logs '12345'
console.log(hashedPassword); // console logs undefined

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // console logs false
console.log(first == third); // console logs true

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // console logs 'value'
console.log(secondKey); // console logs [1,5,1,8,3,3]
console.log(secondKey[0]); // console logs 1
console.log(willThisWork); // console logs 5
