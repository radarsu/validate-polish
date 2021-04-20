<p align="center">
    <h1>validate-polish</h1>
    <div>Utility library for validation of PESEL, NIP, REGON, identity card etc. Aimed mostly at Polish enviroment. [Polish] Walidacja numerów pesel, nip, regon, dowodu osobistego.</div>
</p>

## Table of contents

1. [Getting Started](#getting-started)

2. [Usage](#usage)

3. [Features](#features)



## Getting Started
`npm i validate-polish`


## Usage
### General

```ts
import { validatePolish } from 'validate-polish';

if (!validatePolish.pesel(`92060512181`)) {
    throw new Error(`Invalid pesel.`);
}

if (!validatePolish.nip('115667734')) {
    throw new Error(`Invalid nip.`);
}

if (!validatePolish.regon(`1251677`)) {
    throw new Error(`Invalid regon.`);
}

if (!validatePolish.identityCard(`14124142`)) {
    throw new Error(`Invalid identity card.`);
}
```

### Browser

In browser validate-polish package is wrapped twice `validatePolish.validatePolish`.

```html
<script src="https://cdn.jsdelivr.net/npm/validate-polish@latest/dist/index.browser.js"></script>
<script>
    console.log(validatePolish.validatePolish);
</script>
```


## Features
-   **CDN** - available via cdn (https://cdn.jsdelivr.net/npm/validate-polish@latest/dist/index.browser.js)
-   **Cross-platform** - works in Node.js, browser and with bundlers such as webpack
-   **Fast, lightweight, 0 dependencies** - no dependencies ensure there are no security breaches from other packages
-   **Maintained** - if you need additional functionality feel free to create PR or an Issue
-   **Strongly typed** - library written fully in TypeScript
-   **Supports PESEL, REGON (9 and 14), NIP, IDENTITY CARD** - also validates day and month correctness including century encoded in month.
-   **Tested** - has tests on dozens of valid and invalid chunks of data to make sure validations are performed flawlessly

