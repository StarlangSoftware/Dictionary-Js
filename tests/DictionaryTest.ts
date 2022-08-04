import {TxtDictionary} from "../dist/Dictionary/TxtDictionary";
import {WordComparator} from "../dist/Dictionary/WordComparator";
import * as assert from "assert";

describe('DictionaryTest', function() {
    describe('DictionaryTest', function() {
        let dictionary = new TxtDictionary();
        let lowerCaseDictionary = new TxtDictionary(WordComparator.TURKISH, "lowercase.txt");
        let mixedCaseDictionary = new TxtDictionary(WordComparator.TURKISH_IGNORE_CASE, "mixedcase.txt");
        it('testGetWordIndex', function() {
            assert.strictEqual(0, lowerCaseDictionary.getWordIndex("a"));
            assert.strictEqual(3, lowerCaseDictionary.getWordIndex("ç"));
            assert.strictEqual(8, lowerCaseDictionary.getWordIndex("ğ"));
            assert.strictEqual(10, lowerCaseDictionary.getWordIndex("ı"));
            assert.strictEqual(18, lowerCaseDictionary.getWordIndex("ö"));
            assert.strictEqual(22, lowerCaseDictionary.getWordIndex("ş"));
            assert.strictEqual(25, lowerCaseDictionary.getWordIndex("ü"));
            assert.strictEqual(28, lowerCaseDictionary.getWordIndex("z"));
            assert.ok(mixedCaseDictionary.getWordIndex("A") == 0 || mixedCaseDictionary.getWordIndex("A") == 1);
            assert.ok(mixedCaseDictionary.getWordIndex("Ç") == 6 || mixedCaseDictionary.getWordIndex("Ç") == 7);
            assert.ok(mixedCaseDictionary.getWordIndex("Ğ") == 16 || mixedCaseDictionary.getWordIndex("Ğ") == 17);
            assert.ok(mixedCaseDictionary.getWordIndex("I") == 20 || mixedCaseDictionary.getWordIndex("I") == 21);
            assert.ok(mixedCaseDictionary.getWordIndex("İ") == 22 || mixedCaseDictionary.getWordIndex("İ") == 23);
            assert.ok(mixedCaseDictionary.getWordIndex("Ş") == 44 || mixedCaseDictionary.getWordIndex("Ş") == 45);
            assert.ok(mixedCaseDictionary.getWordIndex("Ü") == 50 || mixedCaseDictionary.getWordIndex("Ü") == 51);
            assert.ok(mixedCaseDictionary.getWordIndex("Z") == 56 || mixedCaseDictionary.getWordIndex("Z") == 57);
        });
        it('testSize', function() {
            assert.strictEqual(29, lowerCaseDictionary.size());
            assert.strictEqual(58, mixedCaseDictionary.size());
            assert.strictEqual(62120, dictionary.size());
        });
        it('testGetWord', function() {
            assert.strictEqual("a", lowerCaseDictionary.getWord(0).getName());
            assert.strictEqual("ç", lowerCaseDictionary.getWord(3).getName());
            assert.strictEqual("ğ", lowerCaseDictionary.getWord(8).getName());
            assert.strictEqual("ı", lowerCaseDictionary.getWord(10).getName());
            assert.strictEqual("ö", lowerCaseDictionary.getWord(18).getName());
            assert.strictEqual("ş", lowerCaseDictionary.getWord(22).getName());
            assert.strictEqual("ü", lowerCaseDictionary.getWord(25).getName());
            assert.strictEqual("z", lowerCaseDictionary.getWord(28).getName());
            for (let i = 0; i < dictionary.size(); i++){
                assert.notEqual(undefined, dictionary.getWord(i));
            }
        });
        it('testLongestWordSize', function() {
            assert.strictEqual(1, lowerCaseDictionary.longestWordSize());
            assert.strictEqual(1, mixedCaseDictionary.longestWordSize());
            assert.strictEqual(21, dictionary.longestWordSize());
        });
        it('testGetWordStartingWith', function() {
            assert.strictEqual(0, lowerCaseDictionary.getWordStartingWith("a"));
            assert.strictEqual(1, lowerCaseDictionary.getWordStartingWith("b"));
            assert.strictEqual(20, lowerCaseDictionary.getWordStartingWith("q"));
            assert.strictEqual(27, lowerCaseDictionary.getWordStartingWith("w"));
            assert.strictEqual(27, lowerCaseDictionary.getWordStartingWith("x"));
            assert.strictEqual(40, mixedCaseDictionary.getWordStartingWith("Q"));
            assert.strictEqual(54, mixedCaseDictionary.getWordStartingWith("W"));
            assert.strictEqual(54, mixedCaseDictionary.getWordStartingWith("X"));
        });
    });
});
