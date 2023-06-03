// cheerio passes HTML and it traverse the html to that data can be manipulated according to user's needs
const cheerio = require("cheerio");

let html = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;

// cheerio store data in object form
let selecTool = cheerio.load(html);
let fruitName = selecTool("#fruits");
console.log(fruitName.text());
