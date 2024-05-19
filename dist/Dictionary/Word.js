(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Language/TurkishLanguage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Word = void 0;
    const TurkishLanguage_1 = require("../Language/TurkishLanguage");
    class Word {
        /**
         * A constructor of {@link Word} class which gets a String name as an input and assigns to the name variable.
         *
         * @param name String input.
         */
        constructor(name) {
            this.name = name;
        }
        /**
         * The overridden toString method returns the name variable.
         *
         * @return the name variable.
         */
        toString() {
            return this.name;
        }
        /**
         * The charCount method returns the length of name variable.
         *
         * @return the length of name variable.
         */
        charCount() {
            return this.name.length;
        }
        /**
         * Getter for the name variable.
         *
         * @return name variable.
         */
        getName() {
            return this.name;
        }
        /**
         * Setter for the name variable.
         *
         * @param name String input.
         */
        setName(name) {
            this.name = name;
        }
        /**
         * The beforeLastVowel method takes a {@link String} stem as an input. It loops through the given stem and returns
         * the second last vowel.
         *
         * @param stem String input.
         * @return Vowel before the last vowel.
         */
        static beforeLastVowel(stem) {
            let before = 1;
            let last = '0';
            for (let i = stem.length - 1; i >= 0; i--) {
                if (TurkishLanguage_1.TurkishLanguage.isVowel(stem.charAt(i))) {
                    if (before == 1) {
                        last = stem.charAt(i);
                        before--;
                        continue;
                    }
                    return stem.charAt(i);
                }
            }
            return last;
        }
        /**
         * The lastVowel method takes a {@link String} stem as an input. It loops through the given stem and returns
         * the last vowel.
         *
         * @param stem String input.
         * @return the last vowel.
         */
        static lastVowel(stem) {
            for (let i = stem.length - 1; i >= 0; i--) {
                if (TurkishLanguage_1.TurkishLanguage.isVowel(stem.charAt(i))) {
                    return stem.charAt(i);
                }
            }
            for (let i = stem.length - 1; i >= 0; i--) {
                if (stem.charAt(i) >= '0' && stem.charAt(i) <= '9') {
                    return stem.charAt(i);
                }
            }
            return '0';
        }
        /**
         * The lastPhoneme method takes a {@link String} stem as an input. It then returns the last phoneme of the given stem.
         *
         * @param stem String input.
         * @return the last phoneme.
         */
        static lastPhoneme(stem) {
            if (stem.length == 0) {
                return ' ';
            }
            if (stem.charAt(stem.length - 1) != '\'') {
                return stem.charAt(stem.length - 1);
            }
            else {
                return stem.charAt(stem.length - 2);
            }
        }
        /**
         * The isCapital method takes a String surfaceForm as an input and returns true if the character at first index of surfaceForm
         * is a capital letter, false otherwise.
         *
         * @param surfaceForm String input to check the first character.
         * @return true if the character at first index of surfaceForm is a capital letter, false otherwise.
         */
        static isCapital(surfaceForm) {
            return TurkishLanguage_1.TurkishLanguage.UPPERCASE_LETTERS.includes(surfaceForm.charAt(0));
        }
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
        static isPunctuation(surfaceForm) {
            return (surfaceForm == "." || surfaceForm == "..." || surfaceForm == "[" || surfaceForm == "]" ||
                surfaceForm == "\u2026" || surfaceForm == "%" || surfaceForm == "&" || surfaceForm == "=" ||
                surfaceForm == "\u0060\u0060" || surfaceForm == "\u0060" || surfaceForm == "''" || surfaceForm == "$" ||
                surfaceForm == "!" || surfaceForm == "?" || surfaceForm == "," || surfaceForm == ":" ||
                surfaceForm == "--" || surfaceForm == ";" || surfaceForm == "(" || surfaceForm == ")" ||
                surfaceForm == "'" || surfaceForm == "\"" || surfaceForm == "\u201C" || surfaceForm == "\u2018" ||
                surfaceForm == "\u201D" || surfaceForm == "…" || surfaceForm == "\u25CF" || surfaceForm == "/" ||
                surfaceForm == "-" || surfaceForm == "+" || surfaceForm == "-LRB-" || surfaceForm == "-RRB-" ||
                surfaceForm == "-LCB-" || surfaceForm == "-RCB-" || surfaceForm == "-LSB-" || surfaceForm == "-RSB-");
        }
        /**
         * The isHonorific method takes a String surfaceForm as an input and after converting it to lower case it returns true
         * if it equals to "bay" or "bayan", false otherwise.
         *
         * @param surfaceForm String input to check.
         * @return true if it equals to "bay" or "bayan", false otherwise.
         */
        static isHonorific(surfaceForm) {
            let lowerCase = surfaceForm.toLocaleLowerCase("tr");
            return lowerCase == "bay" || lowerCase == "bayan";
        }
        /**
         * The isOrganization method takes a String surfaceForm as an input and after converting it to lower case it returns true
         * if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
         *
         * @param surfaceForm String input to check.
         * @return true if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
         */
        static isOrganization(surfaceForm) {
            let lowerCase = surfaceForm.toLocaleLowerCase("tr");
            return lowerCase == "corp" || lowerCase == "inc." || lowerCase == "co.";
        }
        /**
         * The isMoney method takes a String surfaceForm as an input and after converting it to lower case it returns true
         * if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
         *
         * @param surfaceForm String input to check.
         * @return true if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
         */
        static isMoney(surfaceForm) {
            let lowerCase = surfaceForm.toLocaleLowerCase("tr");
            return lowerCase.startsWith("dolar") || lowerCase.startsWith("sterlin") || lowerCase.startsWith("paunt")
                || lowerCase.startsWith("ons") || lowerCase.startsWith("ruble") || lowerCase.startsWith("mark") ||
                lowerCase.startsWith("frank") || lowerCase == "yen" || lowerCase.startsWith("sent") ||
                lowerCase.startsWith("cent") || lowerCase.startsWith("yen'") || lowerCase.includes("$");
        }
        /**
         * Converts the given string into its capital form
         * @param surfaceForm Given string which will be converted to its capital form
         * @return Capitalized form of the input string.
         */
        static toCapital(surfaceForm) {
            return surfaceForm.substring(0, 1).toLocaleUpperCase("tr") + surfaceForm.substring(1);
        }
        /**
         * The isPunctuation method without any argument, it checks name variable whether it is a punctuation or not and
         * returns true if so.
         *
         * @return true if name is a punctuation.
         */
        isPunctuation() {
            return Word.isPunctuation(this.name);
        }
        /**
         * The isTime method takes a String surfaceForm as an input and after converting it to lower case it checks some cases.
         * If it is in the form of 12:23:34 or 12:23 it returns true.
         * If it starts with name of months; ocak, şubat, mart, nisan, mayıs, haziran, temmuz, ağustos, eylül, ekim, kasım, aralık it returns true.
         * If it equals to the name of days; pazar, pazartesi, salı, çarşamba, perşembe, cuma, cumartesi it returns true.
         *
         * @param surfaceForm String input to check.
         * @return true if it presents time, and false otherwise.
         */
        static isTime(surfaceForm) {
            let lowerCase = surfaceForm.toLocaleLowerCase("tr");
            if (lowerCase.match("^(\\d\\d|\\d):(\\d\\d|\\d):(\\d\\d|\\d)$") || lowerCase.match("^(\\d\\d|\\d):(\\d\\d|\\d)$")) {
                return true;
            }
            if (lowerCase.startsWith("ocak") || lowerCase.startsWith("şubat") || lowerCase.startsWith("mart") ||
                lowerCase.startsWith("nisan") || lowerCase.startsWith("mayıs") || lowerCase.startsWith("haziran") ||
                lowerCase.startsWith("temmuz") || lowerCase.startsWith("ağustos") || lowerCase.startsWith("eylül") ||
                lowerCase.startsWith("ekim") || lowerCase.startsWith("kasım") || lowerCase == "aralık") {
                return true;
            }
            if (lowerCase == "pazar" || lowerCase == "salı" || lowerCase.startsWith("çarşamba") ||
                lowerCase.startsWith("perşembe") || lowerCase == "cuma" || lowerCase.startsWith("cumartesi") ||
                lowerCase.startsWith("pazartesi")) {
                return true;
            }
            if (lowerCase.includes("'")) {
                lowerCase = lowerCase.substring(0, lowerCase.indexOf("'"));
            }
            let time = Number.parseInt(lowerCase);
            if (time > 1900 && time < 2200) {
                return true;
            }
            return false;
        }
        /**
         * The toWordArray method takes a String {@link Array} sourceArray as an input. First it creates
         * a {@link Word} type result array and puts items of input sourceArray to this result {@link Array}.
         *
         * @param sourceArray String {@link Array}.
         * @return Word type {@link Array}.
         */
        static toWordArray(sourceArray) {
            let result = new Array();
            for (let i = 0; i < sourceArray.length; i++) {
                result.push(new Word(sourceArray[i]));
            }
            return result;
        }
        /**
         * The toCharacters method creates a {@link Word} type characters {@link Array} and adds characters of name variable
         * to newly created {@link Array}.
         *
         * @return Word type {@link Array}.
         */
        toCharacters() {
            let characters = new Array();
            for (let i = 0; i < this.name.length; i++) {
                characters.push(new Word("" + this.name.charAt(i)));
            }
            return characters;
        }
    }
    exports.Word = Word;
});
//# sourceMappingURL=Word.js.map