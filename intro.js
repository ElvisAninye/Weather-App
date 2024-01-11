let interestRate = 0.3; //const should be used instead of let if you are not changing variable in future
let isEmpty = true;
let person ={
    name: 'Elvis',
    age: 30
};

//dot Notation
person.name = 'John';
console.log(person.name);

//Bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors);

function greet(name) {
    console.log('Hello world ' + name);
}
greet(person.name);

function square(number) {
    return number * number;

}
let number = square(2)
console.log(number);