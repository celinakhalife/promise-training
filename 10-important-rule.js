'use strict';

function alwaysThrows(){
    const error = new Error();
    error.message = 'OH NOES';
    throw(error);
}

function iterate(arg){
    console.log(arg);
    return arg + 1;
}

function onReject(err){
    console.log(err.message);
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);

