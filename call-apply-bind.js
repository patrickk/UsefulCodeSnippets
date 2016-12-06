var person = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function() {
		var fullName = this.firstName + " " + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2) {
	console.log("Logged: " + this.getFullName());
	console.log("Arguments: " + lang1 + lang2);
}

//CALL
//first argument is what 'this' should point to, in this case, person
//call executes the function when called 
logName.call(person, 'en', 'es')

//APPLY
//same as call, except that it needs an array of arguments to be passed in
logName.apply(person, ['en','es']);

//BIND
//logName 'binds' to the person object, making it possible to call the getFullName method
//bind creates a copy of whatever function is calling it
var logPersonName = logName.bind(person);
//logPersonName can be invoked with its arguments. Bind only creates copy so you must execute it after.
logPersonName('en');


//FUNCTION BORROWING

var person2 = {
	firstName: "Jane",
	lastName: "Doe"
}
//Invokes the method from person, except the 'this' context is in person2. 
person.getFullName.apply(person2);

//FUNCTION CURRYING

function multiply(a, b) {
	return a*b;
}
//'this' doesn't matter in this case.. but passing in 2 will set variable a to be always two in this copy of function
var multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(4); //will result in 8, since parameter a has already been set 