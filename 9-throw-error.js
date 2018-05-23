'use strict';

function parsePromised(json){
    return new Promise(function (fulfill, reject) {
       try{
        JSON.parse(json);
        fulfill(json);
       }catch(e){
        reject(e);
       }
    });
}

parsePromised("{otest' : true}")
.then(console.log, error =>{
    console.log(error.message)
});
