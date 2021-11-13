import { Language } from "./Language";
export declare class TurkishLanguage extends Language {
    static VOWELS: string;
    static BACK_VOWELS: string;
    static FRONT_VOWELS: string;
    static BACK_ROUNDED_VOWELS: string;
    static BACK_UNROUNDED_VOWELS: string;
    static FRONT_ROUNDED_VOWELS: string;
    static FRONT_UNROUNDED_VOWELS: string;
    static CONSONANT_DROPS: string;
    static CONSONANTS: string;
    static SERT_SESSIZ: string;
    static LOWERCASE_LETTERS: string;
    static UPPERCASE_LETTERS: string;
    static LETTERS: string;
    /**
     * The isVowel method takes a character as an input and returns true if given character is a vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a vowel.
     */
    static isVowel(ch: string): boolean;
    /**
     * The isBackVowel method takes a character as an input and returns true if given character is a back vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back vowel.
     */
    static isBackVowel(ch: string): boolean;
    /**
     * The isFrontVowel method takes a character as an input and returns true if given character is a front vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front vowel.
     */
    static isFrontVowel(ch: string): boolean;
    /**
     * The isBackRoundedVowel method takes a character as an input and returns true if given character is a back rounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back rounded vowel.
     */
    static isBackRoundedVowel(ch: string): boolean;
    /**
     * The isFrontRoundedVowel method takes a character as an input and returns true if given character is a front rounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front rounded vowel.
     */
    static isFrontRoundedVowel(ch: string): boolean;
    /**
     * The isBackUnroundedVowel method takes a character as an input and returns true if given character is a back unrounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back unrounded vowel.
     */
    static isBackUnroundedVowel(ch: string): boolean;
    /**
     * The isFrontUnroundedVowel method takes a character as an input and returns true if given character is a front unrounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front unrounded vowel.
     */
    static isFrontUnroundedVowel(ch: string): boolean;
    /**
     * The isConsonantDrop method takes a character as an input and returns true if given character is a dropping consonant.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a dropping consonant.
     */
    static isConsonantDrop(ch: string): boolean;
    /**
     * The isConsonant method takes a character as an input and returns true if given character is a consonant.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a consonant.
     */
    static isConsonant(ch: string): boolean;
    /**
     * The isSertSessiz method takes a character as an input and returns true if given character is a sert sessiz.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a sert sessiz.
     */
    static isSertSessiz(ch: string): boolean;
}
