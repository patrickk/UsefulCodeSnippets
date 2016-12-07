//Pure prototypal inheritance
var person = {
	firstName: "Default",
	lastName: "Default",
	greet: function() {
		return "Hi " + this.firstName;
	}
}


//john's prototype is the person object 
var john = Object.create(person);

//Override (hide properties/methods )prototype chain lookup by assigning firstName to the john object. 
john.firstName = 'John';


//Polyfill

if(!Object.create) {
	Object.create = function(o) {
		if(arguments.length > 1) {
			throw new Error('Object.create implementation only accepts the first parameter');
		}
		function F() {}
		//o is the object you pass in to Object.create.. Becomes the prototype of the newly created object from constructor
		F.prototype = o;
		return new F();
	};
}