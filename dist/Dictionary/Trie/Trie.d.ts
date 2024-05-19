import { Word } from "../Word";
import { TxtWord } from "../TxtWord";
export declare class Trie {
    private readonly rootNode;
    /**
     * A constructor of {@link Trie} class which creates a new {@link TrieNode} as rootNode.
     */
    constructor();
    /**
     * The addWord method which takes a String word and a {@link Word} root as inputs and adds given word and root to the rootNode.
     *
     * @param word String input.
     * @param root {@link Word} input.
     */
    addWord(word: string, root: Word): void;
    /**
     * The getWordsWithPrefix method which takes a String surfaceForm as an input. First it creates a {@link TrieNode} current and assigns
     * the rootNode to it, then it creates a new {@link Set} words. It loops i times where i ranges from 0 to length of surfaceForm
     * and assigns current's child that corresponds to the surfaceForm's char at index i and assigns it as {@link TrieNode} current.
     * If current is not null, it adds all words of current to the words {@link Set}.
     *
     * @param surfaceForm String input.
     * @return words {@link Set}.
     */
    getWordsWithPrefix(surfaceForm: string): Set<Word>;
    /**
     * The getCompoundWordStartingWith method takes a String hash. First it creates a {@link TrieNode} current and assigns
     * the rootNode to it. Then it loops i times where i ranges from 0 to length of given hash and assigns current's child that
     * corresponds to the hash's char at index i and assigns it as current. If current is null, it returns null.
     * <p>
     * If current is not null,  it loops through the words of current {@link TrieNode} and if it is a Portmanteau word, it
     * directly returns the word.
     *
     * @param hash String input.
     * @return null if {@link TrieNode} is null, otherwise portmanteau word.
     */
    getCompoundWordStartingWith(hash: string): TxtWord;
}
