export const validatePolish = {
    checksum: (number: string, weights: number[]) => {
        const max = number.length - 1;
        let sum = 0;

        for (let i = 0; i < max; ++i) {
            const n = parseInt(number.charAt(i), 10);
            sum += n * (weights[i] as number);
        }

        const control = sum % 11;
        const resultSum = control === 10 ? 0 : control;
        const lastDigit = parseInt(number.slice(-1), 10);

        return resultSum === lastDigit;
    },

    /**
     * Validation of PESEL.
     */
    pesel(pesel: string): boolean {
        const monthWithCentury = Number(pesel.substring(2, 4));

        // Century is encoded in month: https://en.wikipedia.org/wiki/PESEL.
        if (!monthWithCentury || monthWithCentury % 20 > 12) {
            return false;
        }

        const day = Number(pesel.substring(4, 6));
        if (!day || day < 1 || day > 31) {
            return false;
        }

        if (!/^[0-9]{11}$/u.test(pesel)) {
            return false;
        }

        const times = [1, 3, 7, 9];
        const digits = `${pesel}`.split(``).map((digit) => {
            return parseInt(digit, 10);
        });

        const [dig11] = digits.splice(-1);

        const control =
            digits.reduce((previousValue, currentValue, index) => {
                return previousValue + currentValue * (times[index % 4] as number);
            }) % 10;

        return 10 - (control === 0 ? 10 : control) === dig11;
    },

    /**
     * Validation of NIP.
     */
    nip(nip: string): boolean {
        if (typeof nip !== `string`) {
            return false;
        }

        const nipWithoutDashes = nip.replace(/-/gu, ``);
        const reg = /^[0-9]{10}$/u;
        if (!reg.test(nipWithoutDashes)) {
            return false;
        }

        const dig = String(nipWithoutDashes).split(``);
        const controlValues = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        const partialSums = controlValues.map((controlValue, index) => {
            return controlValue * parseInt((dig[index] as string), 10);
        });

        let sum = 0;
        partialSums.forEach((partialSum) => {
            sum += partialSum;
        });

        const control = sum % 11;

        if (parseInt((dig[9] as string), 10) === control) {
            return true;
        }

        return false;
    },

    /**
     * Validation of REGON.
     */
    regon(regon: string): boolean {
        const reg = /^[0-9]{9,14}$/u;
        if (!reg.test(regon)) {
            return false;
        }

        const weights9: number[] = [8, 9, 2, 3, 4, 5, 6, 7];

        if (regon.length === 9) {
            return validatePolish.checksum(regon, weights9);
        }

        const weights14: number[] = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
        return validatePolish.checksum(regon.slice(0, 9), weights9) && validatePolish.checksum(regon, weights14);
    },

    /**
     * Validation of identity card.
     */
    identityCard(num: string): boolean {
        // Check length.
        if (!num || num.length !== 9) {
            return false;
        }

        const upperNum = num.toUpperCase();
        const letterValues = [
            `0`,
            `1`,
            `2`,
            `3`,
            `4`,
            `5`,
            `6`,
            `7`,
            `8`,
            `9`,
            `A`,
            `B`,
            `C`,
            `D`,
            `E`,
            `F`,
            `G`,
            `H`,
            `I`,
            `J`,
            `K`,
            `L`,
            `M`,
            `N`,
            `O`,
            `P`,
            `Q`,
            `R`,
            `S`,
            `T`,
            `U`,
            `V`,
            `W`,
            `X`,
            `Y`,
            `Z`,
        ];

        const getLetterValue = (letter: string) => {
            for (let j = 0, max = letterValues.length; j < max; j++) {
                if (letter === letterValues[j]) {
                    return j;
                }
            }
            return -1;
        };

        // Check series.
        for (let i = 0; i < 3; ++i) {
            if (getLetterValue((upperNum[i] as string)) < 10) {
                return false;
            }
        }

        // Check number.
        for (let i = 3; i < 9; ++i) {
            if (getLetterValue((upperNum[i] as string)) < 0 || getLetterValue((upperNum[i] as string)) > 9) {
                return false;
            }
        }

        // Calculate checksum.
        let sum =
            7 * getLetterValue((upperNum[0] as string)) +
            3 * getLetterValue((upperNum[1] as string)) +
            Number(getLetterValue((upperNum[2] as string))) +
            7 * getLetterValue((upperNum[4] as string)) +
            3 * getLetterValue((upperNum[5] as string)) +
            Number(getLetterValue((upperNum[6] as string))) +
            7 * getLetterValue((upperNum[7] as string)) +
            3 * getLetterValue((upperNum[8] as string));

        sum %= 10;

        if (sum !== getLetterValue((upperNum[3] as string))) {
            return false;
        }

        return true;
    },

    /**
     * Checks if given number of identity card is valid.
     */
    identityCardWithSeparator(num: string): boolean {
        // check length
        if (!num || num.length !== 10) {
            return false;
        }

        // check separator
        if (num[3] !== ` ` && num[3] !== `-`) {
            return false;
        }

        return this.identityCard(num.replace(/[\s-]/gu, ``));
    },
};
