import { invalidNips, nips } from '../__tests-utils__';

import { validatePolish } from '../src';

test(`nip`, () => {
    for (const nip of nips) {
        const isValid = validatePolish.nip(nip);
        expect(isValid).toBeTruthy();
    }

    for (const nip of invalidNips) {
        const isValid = validatePolish.nip(nip);
        expect(isValid).toBeFalsy();
    }
});
