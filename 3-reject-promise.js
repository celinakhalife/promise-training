'use strict';

var promise = new Promise(function (fulfill, reject) {
    const error = new EvalError();
    error.message = 'REJECTED!';
    setTimeout(reject , 300,error)
});

function onReject (error) {
   console.log(error.message)
}


  promise.then((value) => {
      console.log(value);
  },onReject )