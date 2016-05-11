# validate-polish
Validation of PESEL, NIP, REGON etc.

npm install -g validate-polish

`````
var ValidatePolish = require('validate-polish');
var polishValidator = new ValidatePolish();

var pesel = "92060512181";
if (!polishValidator.pesel(pesel)) {
  throw new Error("Invalid pesel.");
}
`````
