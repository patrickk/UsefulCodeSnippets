//Given a string, determine how many occurrences of each character happens.
//Map to object, where character is key and occurrence is value.

var givenString = "aaAABbBCDE";

function tally(str) {
  var i,
      myObj = {};
      //Iterate through string and assign key:value pairs
  for(i = 0; i < str.length; i++) {
    //If myObj[str[i]] does not exist, create its key with its character, and value as 0. Add 1 to value.
    myObj[str[i]] = (myObj[str[i]] || 0) + 1;
  }
  return myObj;
}
