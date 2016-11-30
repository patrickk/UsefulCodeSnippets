//Private and/or public data
//OBJECTNAME is namespace to keep data confined to local scope, don't pollute global scope as much as possible.
//Must call IIFE(immediately invoked function expression) to contain public/private data within local scope.

var OBJECTNAME = (function(){

//private variables/functions are kept outside of return statement
  var PRIVATEVAR = ;
  var ANOTHERONE = ;
  var PRIVATEFUNCEXPRESSION = function(){};
  //public data must be returned in an object
  return {
    PUBLICSTUFF:  ,
    PUBLICMETHOD: function(){
    //CAN ACCESS PRIVATE DATA HERE BUT ONLY MODULE CAN MODIFY IT NO ONE ELSE CAN YAY
    }
  };
})();

//Global Imports: import global variables to be used in modules

var GLOBAL;

var OBJECTNAME = (function(ANYPARAMETERHERE){
  var PRIVATE;
  
  return {
    SOMEPUBMETHOD: function(){
      //GLOBAL can be accessed here   
      if(ANYPARAMETERHERE){
      }
    }
  }
})(GLOBAL);

//Augmentation: If additions to existing properties needed, augmentation is useful (splitting functionalities between files)
//But make sure to group file contents around needed data, since aug properties can only access its own priv properties and same goes 
//for original module props, they can only access their own priv properties
//(cross-file private state build won't have level of privacy of a single closure)

var OBJECTNAME = (function(ANYPARAMETERHERE){
  var PRIVATE;
  
  return {
    SOMEPUBMETHOD: function(){
      //GLOBAL can be accessed here   
      if(ANYPARAMETERHERE){
      }
    }
  }
})(GLOBAL);

//Will provide extra properties/methods for existing module (OBJECTNAME)
//Don't declare OBJECTNAME with a 'var' or else will overwrite
OBJECTNAME = (function(someparameterhere){
  var NEWPRIVATEDATA = ;
  
  someparameterhere.newmethod = function(){};
  
  //Must return the original module
  return someparameterhere;

}(OBJECTNAME);
