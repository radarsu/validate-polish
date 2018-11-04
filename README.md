<p align="center">
    <a href="https://github.com/radarsu/validate-polish/" target="blank"><img src="https://raw.githubusercontent.com/radarsu/validate-polish/master/assets/logo.png" alt="validate-polish" /></a><br/>
    <strong>Simple validation of PESEL, NIP, REGON, identity card.</strong>
</p>

<p align="center">
<a href="https://github.com/Microsoft/TypeScript" target="blank">TypeScript</a> utility for Polish developers.<br/>
</p>

## Description

Utility library for validation of PESEL, NIP, REGON, identity card etc. Aimed at mostly at Polish enviroment. [Polish] Walidacja numerów pesel, nip, regon, dowodu osobistego.

## Installation

```sh
npm i validate-polish
```

## Features

- <strong>Fast, lightweight, no dependencies</strong> required.
- <strong>PESEL</strong> validation.
- <strong>NIP</strong> validation.
- <strong>REGON</strong> validation.
- <strong>Identity card</strong> ([Polish] <strong>dowód osobisty</strong>) validation.

## Usage
```ts
import validatePolish from 'validate-polish';

if (!validatePolish.pesel(`92060512181`)) {
    throw new Error(`Invalid pesel.`);
}

if (!validatePolish.nip('115667734')) {
    throw new Error(`Invalid nip.`);
}

if (!validatePolish.regon(`1251677`)) {
    throw new Error('Invalid regon.');
}

if (!validatePolish.identityCard(identityCard)) {
    throw new Error(`Invalid nip.`);
}
```
