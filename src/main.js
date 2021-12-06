const axios = require("axios");
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');
const fs = require('fs');
const lib = require('./lib');
const read = require('node-readability');

const mainurl = 'https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1'
// For Node.js

var gfm = turndownPluginGfm.gfm
var turndownService = new TurndownService({
  headingStyle: 'atx',
})

turndownService
  .use(gfm)
  .remove([ 'script', 'style' ])
  
var markdown = turndownService.turndown('<strike>Hello world!</strike><script>console.log(your mom)</script><br><h1>Chad is the shit!</h1>')

console.log(markdown)

//axios.get("https://world.openfoodfacts.org/category/pastas/1.json")

//axios.get("http://webcode.me")
  //.then(response => {
    // access parsed JSON response data using response.data field
    //data = response.data
    //console.log(data.count)
    //console.log(data.products)
    //console.log(data)
  //})
 // .catch(error => {
  //  if (error.response) {
      //get HTTP error code
    //  console.log(error.reponse.status)
 //   } else {
 //     console.log(error.message)
 //   }
//  }) point
  
 

async function makeGetRequest() {

  let res = await axios.get('https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1');

  let data = res.data;
  //console.log(data);
  

var gfm2 = turndownPluginGfm.gfm

var turndownService2 = new TurndownService({
headingStyle: 'atx',
})

turndownService2
  .remove(['script', 'style'])
  .use(gfm2)

var markdown2 = turndownService2.turndown(data)

//var markdown2 = await turndownService2.turndown('<h1>Hello world!</h1>')

console.log(markdown2)

var filename = "./rawhtml.html"

fs.writeFile(filename, data,  function (err) {
  if (err) return console.log(err);
  console.log("rawhtml.html saved");
});
console.log("makeGetRequest")
makeGetRequest();

function saveRawHtml() {
  try {
    fs.writeFileSync('raw.html', data)
    //file written successfully
    console.log("saved raw.html")
  } catch (err) {
    console.error(err)
  }
}

//saveRawHtml();

function importModule() {

  try {
    const result = lib.chad();
    //file written successfully
    console.log("chad passed-")
  }  catch (err) {
  console.error(err)
  }
}
importModule();

  
// Use fs.readFile() method to read the file 
fs.readFile('./rawhtml.html', (err, data) => { 

    console.log(data); 

 }) 

console.log("fs2sń")
var readability = require("readability");
//var html = "<html>xxxxxxxxxxx</html>";
readability.parse(data, function(err, article){
  article = {
    title: "", // page title 
    text: "", //text content
    html: "", //pretty html content
    time: {
      title: 10, //parse title elapsed milliseconds
      article: 100 //parse content elapsed milliseconds
    }
  }
  
});



}
