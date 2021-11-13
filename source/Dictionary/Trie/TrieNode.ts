import {Word} from "../Word";

export class TrieNode {

    private children: Map<string, TrieNode> = new Map<string, TrieNode>()
    private words: Set<Word> = undefined

    /**
     * A constructor of {@link TrieNode} class which creates a new children {@link Map}.
     */
    constructor() {
    }

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
    addWord(word: string, root: Word, index?: number){
        if (index == undefined){
            this.addWord(word, root, 0);
        } else {
            if (index == word.length) {
                if (this.words == undefined) {
                    this.words = new Set<Word>()
                    this.words.add(root);
                } else {
                    this.words.add(root);
                }
                return;
            }
            let ch = word.charAt(index);
            let child
            if (this.children.has(ch)) {
                child = this.children.get(ch);
            } else {
                child = new TrieNode();
            }
            child.addWord(word, root, index + 1);
            this.children.set(ch, child);
        }
    }

    /**
     * The getChild method takes a {@link string} and gets its corresponding value from children {@link Map}.
     *
     * @param ch {@link Character} input.
     * @return the value from children {@link Map}.
     */
    getChild(ch: string): TrieNode{
        return this.children.get(ch);
    }

    /**
     * The getWords method returns the words {@link Set}.
     *
     * @return the words {@link Set}.
     */
    getWords(): Set<Word>{
        return this.words
    }

}