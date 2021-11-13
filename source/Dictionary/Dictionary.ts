import {Word} from "./Word";
import {WordComparator} from "./WordComparator";
import {VectorizedWord} from "./VectorizedWord";

export class Dictionary {

    protected words: Array<Word> = []
    protected fileName: string
    protected comparator: WordComparator = WordComparator.TURKISH

    /**
     * Another constructor of {@link Dictionary} class which takes a {@link WordComparator} as an input and initializes
     * comparator variable with given input and also creates a new words {@link Array}.
     *
     * @param comparator {@link WordComparator} type input.
     */
    constructor(comparator?: WordComparator) {
        this.comparator = comparator
    }

    wordComparator = (comparator: WordComparator) =>
        (word1: Word, word2: Word) => (comparator == WordComparator.TURKISH ?
            word1.getName().localeCompare(word2.getName(), "tr") :
                (comparator == WordComparator.TURKISH_IGNORE_CASE ? word1.getName().toLocaleLowerCase("tr").localeCompare(word2.getName().toLocaleLowerCase("tr"), "tr") :
                    word1.getName().localeCompare(word2.getName(), "en"))
    )

    binarySearch(word: Word): number{
        let lo = 0
        let hi = this.words.length - 1
        while (lo <= hi){
            let mid = Math.floor((lo + hi) / 2)
            if (this.words[mid].getName() == word.getName()){
                return mid
            }
            if (this.wordComparator(this.comparator)(this.words[mid], word) <= 0) {
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
        return -lo
    }

    /**
     * The getWord method takes a String name as an input and performs binary search within words {@link Array} and assigns the result
     * to integer variable middle. If the middle is greater than 0, it returns the item at index middle of words {@link Array}, undefined otherwise.
     *
     * @param nameOrIndex String input.
     * @return the item at found index of words {@link Array}, undefined if cannot be found.
     */
    getWord(nameOrIndex: any): Word{
        if (!isNaN(nameOrIndex)){
            return this.words[nameOrIndex]
        } else {
            let middle = this.binarySearch(new Word(nameOrIndex));
            if (middle >= 0) {
                return this.words[middle]
            }
            return undefined;
        }
    }

    /**
     * RemoveWord removes a word with the given name
     * @param name Name of the word to be removed.
     */
    removeWord(name: string){
        let middle = this.binarySearch(new Word(name));
        if (middle >= 0){
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
    getWordIndex(name: string): number{
        let middle = this.binarySearch(new Word(name));
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
    size(): number{
        return this.words.length
    }

    /**
     * The longestWordSize method loops through the words {@link Array} and returns the item with the maximum word length.
     *
     * @return the item with the maximum word length.
     */
    longestWordSize(): number{
        let max = 0;
        for (let word of this.words) {
            if (word.getName().length > max) {
                max = word.getName().length;
            }
        }
        return max
    }

    /**
     * The getWordStartingWith method takes a String hash as an input and performs binary search within
     * words {@link Array} and assigns the result to integer variable middle. If the middle is greater than 0, it
     * returns the index middle, -middle-1 otherwise.
     *
     * @param hash String input.
     * @return found index of words {@link Array}, -middle-1 if cannot be found.
     */
    getWordStartingWith(hash: string): number{
        let middle = this.binarySearch(new Word(hash));
        if (middle >= 0) {
            return middle;
        } else {
            return -middle;
        }
    }
}