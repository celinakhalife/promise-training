var http = require('q-io/http')
var url =  'http://localhost:7000' ;

http.request({ url: url })
.then(function(res){
  return res.body.read().then(function(bodyStream){
      var body = bodyStream.toString('UTF-8')
      getToYour(body);
  })
})

function getToYour(userId){
  var url =  'http://localhost:7001/'+userId ;

  http.request({ url: url }).then(function(res){
    return res.body.read().then(function(bodyStream){
        var body = bodyStream.toString('UTF-8')
        console.log(JSON.parse(body));
    })
  })
}