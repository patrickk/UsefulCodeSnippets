//Functional programming helps keep functions pure and clean 

//Transform below into functional programming
var arr1 = [1,2,3];

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
// 	arr2.push(arr1[i] * 2);
// }


function mapForEach(arr, fn) {
	var newArr = [];

	for(var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		)
	};

	return newArr;
}
//arr2 from above can be refactored to be much simpler 
var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

//can use mapForEach for other purposes, would show [false, false, true]
var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});

var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

//fn in mapForEach wants only one parameter, but checkPastLimit wants 2, so bind needs to be used to preset the first parameter
//will return [false, true, true] 
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
arr4();

//function returns a function, which can be passed into arr4 without bind, so checkPastLimitSimplified(4) would be passed to arr 4.
//returns function to be invoked when called in arr5 
//returned fucntion's limiter is PRESET with the top parameter, due to bind. It isn't being passed in. .bind is being used to create an object. 
var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};
//Much easier than arr 4, since bind was already called in the original function of checkPastLimitSimplified. No need to use bind here
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));