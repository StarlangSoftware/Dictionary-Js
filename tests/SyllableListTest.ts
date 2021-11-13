import * as assert from "assert";
import {SyllableList} from "../dist/Syllibification/SyllableList";

describe('SyllableListTest', function() {
    describe('SyllableListTest', function() {
        it('testSyllableList', function() {
            let syllableList = new SyllableList("başöğretmen");
            assert.deepStrictEqual(syllableList.getSyllables(), ["ba", "şöğ", "ret", "men"])
            syllableList = new SyllableList("fransa");
            assert.deepStrictEqual(syllableList.getSyllables(), ["fran", "sa"])
            syllableList = new SyllableList("traktör");
            assert.deepStrictEqual(syllableList.getSyllables(), ["trak", "tör"])
            syllableList = new SyllableList("kraker");
            assert.deepStrictEqual(syllableList.getSyllables(), ["kra", "ker"])
            syllableList = new SyllableList("trake");
            assert.deepStrictEqual(syllableList.getSyllables(), ["tra", "ke"])
            syllableList = new SyllableList("ilköğretim");
            assert.deepStrictEqual(syllableList.getSyllables(), ["il", "köğ", "re", "tim"])
            syllableList = new SyllableList("semizotu");
            assert.deepStrictEqual(syllableList.getSyllables(), ["se", "mi", "zo", "tu"])
            syllableList = new SyllableList("ali");
            assert.deepStrictEqual(syllableList.getSyllables(), ["a", "li"])
            syllableList = new SyllableList("türk");
            assert.deepStrictEqual(syllableList.getSyllables(), ["türk"])
            syllableList = new SyllableList("kırktürk");
            assert.deepStrictEqual(syllableList.getSyllables(), ["kırk", "türk"])
            syllableList = new SyllableList("kardanadam");
            assert.deepStrictEqual(syllableList.getSyllables(), ["kar", "da", "na", "dam"])
            syllableList = new SyllableList("çöpadam");
            assert.deepStrictEqual(syllableList.getSyllables(), ["çö", "pa", "dam"])
            syllableList = new SyllableList("faal");
            assert.deepStrictEqual(syllableList.getSyllables(), ["fa", "al"])
        });
    });
});
