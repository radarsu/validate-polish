export const validatePolish = {
    /**
     * Validation of PESEL.
     * @param {string} pesel
     * @returns
     */
    pesel(pesel: string) {
      if (!/^[0-9]{11}$/.test(pesel)) {
        return false;
      }
      const times = [1, 3, 7, 9];
      const digits = `${pesel}`.split('').map(digit => parseInt(digit, 10));
      const dig11 = digits.splice(-1)[0];
      let control = digits
        .reduce((previousValue, currentValue, index) => previousValue + currentValue * times[index % 4]) % 10;

      return 10 - (control === 0 ? 10 : control) === dig11;
    },
    /**
     * Validation of NIP.
     * @param {*} nip
     * @returns
     */
    nip(nip: string) {
        if (typeof nip !== 'string') {
            return false;
        }

        const nipWithoutDashes = nip.replace(/-/g, '');
        const reg = /^[0-9]{10}$/;
        if (reg.test(nipWithoutDashes) === false) {
            return false;
        } else {

            const dig = ('' + nipWithoutDashes).split('');
            const control = (6 * parseInt(dig[0], 10) + 5 * parseInt(dig[1], 10) + 7 * parseInt(dig[2], 10) + 2 * parseInt(dig[3], 10) + 3 * parseInt(dig[4], 10) + 4 * parseInt(dig[5], 10) + 5 * parseInt(dig[6], 10) + 6 * parseInt(dig[7], 10) + 7 * parseInt(dig[8], 10)) % 11;
            if (parseInt(dig[9], 10) === control) {
                return true;
            } else {
                return false;
            }

        }
    },
    /**
     * Validation of REGON.
     * @param {string} regon
     * @returns
     */
    regon(regon: string) {
        const reg = /^[0-9]{9}$/;
        if (reg.test(regon) === false) {
            return false;
        } else {

            const dig = ('' + regon).split('');
            let control = (8 * parseInt(dig[0], 10) + 9 * parseInt(dig[1], 10) + 2 * parseInt(dig[2], 10) + 3 * parseInt(dig[3], 10) + 4 * parseInt(dig[4], 10) + 5 * parseInt(dig[5], 10) + 6 * parseInt(dig[6], 10) + 7 * parseInt(dig[7], 10)) % 11;
            if (control === 10) {
                control = 0;
            }

            if (parseInt(dig[8], 10) === control) {
                return true;
            } else {
                return false;
            }

        }
    },
    /**
     * Validation of identity card.
     * @param {*} num
     * @returns
     */
    identityCard(num: string) {
        // Check length
        if (!num || num.length !== 9) {
            return false;
        }

        const upperNum = num.toUpperCase();
        const letterValues = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        const getLetterValue = (letter: string) => {
            for (let j = 0, max = letterValues.length; j < max; j++) {
                if (letter === letterValues[j]) {
                    return j;
                }
            }
            return -1;
        };

        // check series
        for (let i = 0; i < 3; i++) {
            if (getLetterValue(upperNum[i]) < 10) {
                return false;
            }
        }
        // check number
        for (let i = 3; i < 9; i++) {
            if (getLetterValue(upperNum[i]) < 0 || getLetterValue(upperNum[i]) > 9) {
                return false;
            }
        }

        // checksum
        let sum = 7 * getLetterValue(upperNum[0]) +
            3 * getLetterValue(upperNum[1]) +
            1 * getLetterValue(upperNum[2]) +
            7 * getLetterValue(upperNum[4]) +
            3 * getLetterValue(upperNum[5]) +
            1 * getLetterValue(upperNum[6]) +
            7 * getLetterValue(upperNum[7]) +
            3 * getLetterValue(upperNum[8]);

        sum %= 10;

        if (sum !== getLetterValue(upperNum[3])) {
            return false;
        }

        return true;
    },
    /**
     * Checks if given number of identity card is valid.
     * @param {string} num - series and number of identity card to validate
     * @return {boolean} - true if identity card is valid, false if invalid
     */
    identityCardWithSeparator(num: string) {
        // check length
        if (!num || num.length !== 10) {
            return false;
        }

        // check separator
        if (num[3] !== ' ' && num[3] !== '-') {
            return false;
        }

        return this.identityCard(num.replace(/[\s-]/g, ''));
    }
};

export default validatePolish;