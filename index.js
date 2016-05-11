var polishValidator = function() {

};

polishValidator.prototype = {
    pesel: function(pesel) {
        var reg = /^[0-9]{11}$/;
        if (reg.test(pesel) === false) {
            return false;
        } else {
            var dig = ("" + pesel).split("");
            var kontrola = (1 * parseInt(dig[0]) + 3 * parseInt(dig[1]) + 7 * parseInt(dig[2]) + 9 * parseInt(dig[3]) + 1 * parseInt(dig[4]) + 3 * parseInt(dig[5]) + 7 * parseInt(dig[6]) + 9 * parseInt(dig[7]) + 1 * parseInt(dig[8]) + 3 * parseInt(dig[9])) % 10;
            if (kontrola === 0) {
                kontrola = 10;
            }
            kontrola = 10 - kontrola;
            if (parseInt(dig[10]) === kontrola) {
                return true;
            } else {
                return false;
            }
        }
    },
    nip: function(nip) {
        var nip_bez_kresek = nip.replace(/-/g, "");
        var reg = /^[0-9]{10}$/;
        if (reg.test(nip_bez_kresek) === false) {
            return false;
        } else {
            var dig = ("" + nip_bez_kresek).split("");
            var kontrola = (6 * parseInt(dig[0]) + 5 * parseInt(dig[1]) + 7 * parseInt(dig[2]) + 2 * parseInt(dig[3]) + 3 * parseInt(dig[4]) + 4 * parseInt(dig[5]) + 5 * parseInt(dig[6]) + 6 * parseInt(dig[7]) + 7 * parseInt(dig[8])) % 11;
            if (parseInt(dig[9]) === kontrola) {
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
            var kontrola = (8 * parseInt(dig[0]) + 9 * parseInt(dig[1]) + 2 * parseInt(dig[2]) + 3 * parseInt(dig[3]) + 4 * parseInt(dig[4]) + 5 * parseInt(dig[5]) + 6 * parseInt(dig[6]) + 7 * parseInt(dig[7])) % 11;
            if (kontrola == 10) kontrola = 0;
            if (parseInt(dig[8]) == kontrola) {
                return true;
            } else {
                return false;
            }
        }
    }
};

module.exports = polishValidator;
