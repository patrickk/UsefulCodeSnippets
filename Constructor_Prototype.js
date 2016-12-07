//Prototype property on function is NOT the prototype of the function. 
//Rather, it is the prototype of the object created if new constructor used.

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

//This is the prototype of the objects created by the Person constructor.
//NOT the function's prototype
Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

var john = new Person ('John', 'Doe');
console.log(john);


//Built-In Function Constructors

//BETTER TO USE THE ACTUAL PRIMITIVE VALUES, instead of using constructors for primitives

var a = new Number(3);


var a = new String("Doe");
//a points to the .prototype property below for methods such as indexOf 
String.prototype

"John" //Would be equal to calling new String("John");

//JS will not convert number to Number object automatically
3.isPositive() //Would not work
var a = new Number(3) 
a.isPositive() //Would work 


//DO NOT USE FOR IN LOOP FOR ARRAYS. Use normal for loops instead. 
//Some frameworks/libraries may add functionalities to Array.prototype which would 
//affect the outcome of FOR IN loops.