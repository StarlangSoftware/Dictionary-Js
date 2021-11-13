(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Language"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishLanguage = void 0;
    const Language_1 = require("./Language");
    class TurkishLanguage extends Language_1.Language {
        /**
         * The isVowel method takes a character as an input and returns true if given character is a vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a vowel.
         */
        static isVowel(ch) {
            return TurkishLanguage.VOWELS.includes(ch);
        }
        /**
         * The isBackVowel method takes a character as an input and returns true if given character is a back vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a back vowel.
         */
        static isBackVowel(ch) {
            return TurkishLanguage.BACK_VOWELS.includes(ch);
        }
        /**
         * The isFrontVowel method takes a character as an input and returns true if given character is a front vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a front vowel.
         */
        static isFrontVowel(ch) {
            return TurkishLanguage.FRONT_VOWELS.includes(ch);
        }
        /**
         * The isBackRoundedVowel method takes a character as an input and returns true if given character is a back rounded vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a back rounded vowel.
         */
        static isBackRoundedVowel(ch) {
            return TurkishLanguage.BACK_ROUNDED_VOWELS.includes(ch);
        }
        /**
         * The isFrontRoundedVowel method takes a character as an input and returns true if given character is a front rounded vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a front rounded vowel.
         */
        static isFrontRoundedVowel(ch) {
            return TurkishLanguage.FRONT_ROUNDED_VOWELS.includes(ch);
        }
        /**
         * The isBackUnroundedVowel method takes a character as an input and returns true if given character is a back unrounded vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a back unrounded vowel.
         */
        static isBackUnroundedVowel(ch) {
            return TurkishLanguage.BACK_UNROUNDED_VOWELS.includes(ch);
        }
        /**
         * The isFrontUnroundedVowel method takes a character as an input and returns true if given character is a front unrounded vowel.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a front unrounded vowel.
         */
        static isFrontUnroundedVowel(ch) {
            return TurkishLanguage.FRONT_UNROUNDED_VOWELS.includes(ch);
        }
        /**
         * The isConsonantDrop method takes a character as an input and returns true if given character is a dropping consonant.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a dropping consonant.
         */
        static isConsonantDrop(ch) {
            return TurkishLanguage.CONSONANT_DROPS.includes(ch);
        }
        /**
         * The isConsonant method takes a character as an input and returns true if given character is a consonant.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a consonant.
         */
        static isConsonant(ch) {
            return TurkishLanguage.CONSONANTS.includes(ch);
        }
        /**
         * The isSertSessiz method takes a character as an input and returns true if given character is a sert sessiz.
         *
         * @param ch {@link Character} input to check.
         * @return true if given character is a sert sessiz.
         */
        static isSertSessiz(ch) {
            return TurkishLanguage.SERT_SESSIZ.includes(ch);
        }
    }
    exports.TurkishLanguage = TurkishLanguage;
    TurkishLanguage.VOWELS = "aeıioöuüâî";
    TurkishLanguage.BACK_VOWELS = "aıouâ";
    TurkishLanguage.FRONT_VOWELS = "eiöüî";
    TurkishLanguage.BACK_ROUNDED_VOWELS = "ou";
    TurkishLanguage.BACK_UNROUNDED_VOWELS = "aıâ";
    TurkishLanguage.FRONT_ROUNDED_VOWELS = "öü";
    TurkishLanguage.FRONT_UNROUNDED_VOWELS = "eiî";
    TurkishLanguage.CONSONANT_DROPS = "nsy";
    TurkishLanguage.CONSONANTS = "bcçdfgğhjklmnprsştvyzxqw";
    TurkishLanguage.SERT_SESSIZ = "çfhkpsşt";
    TurkishLanguage.LOWERCASE_LETTERS = "abcçdefgğhıijklmnoöprsştuüvyz";
    TurkishLanguage.UPPERCASE_LETTERS = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
    TurkishLanguage.LETTERS = TurkishLanguage.LOWERCASE_LETTERS + TurkishLanguage.UPPERCASE_LETTERS;
});
//# sourceMappingURL=TurkishLanguage.js.map