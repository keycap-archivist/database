const fs = require('fs');
const path = require('path');
const AJV = require('ajv');

const catalog = fs.readFileSync(path.join(__dirname, '..', 'db', 'catalog.json'));
const schema = fs.readFileSync(path.join(__dirname, 'schema.json'));
const ajv = new AJV();
const validate = ajv.compile(JSON.parse(schema));
if (!validate(JSON.parse(catalog))) {
  console.log(validate.errors);
  process.exit(1);
} else {
  console.log('Catalog validated');
}
