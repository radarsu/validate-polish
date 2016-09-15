// Type definitions for milliseconds
// Project: http://npmjs.com/milliseconds
// Definitions by: Elmar Burke <github.com/elmarburke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PolishValidator {
    pesel(pesel: string): boolean;
    nip(nip: string): boolean;
    regon(regon: string): boolean;
    identityCard(identityCard: string): boolean;
    identityCardWithSeparator(identityCardWithSeparator: string): boolean;
}

declare let polishValidator: PolishValidator;

declare module "validate-polish" {
    export = polishValidator;
}
