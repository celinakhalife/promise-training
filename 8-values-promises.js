'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);

function attachTitle(firstargument){
    return 'DR. '+ firstargument;
}
