import { invalidRegons, regons } from '../__tests-utils__';

import { validatePolish } from '../src';

test(`regon`, () => {
    for (const regon of regons) {
        const isValid = validatePolish.regon(regon);
        expect(isValid).toBeTruthy();
    }

    for (const regon of invalidRegons) {
        const isValid = validatePolish.regon(regon);
        expect(isValid).toBeFalsy();
    }

    // 100000008 is a real 9-digit checksum. A tenth digit is not a REGON.
    expect(validatePolish.regon(`100000008`)).toBeTruthy();
    expect(validatePolish.regon(`1000000086`)).toBeFalsy();
});
