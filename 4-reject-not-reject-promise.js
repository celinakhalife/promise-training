'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    const error = new EvalError();
    error.message = 'I DID NOT FIRED';
    reject(error);
});

function onReject (error) {
   console.log(error.message)
}


  promise.then((value) => {
      console.log(value);
  },onReject )