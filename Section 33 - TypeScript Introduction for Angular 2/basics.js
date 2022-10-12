//* Basic types in TypeScript.
//* Primitives: number, string, boolean
//* More complex types: arrays, objects
//* Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//* Primitives
//* We need to write in lower case.
var age;
age = 12;
var userName;
userName = 'David';
var isInstructor;
isInstructor = true;
//* More Complex Types
//* This is how we define an array of strings.
//* We can't use let hobbies: string; because it will store a single value.
var hobbies;
hobbies = ['Sport', 'Cooking'];
//* any stores any kind of value. It is better to don't use it.
//* This is to define an object, for each property we need to define the type.
var person;
person = {
    name: 'David',
    age: 32
};
//* It gives us an error.
/*person = {
    isEmployee: true;
}*/
//* This is an array of objects
var people;
//* Type Inference.
//* If we initialize a variable with the value, TypeScript will understand that the type is string in this case
//* for that reason we can use numbers in this example.
var course = 'React';
//course = 123;
//* Union Types
//* It allows us to work with different types, not just one.
//* let userName: string | string[]; It is allowed.
var courses = 'React';
courses = 123;
var newPerson;
newPerson = {
    name: 'David',
    age: 32
};
//* Function and types
//* we can define the returning type, or we can let TypeScript infere the type.
function add(a, b) {
    return a + b;
}
//* It has a no returning statement, so it is a void function.
function printOutput(value) {
    console.log(value);
}
//* Generics
//* We can define it with <T> or any identifier
//* The type T is not any 
//* Write functions with type safe and flexible, but when a certaing type is used, is locked and known.
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
insertAtBeginning(['a', 'b'], 'd');
//* Classes and Interfaces.
var Student = /** @class */ (function () {
    //* In TypeScript we can do this, give a type to our properties in advance.
    //* also we can do it in one line
    /*firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }*/
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
        //* This is a short hand notation.
    }
    //* Methods of the class Student.
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('David', 'Macias', 33, ['Angular']);
student.enrol('React');
var max;
max = {
    firstName: 'David',
    age: 22,
    greet: function () {
        console.log('Hello!');
    }
};
//* we can implements the interface Human
//* Interfaces don't act as object types, instead they force us to set up some structure for our classes.
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!!');
    };
    return Instructor;
}());
