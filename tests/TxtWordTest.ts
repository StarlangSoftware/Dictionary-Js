import * as assert from "assert";
import {TxtDictionary} from "../dist/Dictionary/TxtDictionary";
import {TxtWord} from "../dist/Dictionary/TxtWord";

describe('TxtWordTest', function() {
    describe('TxtWordTest', function() {
        let dictionary = new TxtDictionary();
        it('testVerbType', function() {
            let verbs = new Map<string, number>();
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                let verbType = word.verbType();
                if (verbs.has(verbType)){
                    verbs.set(verbType, verbs.get(verbType) + 1);
                } else {
                    verbs.set(verbType, 1);
                }
            }
            assert.strictEqual(5, verbs.get("F2P1-NO-REF"));
            assert.strictEqual(1, verbs.get("F3P1-NO-REF"));
            assert.strictEqual(1, verbs.get("F4P1-NO-REF"));
            assert.strictEqual(14, verbs.get("F4PR-NO-REF"));
            assert.strictEqual(2, verbs.get("F4PL-NO-REF"));
            assert.strictEqual(67, verbs.get("F4PW-NO-REF"));
            assert.strictEqual(10, verbs.get("F5PL-NO-REF"));
            assert.strictEqual(111, verbs.get("F5PR-NO-REF"));
            assert.strictEqual(1, verbs.get("F5PW-NO-REF"));
            assert.strictEqual(2, verbs.get("F1P1"));
            assert.strictEqual(11, verbs.get("F2P1"));
            assert.strictEqual(4, verbs.get("F3P1"));
            assert.strictEqual(1, verbs.get("F4P1"));
            assert.strictEqual(1, verbs.get("F5P1"));
            assert.strictEqual(7, verbs.get("F6P1"));
            assert.strictEqual(2, verbs.get("F2PL"));
            assert.strictEqual(49, verbs.get("F4PL"));
            assert.strictEqual(18, verbs.get("F5PL"));
            assert.strictEqual(173, verbs.get("F4PR"));
            assert.strictEqual(808, verbs.get("F5PR"));
            assert.strictEqual(1396, verbs.get("F4PW"));
            assert.strictEqual(13, verbs.get("F5PW"));
        });
        it('testIsNominal', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isNominal()){
                    count++;
                }
            }
            assert.strictEqual(30603, count);
        });
        it('testIsPassive', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPassive()){
                    count++;
                }
            }
            assert.strictEqual(10, count);
        });
        it('testIsAbbreviation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isAbbreviation()){
                    count++;
                }
            }
            assert.strictEqual(102, count);
        });
        it('testIsInterjection', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isInterjection()){
                    count++;
                }
            }
            assert.strictEqual(106, count);
        });
        it('testIsDuplicate', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isDuplicate()){
                    count++;
                }
            }
            assert.strictEqual(124, count);
        });
        it('testIsAdjective', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isAdjective()){
                    count++;
                }
            }
            assert.strictEqual(9687, count);
        });
        it('testIsPronoun', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPronoun()){
                    count++;
                }
            }
            assert.strictEqual(49, count);
        });
        it('testIsQuestion', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isQuestion()){
                    count++;
                }
            }
            assert.strictEqual(4, count);
        });
        it('testIsVerb', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isVerb()){
                    count++;
                }
            }
            assert.strictEqual(5043, count);
        });
        it('testIsPortmanteau', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPortmanteau()){
                    count++;
                }
            }
            assert.strictEqual(1294, count);
        });
        it('testIsDeterminer', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isDeterminer()){
                    count++;
                }
            }
            assert.strictEqual(13, count);
        });
        it('testIsConjunction', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isConjunction()){
                    count++;
                }
            }
            assert.strictEqual(52, count);
        });
        it('testIsAdverb', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isAdverb()){
                    count++;
                }
            }
            assert.strictEqual(1849, count);
        });
        it('testIsPostP', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPostP()){
                    count++;
                }
            }
            assert.strictEqual(49, count);
        });
        it('testIsPortmanteauEndingWithSI', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPortmanteauEndingWithSI()){
                    count++;
                }
            }
            assert.strictEqual(178, count);
        });
        it('testIsPortmanteauFacedVowelEllipsis', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPortmanteauFacedVowelEllipsis()){
                    count++;
                }
            }
            assert.strictEqual(25, count);
        });
        it('testIsPortmanteauFacedSoftening', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPortmanteauFacedSoftening()){
                    count++;
                }
            }
            assert.strictEqual(348, count);
        });
        it('testIsSuffix', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isSuffix()){
                    count++;
                }
            }
            assert.strictEqual(3, count);
        });
        it('testIsProperNoun', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isProperNoun()){
                    count++;
                }
            }
            assert.strictEqual(19014, count);
        });
        it('testIsPlural', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isPlural()){
                    count++;
                }
            }
            assert.strictEqual(398, count);
        });
        it('testIsNumeral', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isNumeral()){
                    count++;
                }
            }
            assert.strictEqual(33, count);
        });
        it('testNotObeysVowelHarmonyDuringAgglutination', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.notObeysVowelHarmonyDuringAgglutination()){
                    count++;
                }
            }
            assert.strictEqual(315, count);
        });
        it('testObeysAndNotObeysVowelHarmonyDuringAgglutination', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.obeysAndNotObeysVowelHarmonyDuringAgglutination()){
                    count++;
                }
            }
            assert.strictEqual(5, count);
        });
        it('testRootSoftenDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.rootSoftenDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(5530, count);
        });
        it('testRootSoftenAndNotSoftenDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.rootSoftenAndNotSoftenDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(14, count);
        });
        it('testVerbSoftenDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.verbSoftenDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(87, count);
        });
        it('testNounSoftenDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.nounSoftenDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(5444, count);
        });
        it('testEndingKChangesIntoG', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.endingKChangesIntoG()){
                    count++;
                }
            }
            assert.strictEqual(26, count);
        });
        it('testIsExceptional', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.isExceptional()){
                    count++;
                }
            }
            assert.strictEqual(31, count);
        });
        it('testDuplicatesDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.duplicatesDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(36, count);
        });
        it('testDuplicatesAndNotDuplicatesDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.duplicatesAndNotDuplicatesDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(4, count);
        });
        it('testLastIdropsDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.lastIdropsDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(167, count);
        });
        it('testLastIDropsAndNotDropDuringSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.lastIDropsAndNotDropDuringSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(4, count);
        });
        it('testTakesRelativeSuffixKi', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.takesRelativeSuffixKi()){
                    count++;
                }
            }
            assert.strictEqual(16, count);
        });
        it('testTakesRelativeSuffixKu', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.takesRelativeSuffixKu()){
                    count++;
                }
            }
            assert.strictEqual(4, count);
        });
        it('testLastIdropsDuringPassiveSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.lastIdropsDuringPassiveSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(11, count);
        });
        it('testVowelAChangesToIDuringYSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.vowelAChangesToIDuringYSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(1301, count);
        });
        it('testVowelEChangesToIDuringYSuffixation', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.vowelEChangesToIDuringYSuffixation()){
                    count++;
                }
            }
            assert.strictEqual(2, count);
        });
        it('testTakesSuffixIRAsAorist', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (!word.takesSuffixIRAsAorist()){
                    count++;
                }
            }
            assert.strictEqual(51, count);
        });
        it('testTakesSuffixDIRAsFactitive', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (!word.takesSuffixDIRAsFactitive()){
                    count++;
                }
            }
            assert.strictEqual(197, count);
        });
        it('testShowsSuRegularities', function() {
            let count = 0;
            for (let i = 0; i < dictionary.size(); i++){
                let word = <TxtWord>dictionary.getWord(i);
                if (word.showsSuRegularities()){
                    count++;
                }
            }
            assert.strictEqual(5, count);
        });
    });
});
