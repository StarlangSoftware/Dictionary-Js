import {WordComparator} from "./WordComparator";
import {Dictionary} from "./Dictionary";
import * as fs from "fs";
import {TxtWord} from "./TxtWord";
import {Trie} from "./Trie/Trie";

export class TxtDictionary extends Dictionary{

    private misspelledWords: Map<string, string> = new Map<string, string>()

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
    constructor(comparator: WordComparator = WordComparator.TURKISH,
                fileName: string = "turkish_dictionary.txt",
                misspelledFileName: string = "turkish_misspellings.txt") {
        super(comparator)
        this.loadFromText(fileName)
        this.loadMisspelledWords(misspelledFileName)
    }

    /**
     * The loadFromText method takes a String filename as an input. It reads given file line by line and splits
     * according to space and assigns each word to the String array. Then, adds these word with their flags to the
     * words {@link Array}. At the end it sorts the words {@link Array}.
     *
     * @param fileName File input.
     */
    private loadFromText(fileName: string){
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            let list = line.split(" ")
            if (list.length > 0){
                let currentWord = new TxtWord(list[0])
                for (let i = 1; i < list.length; i++){
                    currentWord.addFlag(list[i])
                }
                this.words.push(currentWord)
            }
        }
        this.words.sort(this.wordComparator(this.comparator))
    }

    /**
     * The loadMisspellWords method takes a String filename as an input. It reads given file line by line and splits
     * according to space and assigns each word with its misspelled form to the the misspelledWords hashMap.
     *
     * @param fileName File stream input.
     */
    private loadMisspelledWords(fileName: string){
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            let list = line.split(" ")
            if (list.length == 2){
                this.misspelledWords.set(list[0], list[1])
            }
        }
    }

    /**
     * The addNumber method takes a String name and calls addWithFlag method with given name and IS_SAYI flag.
     *
     * @param name String input.
     */
    addNumber(name: string){
        this.addWithFlag(name, "IS_SAYI")
    }

    /**
     * The addRealNumber method takes a String name and calls addWithFlag method with given name and IS_REELSAYI flag.
     *
     * @param name String input.
     */
    addRealNumber(name: string){
        this.addWithFlag(name, "IS_REELSAYI")
    }

    /**
     * The addFraction method takes a String name and calls addWithFlag method with given name and IS_KESIR flag.
     *
     * @param name String input.
     */
    addFraction(name: string){
        this.addWithFlag(name, "IS_KESIR")
    }

    /**
     * The addTime method takes a String name and calls addWithFlag method with given name and IS_ZAMAN flag.
     *
     * @param name String input.
     */
    addTime(name: string){
        this.addWithFlag(name, "IS_ZAMAN")
    }

    /**
     * The addProperNoun method takes a String name and calls addWithFlag method with given name and IS_OA flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addProperNoun(name: string){
        this.addWithFlag(name, "IS_OA")
    }

    /**
     * The addNoun method takes a String name and calls addWithFlag method with given name and CL_ISIM flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addNoun(name: string){
        this.addWithFlag(name, "CL_ISIM")
    }

    /**
     * The addVerb method takes a String name and calls addWithFlag method with given name and CL_FIIL flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addVerb(name: string){
        this.addWithFlag(name, "CL_FIIL")
    }

    /**
     * The addAdjective method takes a String name and calls addWithFlag method with given name and IS_ADJ flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addAdjective(name: string){
        this.addWithFlag(name, "IS_ADJ")
    }

    /**
     * The addAdverb method takes a String name and calls addWithFlag method with given name and IS_ADVERB flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addAdverb(name: string){
        this.addWithFlag(name, "IS_ADVERB")
    }

    /**
     * The addPronoun method takes a String name and calls addWithFlag method with given name and IS_ZM flag.
     *
     * @param name String input.
     * @return true if given name is in words {@link Array}, false otherwise.
     */
    addPronoun(name: string){
        this.addWithFlag(name, "IS_ZM")
    }

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
    addWithFlag(name: string, flag: string): boolean{
        if (this.getWord(name.toLocaleLowerCase("tr")) == undefined) {
            let word = new TxtWord(name.toLocaleLowerCase("tr"));
            word.addFlag(flag);
            let insertIndex = -this.binarySearch(word) - 1;
            if (insertIndex >= 0) {
                this.words.splice(insertIndex, 0, word);
            }
            return true;
        } else {
            let word = <TxtWord>this.getWord(name.toLocaleLowerCase("tr"));
            if (!word.containsFlag(flag)){
                word.addFlag(flag);
            }
        }
        return false;
    }

    /**
     * The getCorrectForm returns the correct form of a misspelled word.
     * @param misspelledWord Misspelled form.
     * @return Correct form.
     */
    getCorrectForm(misspelledWord: string): string{
        if (this.misspelledWords.has(misspelledWord)){
            return this.misspelledWords.get(misspelledWord)
        }
        return undefined
    }

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
    private addWordWhenRootSoften(trie: Trie, last: string, root: string, word: TxtWord){
        switch (last){
            case "p":
                trie.addWord(root + 'b', word);
                break;
            case "ç":
                trie.addWord(root + 'c', word);
                break;
            case "t":
                trie.addWord(root + 'd', word);
                break;
            case "k":
            case "g":
                trie.addWord(root + "ğ", word);
                break;
        }
    }

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
    prepareTrie(): Trie{
        let result = new Trie();
        let lastBefore = " ";
        for (let i = 0; i < this.size(); i++) {
            let word = <TxtWord>this.getWord(i);
            let root = word.getName();
            let length = root.length;
            if (root == "ben") {
                result.addWord("bana", word);
            }
            if (root == "sen") {
                result.addWord("sana", word);
            }
            let rootWithoutLast = root.substring(0, length - 1);
            let rootWithoutLastTwo
            if (length > 1) {
                rootWithoutLastTwo = root.substring(0, length - 2);
            } else {
                rootWithoutLastTwo = "";
            }
            if (length > 1){
                lastBefore = root.charAt(length - 2);
            }
            let last = root.charAt(length - 1);
            result.addWord(root, word);
            if (word.lastIdropsDuringSuffixation() || word.lastIdropsDuringPassiveSuffixation()) {
                if (word.rootSoftenDuringSuffixation()) {
                    this.addWordWhenRootSoften(result, last, rootWithoutLastTwo, word);
                } else {
                    result.addWord(rootWithoutLastTwo + last, word);
                }
            }
            // NominalRootNoPossesive
            if (word.isPortmanteauEndingWithSI()) {
                result.addWord(rootWithoutLastTwo, word);
            }
            if (word.rootSoftenDuringSuffixation()) {
                this.addWordWhenRootSoften(result, last, rootWithoutLast, word);
            }
            if (word.isPortmanteau()) {
                if (word.isPortmanteauFacedVowelEllipsis()){
                    result.addWord(rootWithoutLastTwo + last + lastBefore, word);
                } else {
                    if (word.isPortmanteauFacedSoftening()){
                        switch (lastBefore){
                            case 'b':
                                result.addWord(rootWithoutLastTwo + 'p', word);
                                break;
                            case 'c':
                                result.addWord(rootWithoutLastTwo + 'ç', word);
                                break;
                            case 'd':
                                result.addWord(rootWithoutLastTwo + 't', word);
                                break;
                            case 'ğ':
                                result.addWord(rootWithoutLastTwo + 'k', word);
                                break;
                        }
                    } else {
                        result.addWord(rootWithoutLast, word);
                    }
                }
            }
            if (word.vowelEChangesToIDuringYSuffixation() || word.vowelAChangesToIDuringYSuffixation()) {
                switch (last) {
                    case 'e':
                        result.addWord(rootWithoutLast, word);
                        break;
                    case 'a':
                        result.addWord(rootWithoutLast, word);
                        break;
                }
            }
            if (word.endingKChangesIntoG()) {
                result.addWord(rootWithoutLast + 'g', word);
            }
        }
        return result;
    }
}