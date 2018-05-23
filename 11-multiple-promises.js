'use strict';


function all(promise1, promise2){
   return new Promise(function (fulfill, reject) {
        var i = 0;
        var returnValues = [];
        promise1.then(function (val) {
            returnValues[0] = val;
            i++;
      
            if (i >= 2) {
              fulfill(returnValues);
            }
          });
      
          promise2.then(function (val) {
            returnValues[1] = val;
            i++;
      
            if (i >= 2) {
              fulfill(returnValues);
            }
         });
    }); 
}

all(getPromise1(),getPromise2()).then(console.log);

 