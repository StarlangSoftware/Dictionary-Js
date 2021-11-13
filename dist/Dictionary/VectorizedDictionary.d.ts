import { Dictionary } from "./Dictionary";
import { WordComparator } from "./WordComparator";
import { VectorizedWord } from "./VectorizedWord";
export declare class VectorizedDictionary extends Dictionary {
    /**
     * A constructor of {@link VectorizedDictionary} class which takes a {@link WordComparator} as an input and calls its
     * super class {@link Dictionary} with {@link WordComparator} input.
     *
     * @param comparator {@link WordComparator} type input.
     */
    constructor(comparator: WordComparator);
    /**
     * The addWord method takes a {@link VectorizedWord} as an input and adds it to the words {@link Array}.
     *
     * @param word {@link VectorizedWord} input.
     */
    addWord(word: VectorizedWord): void;
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
    mostSimilarWord(name: string): VectorizedWord;
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
    vectorComparator: (word: VectorizedWord) => (a: VectorizedWord, b: VectorizedWord) => number;
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
    mostSimilarKWords(name: string, k: number): Array<VectorizedWord>;
    /**
     * The kMeansClustering method takes an integer iteration and k as inputs. K-means clustering aims to partition n
     * observations into k clusters in which each observation belongs to the cluster with the nearest mean.
     *
     * @param iteration Integer input.
     * @param k         Integer input.
     * @return ArrayList result which holds the k-means clustered words.
     */
    kMeansClustering(iteration: number, k: number): Array<Array<VectorizedWord>>;
}
