import {TxtDictionary} from "../dist/Dictionary/TxtDictionary";
import * as assert from "assert";
import {Word} from "../dist/Dictionary/Word";

describe('TxtDictionaryTest', function() {
    describe('TxtDictionaryTest', function() {
        let dictionary = new TxtDictionary();
        it('testGetCorrectForm', function() {
            for (let i = 0; i < dictionary.size(); i++){
                assert.strictEqual(undefined, dictionary.getCorrectForm(dictionary.getWord(i).getName()));
            }
        });
        it('testPrepareTrie', function() {
            let trie = dictionary.prepareTrie();
            assert.ok(trie.getWordsWithPrefix("bana").has(new Word("ben")));
            assert.ok(trie.getWordsWithPrefix("sana").has(new Word("sen")));
            assert.ok(trie.getWordsWithPrefix("metni").has(new Word("metin")));
            assert.ok(trie.getWordsWithPrefix("ağzı").has(new Word("ağız")));
            assert.ok(trie.getWordsWithPrefix("ayrıldı").has(new Word("ayır")));
            assert.ok(trie.getWordsWithPrefix("buyruldu").has(new Word("buyur")));
            assert.ok(trie.getWordsWithPrefix("ahdi").has(new Word("ahit")));
            assert.ok(trie.getWordsWithPrefix("kaybı").has(new Word("kayıp")));
            assert.ok(trie.getWordsWithPrefix("kutbu").has(new Word("kutup")));
            assert.ok(trie.getWordsWithPrefix("ademelmaları").has(new Word("ademelması")));
            assert.ok(trie.getWordsWithPrefix("ağaçküpeleri").has(new Word("ağaçküpesi")));
            assert.ok(trie.getWordsWithPrefix("ağaçlığı").has(new Word("ağaçlık")));
            assert.ok(trie.getWordsWithPrefix("sumağı").has(new Word("sumak")));
            assert.ok(trie.getWordsWithPrefix("deveboyunları").has(new Word("deveboynu")));
            assert.ok(trie.getWordsWithPrefix("gökcisimleri").has(new Word("gökcismi")));
            assert.ok(trie.getWordsWithPrefix("gökkuşakları").has(new Word("gökkuşağı")));
            assert.ok(trie.getWordsWithPrefix("hintarmutları").has(new Word("hintarmudu")));
            assert.ok(trie.getWordsWithPrefix("hintpirinçleri").has(new Word("hintpirinci")));
            assert.ok(trie.getWordsWithPrefix("sudolapları").has(new Word("sudolabı")));
            assert.ok(trie.getWordsWithPrefix("yiyor").has(new Word("ye")));
            assert.ok(trie.getWordsWithPrefix("diyor").has(new Word("de")));
            assert.ok(trie.getWordsWithPrefix("depoluyor").has(new Word("depola")));
            assert.ok(trie.getWordsWithPrefix("dışlıyor").has(new Word("dışla")));
            assert.ok(trie.getWordsWithPrefix("fiyongu").has(new Word("fiyonk")));
            assert.ok(trie.getWordsWithPrefix("gongu").has(new Word("gonk")));
        });
    });
});