var path = require('path');
var generator = require('swagger-node-codegen');
var your_api = require('../armray-retrieve-api.json');
 
generator.generate({
  swagger: your_api,
  target_dir: path.resolve(__dirname, './api-gen/retrieve')
}, (err) => {
  if (err) return console.error(`Something went wrong: ${err.message}`);
  console.log('Done!');
});
