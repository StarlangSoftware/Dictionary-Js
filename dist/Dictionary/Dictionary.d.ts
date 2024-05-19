import { Word } from "./Word";
import { WordComparator } from "./WordComparator";
export declare class Dictionary {
    protected words: Array<Word>;
    protected fileName: string;
    protected comparator: WordComparator;
    /**
     * Another constructor of {@link Dictionary} class which takes a {@link WordComparator} as an input and initializes
     * comparator variable with given input and also creates a new words {@link Array}.
     *
     * @param comparator {@link WordComparator} type input.
     */
    constructor(comparator?: WordComparator);
    wordComparator: (comparator: WordComparator) => (word1: Word, word2: Word) => number;
    /**
     * Checks if a given word exists in the dictionary by performing a binary search on the words array.
     * @param word Searched word
     * @return the index of the search word, if it is contained in the words array; otherwise, (-(insertion point) - 1). The
     * insertion point is defined as the point at which the word would be inserted into the words array.
     */
    binarySearch(word: Word): number;
    /**
     * The getWord method takes a String name as an input and performs binary search within words {@link Array} and assigns the result
     * to integer variable middle. If the middle is greater than 0, it returns the item at index middle of words {@link Array}, undefined otherwise.
     *
     * @param nameOrIndex String input.
     * @return the item at found index of words {@link Array}, undefined if cannot be found.
     */
    getWord(nameOrIndex: any): Word;
    /**
     * RemoveWord removes a word with the given name
     * @param name Name of the word to be removed.
     */
    removeWord(name: string): void;
    /**
     * The getWordIndex method takes a String name as an input and performs binary search within words {@link Array} and assigns the result
     * to integer variable middle. If the middle is greater than 0, it returns the index middle, -1 otherwise.
     *
     * @param name String input.
     * @return found index of words {@link Array}, -1 if cannot be found.
     */
    getWordIndex(name: string): number;
    /**
     * The size method returns the size of the words {@link Array}.
     *
     * @return the size of the words {@link Array}.
     */
    size(): number;
    /**
     * The longestWordSize method loops through the words {@link Array} and returns the item with the maximum word length.
     *
     * @return the item with the maximum word length.
     */
    longestWordSize(): number;
    /**
     * The getWordStartingWith method takes a String hash as an input and performs binary search within
     * words {@link Array} and assigns the result to integer variable middle. If the middle is greater than 0, it
     * returns the index middle, -middle-1 otherwise.
     *
     * @param hash String input.
     * @return found index of words {@link Array}, -middle-1 if cannot be found.
     */
    getWordStartingWith(hash: string): number;
}
