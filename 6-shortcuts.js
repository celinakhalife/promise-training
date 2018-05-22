'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

var promise = Promise.resolve('FULFILL');

promise.catch(error=>{
    console.log(error.message);
})