# validate-polish
Validation of pesel, nip, regon, identity card etc.

npm install -g validator-polish

`````
import validatePolish = require('validate-polish');

let pesel = "92060512181";
if (!validatePolish.pesel(pesel)) {
  throw new Error("Invalid pesel.");
}

let nip = "115667734";
if (!validatePolish.nip(nip)) {
  throw new Error("Invalid nip.");
}

let regon = "1251677";
if (!validatePolish.regon(regon)) {
  throw new Error("Invalid regon.");
}

let identityCard = "ATG3123151";
if (!validatePolish.identityCard(identityCard)) {
  throw new Error("Invalid nip.");
}
`````
