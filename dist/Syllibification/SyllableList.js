(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Syllable", "../Language/TurkishLanguage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SyllableList = void 0;
    const Syllable_1 = require("./Syllable");
    const TurkishLanguage_1 = require("../Language/TurkishLanguage");
    class SyllableList {
        /**
         * A constructor of {@link SyllableList} class which takes a String word as an input. First it creates a syllable {@link Array}
         * and a {@link string} sbSyllable. Then it loops i times, where i ranges from 0 to length of given word, first
         * it gets the ith character of given word and checks whether it is a vowel and the last character of the word.
         * <p>
         * If it is a vowel it appends it to the sbSyllable and if it is the last vowel it also appends the next character to the sbSyllable.
         * Then, it adds the sbSyllable tot he syllables {@link Array}.
         * <p>
         * If it is not a vowel, and the sbSyllable's length is 1 also the previous character is a consonant it gets the last item of
         * syllables {@link Array} since there cannot be a Turkish word which starts with two consonants. However, if it is
         * two last characters of word, then it adds it to the syllable {@link Array}. At the end, it updates the syllables {@link Array}.
         *
         * @param word String input.
         */
        constructor(word) {
            this.syllables = new Array();
            let sbSyllable = "";
            for (let i = 0; i < word.length; i++) {
                let c = word.charAt(i);
                let isVowel = TurkishLanguage_1.TurkishLanguage.isVowel(c);
                let isLastChar = i == word.length - 1;
                if (isVowel) {
                    sbSyllable += c;
                    // If it is the last vowel.
                    if (i == word.length - 2) {
                        sbSyllable += word.charAt(i + 1);
                        i++;
                    }
                    this.syllables.push(new Syllable_1.Syllable(sbSyllable));
                    sbSyllable = "";
                }
                else {
                    // A syllable should not start with two consonants.
                    let tempSyl = sbSyllable;
                    if (tempSyl.length == 1) {
                        // The previous character was also a consonant.
                        if (!TurkishLanguage_1.TurkishLanguage.isVowel(tempSyl.charAt(0))) {
                            if (this.syllables.length == 0) {
                                sbSyllable += c;
                                continue;
                            }
                            let lastPos = this.syllables.length - 1;
                            let str = this.syllables[lastPos].getText();
                            str = str + tempSyl;
                            if (isLastChar) {
                                // If the last char is also a consonant, add it to latest syllable. Ex: 'park'.
                                str = str + c;
                            }
                            // Update previous syllable.
                            this.syllables.splice(lastPos, 1, new Syllable_1.Syllable(str));
                            sbSyllable = "";
                        }
                    }
                    sbSyllable += c;
                }
            }
        }
        /**
         * The getSyllables method creates a new {@link Array} syllables and loops through the globally defined syllables
         * {@link Array} and adds each item to the newly created syllables {@link Array}.
         *
         * @return ArrayList syllables.
         */
        getSyllables() {
            let syllables = new Array();
            for (let syllable of this.syllables) {
                syllables.push(syllable.getText());
            }
            return syllables;
        }
    }
    exports.SyllableList = SyllableList;
});
//# sourceMappingURL=SyllableList.js.map