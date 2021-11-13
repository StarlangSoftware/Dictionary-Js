import { WordComparator } from "./WordComparator";
import { Dictionary } from "./Dictionary";
import { Trie } from "./Trie/Trie";
export declare class TxtDictionary extends Dictionary {
    private misspelledWords;
    /**
     * Another constructor of {@link TxtDictionary} class which takes a String filename, a {@link WordComparator} and
     * a misspelled word dictionary file as inputs. And calls its super class {@link Dictionary} with given
     * {@link WordComparator}, assigns given filename input to the filename variable. Then, it calls loadFromText
     * method with given filename. It also loads the misspelling file.
     *
     * @param fileName   String input.
     * @param comparator {@link WordComparator} input.
     * @param misspelledFileName String input.
     */
    constructor(comparator?: WordComparator, fileName?: string, misspelledFileName?: string);
    /**
     * The loadFromText method takes a String filename as an input. It reads given file line by line and splits
     * according to space and assigns each word to the String array. Then, adds these word with their flags to the
     * words {@link Array}. At the end it sorts the words {@link Array}.
     *
     * @param fileName File input.
     */
    private loadFromText;
    /**
     * The loadMisspellWords method takes a String filename as an input. It reads given file line by line and splits
     * according to space and assigns each word with its misspelled form to the the misspelledWords hashMap.
     *
     * @param fileName File stream input.
     */
    private loadMisspelledWords;
    /**
     * The addNumber method takes a String name and calls addWithFlag method with given name and IS_SAYI flag.
     *
     * @param name String input.
     */
    addNumber(name: string): void;
    /**
     * The addRealNumber method takes a String name and calls addWithFlag method with given name and IS_REELSAYI flag.
     *
     * @param name String input.
     */
    addRealNumber(name: string): void;
    /**
     * The addFraction method takes a String name and calls addWithFlag method with given name and IS_KESIR flag.
     *
     * @param name String input.
     */
    addFraction(name: string): void;
    /**
     * The addTime method takes a String name and calls addWithFlag method with given name and IS_ZAMAN flag.
     *
     * @param name String input.
     */
    addTime(name: string): void;
    /**
     * The addProperNoun method takes a String name and calls addWithFlag method with given name and IS_OA flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addProperNoun(name: string): void;
    /**
     * The addNoun method takes a String name and calls addWithFlag method with given name and CL_ISIM flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addNoun(name: string): void;
    /**
     * The addVerb method takes a String name and calls addWithFlag method with given name and CL_FIIL flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addVerb(name: string): void;
    /**
     * The addAdjective method takes a String name and calls addWithFlag method with given name and IS_ADJ flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addAdjective(name: string): void;
    /**
     * The addAdverb method takes a String name and calls addWithFlag method with given name and IS_ADVERB flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addAdverb(name: string): void;
    /**
     * The addPronoun method takes a String name and calls addWithFlag method with given name and IS_ZM flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addPronoun(name: string): void;
    /**
     * The addWithFlag method takes a String name and a flag as inputs. First it creates a {@link TxtWord} word, then if
     * given name is not in words {@link Array} it creates new {@link TxtWord} with given name and assigns it to
     * the word and adds given flag to the word, it also add newly created word to the words {@link Array}'s index
     * found by performing a binary search and return true at the end. If given name is in words {@link Array},
     * it adds it the given flag to the word.
     *
     * @param name String input.
     * @param flag String flag.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addWithFlag(name: string, flag: string): boolean;
    /**
     * The getCorrectForm returns the correct form of a misspelled word.
     * @param misspelledWord Misspelled form.
     * @return Correct form.
     */
    getCorrectForm(misspelledWord: string): string;
    /**
     * The addWordWhenRootSoften is used to add word to Trie whose last consonant will be soften.
     * For instance, in the case of Dative Case Suffix, the word is 'müzik' when '-e' is added to the word, the last
     * char is drooped and root became 'müzi' and by changing 'k' into 'ğ' the word transformed into 'müziğe' as in the
     * example of 'Herkes müziğe doğru geldi'.
     * <p>
     * In the case of accusative, possessive of third person and a derivative suffix, the word is 'kanat' when '-i' is
     * added to word, last char is dropped, root became 'kana' then 't' transformed into 'd' and added to Trie. The word is
     * changed into 'kanadı' as in the case of 'Kuşun kırık kanadı'.
     *
     * @param trie the name of the Trie to add the word.
     * @param last the last char of the word to be soften.
     * @param root the substring of the word whose last one or two chars are omitted from the word to bo softed.
     * @param word the original word.
     */
    private addWordWhenRootSoften;
    /**
     * The prepareTrie method is used to create a Trie with the given dictionary. First, it gets the word from dictionary,
     * then checks some exceptions like 'ben' which does not fit in the consonant softening rule and transforms into 'bana',
     * and later on it generates a root by removing the last char from the word however if the length of the word is greater
     * than 1, it also generates the root by removing the last two chars from the word.
     * <p>
     * Then, it gets the last char of the root and adds root and word to the result Trie. There are also special cases such as;
     * lastIdropsDuringSuffixation condition, if it is true then addWordWhenRootSoften method will be used rather than addWord.
     * Ex : metin + i = metni
     * isPortmanteauEndingWithSI condition, if it is true then addWord method with rootWithoutLastTwo will be used.
     * Ex : ademelması + lar = ademelmaları
     * isPortmanteau condition, if it is true then addWord method with rootWithoutLast will be used.
     * Ex : mısıryağı + lar = mısıryağları
     * vowelEChangesToIDuringYSuffixation condition, if it is then addWord method with rootWithoutLast will be used
     * depending on the last char whether it is 'e' or 'a'.
     * Ex : ye + iniz - yiyiniz
     * endingKChangesIntoG condition, if it is true then addWord method with rootWithoutLast will be used with added 'g'.
     * Ex : ahenk + i = ahengi
     *
     * @return the resulting Trie.
     */
    prepareTrie(): Trie;
}
