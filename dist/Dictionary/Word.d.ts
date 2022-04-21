export declare class Word {
    protected name: string;
    /**
     * A constructor of {@link Word} class which gets a String name as an input and assigns to the name variable.
     *
     * @param name String input.
     */
    constructor(name: string);
    /**
     * The overridden toString method returns the name variable.
     *
     * @return the name variable.
     */
    toString(): string;
    /**
     * The charCount method returns the length of name variable.
     *
     * @return the length of name variable.
     */
    charCount(): number;
    /**
     * Getter for the name variable.
     *
     * @return name variable.
     */
    getName(): string;
    /**
     * Setter for the name variable.
     *
     * @param name String input.
     */
    setName(name: string): void;
    /**
     * The beforeLastVowel method takes a {@link String} stem as an input. It loops through the given stem and returns
     * the second last vowel.
     *
     * @param stem String input.
     * @return Vowel before the last vowel.
     */
    static beforeLastVowel(stem: string): string;
    /**
     * The lastVowel method takes a {@link String} stem as an input. It loops through the given stem and returns
     * the last vowel.
     *
     * @param stem String input.
     * @return the last vowel.
     */
    static lastVowel(stem: string): string;
    /**
     * The lastPhoneme method takes a {@link String} stem as an input. It then returns the last phoneme of the given stem.
     *
     * @param stem String input.
     * @return the last phoneme.
     */
    static lastPhoneme(stem: string): string;
    /**
     * The isCapital method takes a String surfaceForm as an input and returns true if the character at first index of surfaceForm
     * is a capital letter, false otherwise.
     *
     * @param surfaceForm String input to check the first character.
     * @return true if the character at first index of surfaceForm is a capital letter, false otherwise.
     */
    static isCapital(surfaceForm: string): boolean;
    /**
     * The isPunctuation method takes a String surfaceForm as an input and returns true if it is a punctuation, false otherwise.
     * Grave accent : \u0060
     * Left quotation mark : \u201C
     * Right quotation mark : \u201D
     * Left single quotation mark : \u2018
     *Horizontal ellipsis : \u2026
     *
     * @param surfaceForm String input to check.
     * @return true if it is a punctuation, false otherwise.
     */
    static isPunctuation(surfaceForm: string): boolean;
    /**
     * The isHonorific method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to "bay" or "bayan", false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to "bay" or "bayan", false otherwise.
     */
    static isHonorific(surfaceForm: string): boolean;
    /**
     * The isOrganization method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
     */
    static isOrganization(surfaceForm: string): boolean;
    /**
     * The isMoney method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
     */
    static isMoney(surfaceForm: string): boolean;
    /**
     * The isPunctuation method without any argument, it checks name variable whether it is a punctuation or not and
     * returns true if so.
     *
     * @return true if name is a punctuation.
     */
    isPunctuation(): boolean;
    /**
     * The isTime method takes a String surfaceForm as an input and after converting it to lower case it checks some cases.
     * If it is in the form of 12:23:34 or 12:23 it returns true.
     * If it starts with name of months; ocak, şubat, mart, nisan, mayıs, haziran, temmuz, ağustos, eylül, ekim, kasım, aralık it returns true.
     * If it equals to the name of days; pazar, pazartesi, salı, çarşamba, perşembe, cuma, cumartesi it returns true.
     *
     * @param surfaceForm String input to check.
     * @return true if it presents time, and false otherwise.
     */
    static isTime(surfaceForm: string): boolean;
    /**
     * The toWordArray method takes a String {@link Array} sourceArray as an input. First it creates
     * a {@link Word} type result array and puts items of input sourceArray to this result {@link Array}.
     *
     * @param sourceArray String {@link Array}.
     * @return Word type {@link Array}.
     */
    static toWordArray(sourceArray: Array<string>): Array<Word>;
    /**
     * The toCharacters method creates a {@link Word} type characters {@link Array} and adds characters of name variable
     * to newly created {@link Array}.
     *
     * @return Word type {@link Array}.
     */
    toCharacters(): Array<Word>;
}
