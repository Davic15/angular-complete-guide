//* Basic types in TypeScript.
//* Primitives: number, string, boolean
//* More complex types: arrays, objects
//* Function types, parameters

//* Primitives
//* We need to write in lower case.
let age: number;
age = 12;

let userName: string;
userName = 'David';

let isInstructor: boolean;
isInstructor = true;

//* More Complex Types
//* This is how we define an array of strings.
//* We can't use let hobbies: string; because it will store a single value.
let hobbies: string[];
hobbies = ['Sport', 'Cooking'];

//* any stores any kind of value. It is better to don't use it.
//* This is to define an object, for each property we need to define the type.
let person: {
    name: string;
    age: number;
};

person = {
    name: 'David',
    age: 32
};

//* It gives us an error.
/*person = {
    isEmployee: true;
}*/

//* This is an array of objects
let people: {
    name: string,
    age: number;
}[];

//* Type Inference.
//* If we initialize a variable with the value, TypeScript will understand that the type is string in this case
//* for that reason we can use numbers in this example.
let course = 'React';
//course = 123;

//* Union Types
//* It allows us to work with different types, not just one.
//* let userName: string | string[]; It is allowed.
let courses: string | number = 'React';
courses = 123;

//* Assigning Type Aliases
//* We can define a new type name
type Person = {
    name: string;
    age: number;
}

let newPerson: Person;
newPerson = {
    name: 'David',
    age: 32
};


//* Function and types
//* we can define the returning type, or we can let TypeScript infere the type.
function add(a: number, b: number) {
    return a + b;
}

//* It has a no returning statement, so it is a void function.
function printOutput(value: any) {
    console.log(value);
}

//* Generics
//* We can define it with <T> or any identifier
//* The type T is not any 
//* Write functions with type safe and flexible, but when a certaing type is used, is locked and known.
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
insertAtBeginning(['a', 'b'], 'd');

//* Classes and Interfaces.
