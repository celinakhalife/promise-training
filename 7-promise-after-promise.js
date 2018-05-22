'use strict';

first().then(function (secretValue) {
    return second(secretValue);
}).then(function (exposedValue) {
    return exposedValue;
}).then(console.log);