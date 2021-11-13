import {TrieNode} from "./TrieNode";
import {Word} from "../Word";
import {TxtWord} from "../TxtWord";

export class Trie {

    private rootNode: TrieNode

    /**
     * A constructor of {@link Trie} class which creates a new {@link TrieNode} as rootNode.
     */
    constructor() {
        this.rootNode = new TrieNode()
    }

    /**
     * The addWord method which takes a String word and a {@link Word} root as inputs and adds given word and root to the rootNode.
     *
     * @param word String input.
     * @param root {@link Word} input.
     */
    addWord(word: string, root: Word){
        this.rootNode.addWord(word, root)
    }

    /**
     * The getWordsWithPrefix method which takes a String surfaceForm as an input. First it creates a {@link TrieNode} current and assigns
     * the rootNode to it, then it creates a new {@link Set} words. It loops i times where i ranges from 0 to length of surfaceForm
     * and assigns current's child that corresponds to the surfaceForm's char at index i and assigns it as {@link TrieNode} current.
     * If current is not null, it adds all words of current to the words {@link Set}.
     *
     * @param surfaceForm String input.
     * @return words {@link Set}.
     */
    getWordsWithPrefix(surfaceForm: string): Set<Word>{
        let current = this.rootNode;
        let words = new Set<Word>();
        for (let i = 0; i < surfaceForm.length; i++) {
            current = current.getChild(surfaceForm.charAt(i));
            if (current != undefined) {
                if (current.getWords() != undefined) {
                    for (let word of  current.getWords()){
                        words.add(word);
                    }
                }
            } else {
                break;
            }
        }
        return words;
    }

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
    getCompoundWordStartingWith(hash: string): TxtWord{
        let current = this.rootNode;
        for (let i = 0; i < hash.length; i++) {
            current = current.getChild(hash.charAt(i));
            if (current == undefined) {
                return undefined;
            }
        }
        if (current != undefined && current.getWords() != undefined) {
            for (let word of current.getWords()) {
                if (word instanceof TxtWord && word.isPortmanteau()) {
                    return word;
                }
            }
        }
        return undefined
    }
}