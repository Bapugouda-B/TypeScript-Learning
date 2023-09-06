//TYPE ANNOTATION - VARIABLE TYPE

import { number } from "yup";

// Type annotation for a variable
let mangos: number = 10;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Type annotation for an  Arrays
// string[] = type array that contains string
let colors: string[] = ["red", "green", "yellow", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let truths: boolean[] = [true, false, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Type annotations for Object with specific properties
let point: { x: number; y: number } = {
  x: 15,
  y: 25,
};

let person: { name: string; age: number } = {
  name: "Rajjdanush",
  age: 25,
};

// Type annotation for a function parameter and return type
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// TYPE  INFERENCE = TypeScript infers the type based on the value assigned

// variable declaration and initialization
const message = "Hello, Typescript!";

// TypeScript infers parameter and return type based on the function implementation
function add(a: number, b: number) {
  return a + b;
}

// When to use Annotations
// 1) Function that returns the "Any" type

const json = '{"X":10, "Y":20}';
// const coordinates = JSON.parse(json);
const coordinates: { X: number; Y: number } = JSON.parse(json); // Fixing the "Any" type
console.log(coordinates); // {X:10, Y:20

// 2) When we declare a variable on one line and initialize it later

let words = ["red", "green", "yellow"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "greee") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly 
let numbers = [-10, -5, 15];
// let numberAboveZero = false;  (when inference doesn't work )
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
