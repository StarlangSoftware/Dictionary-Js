import { Word } from "../Word";
export declare class TrieNode {
    private children;
    private words;
    /**
     * A constructor of {@link TrieNode} class which creates a new children {@link Map}.
     */
    constructor();
    /**
     * The addWord method takes a String word, an index, and a {@link Word} root as inputs. First it creates a {@link TrieNode} child
     * and if words {@link Set} is null it creates a new {@link Set} and add the given root word to this {@link Set}, if it
     * is not null, it directly adds it to the {@link Set} when the given index is equal to the length of given word.
     * <p>
     * Then, it extracts the character at given index of given word and if children {@link Map} contains a mapping for the
     * extracted character, it assigns it to the {@link TrieNode} child, else it creates a new {@link TrieNode} and assigns it to the
     * child. At the end, it recursively calls the addWord method with the next index of child and puts the character with
     * the child into the children {@link Map}.
     *
     * @param word  String input.
     * @param index Integer index.
     * @param root  {@link Word} input to add.
     */
    addWord(word: string, root: Word, index?: number): void;
    /**
     * The getChild method takes a {@link string} and gets its corresponding value from children {@link Map}.
     *
     * @param ch {@link Character} input.
     * @return the value from children {@link Map}.
     */
    getChild(ch: string): TrieNode;
    /**
     * The getWords method returns the words {@link Set}.
     *
     * @return the words {@link Set}.
     */
    getWords(): Set<Word>;
}
