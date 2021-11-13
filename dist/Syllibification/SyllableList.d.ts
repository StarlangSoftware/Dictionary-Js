export declare class SyllableList {
    private readonly syllables;
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
    constructor(word: string);
    /**
     * The getSyllables method creates a new {@link Array} syllables and loops through the globally defined syllables
     * {@link Array} and adds each item to the newly created syllables {@link Array}.
     *
     * @return ArrayList syllables.
     */
    getSyllables(): Array<string>;
}
