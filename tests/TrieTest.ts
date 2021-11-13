import * as assert from "assert";
import {Word} from "../dist/Dictionary/Word";
import {Trie} from "../dist/Dictionary/Trie/Trie";

describe('TrieTest', function() {
    describe('TrieTest', function() {
        it('getWordsWithPrefixSimple', function() {
            let simpleTrie = new Trie();
            simpleTrie.addWord("azı", new Word("azı"));
            simpleTrie.addWord("az", new Word("az"));
            simpleTrie.addWord("ad", new Word("ad"));
            simpleTrie.addWord("adi", new Word("adi"));
            simpleTrie.addWord("adil", new Word("adil"));
            simpleTrie.addWord("a", new Word("a"));
            simpleTrie.addWord("adilane", new Word("adilane"));
            simpleTrie.addWord("ısı", new Word("ısı"));
            simpleTrie.addWord("ısıtıcı", new Word("ısıtıcı"));
            simpleTrie.addWord("ölü", new Word("ölü"));
            simpleTrie.addWord("ölüm", new Word("ölüm"));
            simpleTrie.addWord("ören", new Word("ören"));
            simpleTrie.addWord("örgü", new Word("örgü"));
            assert.deepStrictEqual([new Word("a")], Array.from(simpleTrie.getWordsWithPrefix("a").values()));
            assert.deepStrictEqual([new Word("a"), new Word("ad")], Array.from(simpleTrie.getWordsWithPrefix("ad")));
            assert.deepStrictEqual([new Word("a"), new Word("ad"), new Word("adi")], Array.from(simpleTrie.getWordsWithPrefix("adi")));
            assert.deepStrictEqual([new Word("a"), new Word("ad"), new Word("adi"), new Word("adil")], Array.from(simpleTrie.getWordsWithPrefix("adil")));
            assert.deepStrictEqual([new Word("a"), new Word("ad"), new Word("adi"), new Word("adil"), new Word("adilane")], Array.from(simpleTrie.getWordsWithPrefix("adilane")));
            assert.deepStrictEqual([new Word("ölü")], Array.from(simpleTrie.getWordsWithPrefix("ölü")));
            assert.deepStrictEqual([new Word("ölü"), new Word("ölüm")], Array.from(simpleTrie.getWordsWithPrefix("ölüm")));
            assert.deepStrictEqual([new Word("ısı")], Array.from(simpleTrie.getWordsWithPrefix("ısı")));
            assert.deepStrictEqual([new Word("ısı"), new Word("ısıtıcı")], Array.from(simpleTrie.getWordsWithPrefix("ısıtıcı")));
        });
    });
});
