import { identityCards, invalidIdentityCards } from '../__tests-utils__';

import { validatePolish } from '../src';

test(`identity card`, () => {
    for (const identityCard of identityCards) {
        const isValid = validatePolish.identityCard(identityCard);
        expect(isValid).toBeTruthy();
    }

    for (const identityCard of invalidIdentityCards) {
        const isValid = validatePolish.identityCard(identityCard);
        expect(isValid).toBeFalsy();
    }
});
