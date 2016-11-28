//Accurately measure how long each function takes to run, a better solution than the console.time()/console.timeEnd() functions
//1st param is for the function to test, 2nd param is params required by 1st param's function, 3rd param is for how many reps the test should run

var SpeedTest = function(testImplement,testParams,repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function() {
    if (this.testImplement(this.testParams) === false) {
      alert('Test failed with those parameters.');
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log('Average execution across ' + this.repetitions + ': ' + this.average);
  }
};

//Credit to Codeschool for the code 
