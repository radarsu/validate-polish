export declare const validatePolish: {
    /**
     * Validation of PESEL.
     * @param {string} pesel
     * @returns
     */
    pesel(pesel: string): boolean;
    /**
     * Validation of NIP.
     * @param {*} nip
     * @returns
     */
    nip(nip: string): boolean;
    /**
     * Validation of REGON.
     * @param {string} regon
     * @returns
     */
    regon(regon: string): boolean;
    /**
     * Validation of identity card.
     * @param {*} num
     * @returns
     */
    identityCard(num: string): boolean;
    /**
     * Checks if given number of identity card is valid.
     * @param {string} num - series and number of identity card to validate
     * @return {boolean} - true if identity card is valid, false if invalid
     */
    identityCardWithSeparator(num: string): boolean;
};
