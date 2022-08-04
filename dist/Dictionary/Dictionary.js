(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Word", "./WordComparator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dictionary = void 0;
    const Word_1 = require("./Word");
    const WordComparator_1 = require("./WordComparator");
    class Dictionary {
        /**
         * Another constructor of {@link Dictionary} class which takes a {@link WordComparator} as an input and initializes
         * comparator variable with given input and also creates a new words {@link Array}.
         *
         * @param comparator {@link WordComparator} type input.
         */
        constructor(comparator) {
            this.words = [];
            this.comparator = WordComparator_1.WordComparator.TURKISH;
            this.wordComparator = (comparator) => (word1, word2) => (comparator == WordComparator_1.WordComparator.TURKISH ?
                word1.getName().localeCompare(word2.getName(), "tr") :
                (comparator == WordComparator_1.WordComparator.TURKISH_IGNORE_CASE ? word1.getName().toLocaleLowerCase("tr").localeCompare(word2.getName().toLocaleLowerCase("tr"), "tr") :
                    word1.getName().localeCompare(word2.getName(), "en")));
            this.comparator = comparator;
        }
        binarySearch(word) {
            let lo = 0;
            let hi = this.words.length - 1;
            while (lo <= hi) {
                let mid = Math.floor((lo + hi) / 2);
                if (this.words[mid].getName() == word.getName()) {
                    return mid;
                }
                if (this.wordComparator(this.comparator)(this.words[mid], word) <= 0) {
                    lo = mid + 1;
                }
                else {
                    hi = mid - 1;
                }
            }
            return -(lo + 1);
        }
        /**
         * The getWord method takes a String name as an input and performs binary search within words {@link Array} and assigns the result
         * to integer variable middle. If the middle is greater than 0, it returns the item at index middle of words {@link Array}, undefined otherwise.
         *
         * @param nameOrIndex String input.
         * @return the item at found index of words {@link Array}, undefined if cannot be found.
         */
        getWord(nameOrIndex) {
            if (!isNaN(nameOrIndex)) {
                return this.words[nameOrIndex];
            }
            else {
                let middle = this.binarySearch(new Word_1.Word(nameOrIndex));
                if (middle >= 0) {
                    return this.words[middle];
                }
                return undefined;
            }
        }
        /**
         * RemoveWord removes a word with the given name
         * @param name Name of the word to be removed.
         */
        removeWord(name) {
            let middle = this.binarySearch(new Word_1.Word(name));
            if (middle >= 0) {
                this.words.splice(middle, 1);
            }
        }
        /**
         * The getWordIndex method takes a String name as an input and performs binary search within words {@link Array} and assigns the result
         * to integer variable middle. If the middle is greater than 0, it returns the index middle, -1 otherwise.
         *
         * @param name String input.
         * @return found index of words {@link Array}, -1 if cannot be found.
         */
        getWordIndex(name) {
            let middle = this.binarySearch(new Word_1.Word(name));
            if (middle >= 0) {
                return middle;
            }
            return -1;
        }
        /**
         * The size method returns the size of the words {@link Array}.
         *
         * @return the size of the words {@link Array}.
         */
        size() {
            return this.words.length;
        }
        /**
         * The longestWordSize method loops through the words {@link Array} and returns the item with the maximum word length.
         *
         * @return the item with the maximum word length.
         */
        longestWordSize() {
            let max = 0;
            for (let word of this.words) {
                if (word.getName().length > max) {
                    max = word.getName().length;
                }
            }
            return max;
        }
        /**
         * The getWordStartingWith method takes a String hash as an input and performs binary search within
         * words {@link Array} and assigns the result to integer variable middle. If the middle is greater than 0, it
         * returns the index middle, -middle-1 otherwise.
         *
         * @param hash String input.
         * @return found index of words {@link Array}, -middle-1 if cannot be found.
         */
        getWordStartingWith(hash) {
            let middle = this.binarySearch(new Word_1.Word(hash));
            if (middle >= 0) {
                return middle;
            }
            else {
                return -middle - 1;
            }
        }
    }
    exports.Dictionary = Dictionary;
});
//# sourceMappingURL=Dictionary.js.map