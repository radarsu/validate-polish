export declare const validatePolish: {
    checksum: (number: string, weights: number[]) => boolean;
    /**
     * Validation of PESEL.
     */
    pesel(pesel: string): boolean;
    /**
     * Validation of NIP.
     */
    nip(nip: string): boolean;
    /**
     * Validation of REGON.
     */
    regon(regon: string): boolean;
    /**
     * Validation of identity card.
     */
    identityCard(num: string): boolean;
    /**
     * Checks if given number of identity card is valid.
     */
    identityCardWithSeparator(num: string): boolean;
};
