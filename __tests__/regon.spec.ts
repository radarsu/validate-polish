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
});
