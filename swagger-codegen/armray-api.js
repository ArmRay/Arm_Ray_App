var path = require('path');
var generator = require('swagger-node-codegen');
var your_api = require('../armray.json');
 
generator.generate({
  swagger: your_api,
  target_dir: path.resolve(__dirname, '../server/instances/api')
}, (err) => {
  if (err) return console.error(`Something went wrong: ${err.message}`);
  console.log('Done!');
});
