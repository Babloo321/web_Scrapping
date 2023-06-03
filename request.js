const request = require("request");
// request module take two argument 1. is url and 2. is call back function
// call back function:if a funcion passed in another function is form call back function
// when we request on url it store the html data of that link
request("https://www.worldometers.info/coronavirus/", cb);
function cb(err, res, body){
    console.log("error: ", err);
    console.log("body: ", body);
}