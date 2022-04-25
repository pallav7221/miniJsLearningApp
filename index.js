//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scope = {
    line1: 'Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.',
    line2: "JavaScript has 3 types of scope:",
    line3: "Block scope : A block scope means that the variable defined within a block will not be accessible from outside the block.",
    line4: "Function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var , let and const are quite similar when declared inside a function",
    line5: "Global scope: meaning that it is visible (hence accessible) throughout the program, unless shadowed. The set of all global variables is known as the global environment or global state.",
}

var hoisting = {
    line1: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.",
    line2: "Var :  variable can be used before it has been declared. ",
    line3: "let and const : Variables defined with let and const are hoisted to the top of the block, but not initialized. ",
    line4: "Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared. ",
    line5: "Using a let variable before it is declared will result in a ReferenceError.",
}

var constructorFunction = {
    line1: "Constructor : The constructor method is a special method of a class for creating and initializing an object instance of that class.",
    line2: "The constructor keyword is used to declare a constructor method.",
    line3: "The class can contain one constructor method only.",
    line4: "JavaScript allows us to use parent class constructor through super keyword.",
    line5: "The this keyword begins to refer to the new object and it becomes the current instance object.",
}

var prototype = {
    line1: "The prototype is an object that is associated with every functions and objects by default in JavaScript.",
    line2: "Every function includes prototype object by default.",
    line3: "The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.",
    line4: "So, use prototype property of a function in the above example in order to have age properties across all the objects as shown below.",
    line5: "object's prototype property is invisible. Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.",

}

localStorage.setItem("scope", JSON.stringify(scope));
localStorage.setItem("hoisting", JSON.stringify(hoisting));
localStorage.setItem("constructorFunction", JSON.stringify(constructorFunction));
localStorage.setItem("prototype", JSON.stringify(prototype));

var scopeContent = JSON.parse(localStorage.getItem("scope")) || [];
// console.log(scopeContent);
var hoistingContent = JSON.parse(localStorage.getItem("hoisting")) || [];
var constructorContent = JSON.parse(localStorage.getItem("constructorFunction")) || [];
var prototypeContent = JSON.parse(localStorage.getItem("prototype")) || [];

document.querySelector("#scope").addEventListener("click", function () {
    display(scopeContent);
})
document.querySelector("#hoisting").addEventListener("click", function () {
    display(hoistingContent);
})
document.querySelector("#constructorFunction").addEventListener("click", function () {
    display(constructorContent);
})
document.querySelector("#prototype").addEventListener("click", function () {
    display(prototypeContent);
})

// console.log(scopeContent.line1);
function display(data) {
    document.querySelector("#content").innerHTML = "";
    var box = document.createElement("div");

    var para1 = document.createElement("p")
    para1.innerText = data.line1;
    var para2 = document.createElement("p")
    para2.innerText = data.line2;
    var para3 = document.createElement("p")
    para3.innerText = data.line3;
    var para4 = document.createElement("p")
    para4.innerText = data.line4;
    var para5 = document.createElement("p")
    para5.innerText = data.line5;

    box.append(para1, para2, para3, para4, para5);
    document.querySelector("#content").append(box);
}