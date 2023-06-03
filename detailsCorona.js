const request = require("request");
const cheerio = require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);
function cb(err, res, body){
    if(err){
        console.log("error is: ", err);
    }else{
        handleHtml(body);
    }
}
function handleHtml(html){
    let selecTool = cheerio.load(html);
    let coronaStatu = selecTool(".maincounter-number");
    // console.log(coronaStatu.text());
   let totalCases = selecTool(coronaStatu[0]).text();
   console.log("Total Cases-> " +totalCases);
   let totalDeaths = selecTool(coronaStatu[1]).text();
   console.log("Total Deaths-> " +totalDeaths);
   let totalRecovery = selecTool(coronaStatu[2]).text();
   console.log("Total Recovery-> " +totalRecovery);
}