import {Language} from "./Language"

export class TurkishLanguage extends Language{

    public static VOWELS = "aeıioöuüâî"
    public static BACK_VOWELS = "aıouâ"
    public static FRONT_VOWELS = "eiöüî"
    public static BACK_ROUNDED_VOWELS = "ou"
    public static BACK_UNROUNDED_VOWELS = "aıâ"
    public static FRONT_ROUNDED_VOWELS = "öü"
    public static FRONT_UNROUNDED_VOWELS = "eiî"
    public static CONSONANT_DROPS = "nsy"
    public static CONSONANTS = "bcçdfgğhjklmnprsştvyzxqw"
    public static SERT_SESSIZ = "çfhkpsşt"
    public static LOWERCASE_LETTERS = "abcçdefgğhıijklmnoöprsştuüvyz"
    public static UPPERCASE_LETTERS = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ"
    public static LETTERS = TurkishLanguage.LOWERCASE_LETTERS + TurkishLanguage.UPPERCASE_LETTERS

    /**
     * The isVowel method takes a character as an input and returns true if given character is a vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a vowel.
     */
    static isVowel(ch: string): boolean{
        return TurkishLanguage.VOWELS.includes(ch)
    }

    /**
     * The isBackVowel method takes a character as an input and returns true if given character is a back vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back vowel.
     */
    static isBackVowel(ch: string): boolean{
        return TurkishLanguage.BACK_VOWELS.includes(ch)
    }

    /**
     * The isFrontVowel method takes a character as an input and returns true if given character is a front vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front vowel.
     */
    static isFrontVowel(ch: string): boolean{
        return TurkishLanguage.FRONT_VOWELS.includes(ch)
    }

    /**
     * The isBackRoundedVowel method takes a character as an input and returns true if given character is a back rounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back rounded vowel.
     */
    static isBackRoundedVowel(ch: string): boolean{
        return TurkishLanguage.BACK_ROUNDED_VOWELS.includes(ch)
    }

    /**
     * The isFrontRoundedVowel method takes a character as an input and returns true if given character is a front rounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front rounded vowel.
     */
    static isFrontRoundedVowel(ch: string): boolean{
        return TurkishLanguage.FRONT_ROUNDED_VOWELS.includes(ch)
    }

    /**
     * The isBackUnroundedVowel method takes a character as an input and returns true if given character is a back unrounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a back unrounded vowel.
     */
    static isBackUnroundedVowel(ch: string): boolean{
        return TurkishLanguage.BACK_UNROUNDED_VOWELS.includes(ch)
    }

    /**
     * The isFrontUnroundedVowel method takes a character as an input and returns true if given character is a front unrounded vowel.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a front unrounded vowel.
     */
    static isFrontUnroundedVowel(ch: string): boolean{
        return TurkishLanguage.FRONT_UNROUNDED_VOWELS.includes(ch)
    }

    /**
     * The isConsonantDrop method takes a character as an input and returns true if given character is a dropping consonant.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a dropping consonant.
     */
    static isConsonantDrop(ch: string): boolean{
        return TurkishLanguage.CONSONANT_DROPS.includes(ch)
    }

    /**
     * The isConsonant method takes a character as an input and returns true if given character is a consonant.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a consonant.
     */
    static isConsonant(ch: string): boolean{
        return TurkishLanguage.CONSONANTS.includes(ch)
    }

    /**
     * The isSertSessiz method takes a character as an input and returns true if given character is a sert sessiz.
     *
     * @param ch {@link Character} input to check.
     * @return true if given character is a sert sessiz.
     */
    static isSertSessiz(ch: string): boolean{
        return TurkishLanguage.SERT_SESSIZ.includes(ch)
    }
}