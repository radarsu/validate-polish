var polishValidator = {
    pesel: function(pesel) {
        var reg = /^[0-9]{11}$/;
        if (reg.test(pesel) === false) {
            return false;
        } else {

            var dig = ("" + pesel).split("");
            var control = (1 * parseInt(dig[0]) + 3 * parseInt(dig[1]) + 7 * parseInt(dig[2]) + 9 * parseInt(dig[3]) + 1 * parseInt(dig[4]) + 3 * parseInt(dig[5]) + 7 * parseInt(dig[6]) + 9 * parseInt(dig[7]) + 1 * parseInt(dig[8]) + 3 * parseInt(dig[9])) % 10;
            if (control === 0) {
                control = 10;
            }
            control = 10 - control;
            if (parseInt(dig[10]) === control) {
                return true;
            } else {
                return false;
            }

        }
    },
    nip: function(nip) {
        if (typeof nip !== "string") {
            return false;
        }

        var nipWithoutDashes = nip.replace(/-/g, "");
        var reg = /^[0-9]{10}$/;
        if (reg.test(nipWithoutDashes) === false) {
            return false;
        } else {

            var dig = ("" + nipWithoutDashes).split("");
            var control = (6 * parseInt(dig[0]) + 5 * parseInt(dig[1]) + 7 * parseInt(dig[2]) + 2 * parseInt(dig[3]) + 3 * parseInt(dig[4]) + 4 * parseInt(dig[5]) + 5 * parseInt(dig[6]) + 6 * parseInt(dig[7]) + 7 * parseInt(dig[8])) % 11;
            if (parseInt(dig[9]) === control) {
                return true;
            } else {
                return false;
            }

        }
    },
    regon: function(regon) {
        var reg = /^[0-9]{9}$/;
        if (reg.test(regon) === false) {
            return false;
        } else {

            var dig = ("" + regon).split("");
            var control = (8 * parseInt(dig[0]) + 9 * parseInt(dig[1]) + 2 * parseInt(dig[2]) + 3 * parseInt(dig[3]) + 4 * parseInt(dig[4]) + 5 * parseInt(dig[5]) + 6 * parseInt(dig[6]) + 7 * parseInt(dig[7])) % 11;
            if (control == 10) control = 0;
            if (parseInt(dig[8]) == control) {
                return true;
            } else {
                return false;
            }

        }
    },
    identityCard: function(number) {
        // Check length
        if (!number || number.length !== 9) {
            return false;
        }

        number = number.toUpperCase();
        var letterValues = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        var getLetterValue = function(letter) {
            for (j = 0, max = letterValues.length; j < max; j++) {
                if (letter === letterValues[j]) {
                    return j;
                }
            }
            return -1;
        };

        //Check series
        for (i = 0; i < 3; i++) {
            if (getLetterValue(number[i]) < 10) {
                return false;
            }
        }
        //Check number
        for (i = 3; i < 9; i++) {
            if (getLetterValue(number[i]) < 0 || getLetterValue(number[i]) > 9) {
                return false;
            }
        }

        // Checksum
        var sum = 7 * getLetterValue(number[0]) +
            3 * getLetterValue(number[1]) +
            1 * getLetterValue(number[2]) +
            7 * getLetterValue(number[4]) +
            3 * getLetterValue(number[5]) +
            1 * getLetterValue(number[6]) +
            7 * getLetterValue(number[7]) +
            3 * getLetterValue(number[8]);

        sum %= 10;

        if (sum !== getLetterValue(number[3])) {
            return false;
        }

        return true;
    },
    /**
     * Checks if given number of identity card is valid
     * @param {string} number - series and number of identity card to validate
     * @return {boolean} - true if identity card is valid, false if invalid
     */
    identityCardWithSeparator: function(number) {
        var self = this;

        //Check length
        if (!number || number.length !== 10) {
            return false;
        }

        //Check separator
        if (number[3] !== ' ' && number[3] !== '-') {
            return false;
        }

        number = number.replace(/[\s-]/g, '');
        return self.identityCard(number);
    }
};

module.exports = polishValidator;
