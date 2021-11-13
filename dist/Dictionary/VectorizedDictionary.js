(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Dictionary", "./VectorizedWord", "nlptoolkit-math/dist/Vector"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VectorizedDictionary = void 0;
    const Dictionary_1 = require("./Dictionary");
    const VectorizedWord_1 = require("./VectorizedWord");
    const Vector_1 = require("nlptoolkit-math/dist/Vector");
    class VectorizedDictionary extends Dictionary_1.Dictionary {
        /**
         * A constructor of {@link VectorizedDictionary} class which takes a {@link WordComparator} as an input and calls its
         * super class {@link Dictionary} with {@link WordComparator} input.
         *
         * @param comparator {@link WordComparator} type input.
         */
        constructor(comparator) {
            super(comparator);
            /**
             * The vectorComparator method takes two {@link VectorizedWord}s as inputs and finds out the dot products as result1
             * and result2, then it calls the compare method wirth result1 and result2. It returns the value {@code 0}
             * if result1 is  numerically equal to result2; a value less than {@code 0} if result1 is numerically less than
             * result2; and a value greater than {@code 0} if result1 is numerically greater than result2.
             *
             * @param word {@link VectorizedWord} type input.
             * @return the value {@code 0} if result1 is  numerically equal to result2; a value less than {@code 0} if
             * result1 is numerically less than result2; and a value greater than {@code 0} if result1 is numerically
             * greater than result2.
             */
            this.vectorComparator = (word) => (a, b) => word.getVector().cosineSimilarity(b.getVector()) -
                word.getVector().cosineSimilarity(a.getVector());
        }
        /**
         * The addWord method takes a {@link VectorizedWord} as an input and adds it to the words {@link Array}.
         *
         * @param word {@link VectorizedWord} input.
         */
        addWord(word) {
            this.words.push(word);
        }
        /**
         * The mostSimilarWord method takes a String name as an input, declares a maxDistance as -MAX_VALUE and creates a
         * {@link VectorizedWord} word by getting the given name from words {@link Array}. Then, it loops through the
         * words {@link Array} and if the current word is not equal to given input it calculates the distance between current
         * word and given word by using dot product and updates the maximum distance. It then returns the result
         * {@link VectorizedWord} which holds the most similar word to the given word.
         *
         * @param name String input.
         * @return VectorizedWord type result which holds the most similar word to the given word.
         */
        mostSimilarWord(name) {
            let maxSimilarity = Number.NEGATIVE_INFINITY;
            let result = undefined;
            let word = this.getWord(name);
            if (word == undefined) {
                return undefined;
            }
            for (let currentWord of this.words) {
                let current = currentWord;
                if (current != word) {
                    let similarity = 0;
                    if (word instanceof VectorizedWord_1.VectorizedWord && current instanceof VectorizedWord_1.VectorizedWord) {
                        similarity = word.getVector().cosineSimilarity(current.getVector());
                        if (similarity > maxSimilarity) {
                            maxSimilarity = similarity;
                            result = current;
                        }
                    }
                }
            }
            return result;
        }
        /**
         * The mostSimilarKWords method takes a String name and an integer k as inputs, and creates an {@link Array} resultWords
         * of type {@link VectorizedWord} and a {@link VectorizedWord} word by getting the given name from words {@link Array}.
         * Then, it loops through the words {@link Array} and adds current word to the resultWords. It then sort resultWords {@link Array}
         * and if the size of the {@link Array} is greater than given input k, it removes items from the ending. Then, it returns
         * resultWords {@link Array}.
         *
         * @param name String input.
         * @param k Integer input.
         * @return ArrayList result.
         */
        mostSimilarKWords(name, k) {
            let resultWords = new Array();
            let word = this.getWord(name);
            if (word == undefined) {
                return resultWords;
            }
            for (let currentWord of this.words) {
                if (currentWord instanceof VectorizedWord_1.VectorizedWord) {
                    resultWords.push(currentWord);
                }
            }
            if (word instanceof VectorizedWord_1.VectorizedWord) {
                resultWords.sort(this.vectorComparator(word));
            }
            resultWords.splice(k, resultWords.length - k);
            return resultWords;
        }
        /**
         * The kMeansClustering method takes an integer iteration and k as inputs. K-means clustering aims to partition n
         * observations into k clusters in which each observation belongs to the cluster with the nearest mean.
         *
         * @param iteration Integer input.
         * @param k         Integer input.
         * @return ArrayList result which holds the k-means clustered words.
         */
        kMeansClustering(iteration, k) {
            let result = new Array();
            let means = new Array();
            let vectorSize = this.words[0].getVector().size();
            for (let i = 0; i < k; i++) {
                result.push(new Array());
                means.push(new Vector_1.Vector(vectorSize, 0));
            }
            for (let i = 0; i < this.words.length; i++) {
                result[i % k].push(this.words[i]);
                means[i % k].addVector(this.words[i].getVector());
            }
            for (let i = 0; i < k; i++) {
                means[i].divide(result[i].length);
                means[i].divide(Math.sqrt(means[i].dotProductWithItself()));
            }
            for (let i = 0; i < iteration; i++) {
                for (let j = 0; j < k; j++) {
                    result[j].splice(0);
                }
                for (let word of this.words) {
                    let vectorizedWord = word;
                    let maxClusterSimilarity = means[0].cosineSimilarity(vectorizedWord.getVector());
                    let maxClusterIndex = 0;
                    for (let j = 1; j < k; j++) {
                        let clusterDistance = means[j].cosineSimilarity(vectorizedWord.getVector());
                        if (clusterDistance > maxClusterSimilarity) {
                            maxClusterSimilarity = clusterDistance;
                            maxClusterIndex = j;
                        }
                    }
                    result[maxClusterIndex].push(word);
                }
                for (let j = 0; j < k; j++) {
                    means[j].clear();
                    for (let word of result[j]) {
                        means[j].addVector(word.getVector());
                    }
                    means[j].divide(result[j].length);
                    means[j].divide(Math.sqrt(means[j].dotProductWithItself()));
                }
            }
            return result;
        }
    }
    exports.VectorizedDictionary = VectorizedDictionary;
});
//# sourceMappingURL=VectorizedDictionary.js.map