import * as assert from "assert";
import {Word} from "../dist/Dictionary/Word";

describe('WordTest', function() {
    describe('WordTest', function() {
        it('testCharCount', function() {
            let word = new Word("ali")
            assert.strictEqual(3, word.charCount())
            word = new Word("Veli")
            assert.strictEqual(4, word.charCount())
            word = new Word("ahmet")
            assert.strictEqual(5, word.charCount())
            word = new Word("çöğüşı")
            assert.strictEqual(6, word.charCount())
        });
        it('testIsCapital', function() {
            assert.ok(!Word.isCapital("ali"))
            assert.ok(Word.isCapital("Ali"))
            assert.ok(!Word.isCapital("ısı"))
            assert.ok(Word.isCapital("Isıtıcı"))
            assert.ok(!Word.isCapital("çin"))
            assert.ok(Word.isCapital("Çin"))
            assert.ok(!Word.isCapital("ödül"))
            assert.ok(Word.isCapital("Ödül"))
            assert.ok(!Word.isCapital("şişe"))
            assert.ok(Word.isCapital("Şişe"))
            assert.ok(!Word.isCapital("üretici"))
            assert.ok(Word.isCapital("Üretici"))
        });
        it('testIsPunctuation', function() {
            assert.ok(Word.isPunctuation("."));
            assert.ok(Word.isPunctuation("..."));
            assert.ok(Word.isPunctuation("["));
            assert.ok(Word.isPunctuation("]"));
            assert.ok(Word.isPunctuation("\u2026"));
            assert.ok(Word.isPunctuation("%"));
            assert.ok(Word.isPunctuation("&"));
            assert.ok(Word.isPunctuation("="));
            assert.ok(Word.isPunctuation("\u0060\u0060"));
            assert.ok(Word.isPunctuation("\u0060"));
            assert.ok(Word.isPunctuation("''"));
            assert.ok(Word.isPunctuation("$"));
            assert.ok(Word.isPunctuation("!"));
            assert.ok(Word.isPunctuation("?"));
            assert.ok(Word.isPunctuation(","));
            assert.ok(Word.isPunctuation(":"));
            assert.ok(Word.isPunctuation("--"));
            assert.ok(Word.isPunctuation(";"));
            assert.ok(Word.isPunctuation("("));
            assert.ok(Word.isPunctuation(")"));
            assert.ok(Word.isPunctuation("'"));
            assert.ok(Word.isPunctuation("\""));
            assert.ok(Word.isPunctuation("\u201C"));
            assert.ok(Word.isPunctuation("\u2018"));
            assert.ok(Word.isPunctuation("\u201D"));
            assert.ok(Word.isPunctuation("…"));
            assert.ok(Word.isPunctuation("\u25CF"));
            assert.ok(Word.isPunctuation("/"));
            assert.ok(Word.isPunctuation("-"));
            assert.ok(Word.isPunctuation("+"));
            assert.ok(Word.isPunctuation("-LRB-"));
            assert.ok(Word.isPunctuation("-RRB-"));
            assert.ok(Word.isPunctuation("-LCB-"));
            assert.ok(Word.isPunctuation("-RCB-"));
            assert.ok(Word.isPunctuation("-LSB-"));
            assert.ok(Word.isPunctuation("-RSB-"));
        });
        it('testIsHonorific', function() {
            assert.ok(Word.isHonorific("bay"));
            assert.ok(Word.isHonorific("Bay"));
            assert.ok(Word.isHonorific("BAY"));
            assert.ok(Word.isHonorific("bayan"));
            assert.ok(Word.isHonorific("Bayan"));
            assert.ok(Word.isHonorific("BAYAN"));
        });
        it('testIsOrganization', function() {
            assert.ok(Word.isOrganization("corp"));
            assert.ok(Word.isOrganization("Corp"));
            assert.ok(Word.isOrganization("inc."));
            assert.ok(Word.isOrganization("co."));
            assert.ok(Word.isOrganization("Co."));
        });
        it('testIsMoney', function() {
            assert.ok(Word.isMoney("dolar"));
            assert.ok(Word.isMoney("sterlin"));
            assert.ok(Word.isMoney("paunt"));
            assert.ok(Word.isMoney("ons"));
            assert.ok(Word.isMoney("ruble"));
            assert.ok(Word.isMoney("mark"));
            assert.ok(Word.isMoney("frank"));
            assert.ok(Word.isMoney("sent"));
            assert.ok(Word.isMoney("cent"));
            assert.ok(Word.isMoney("yen"));
            assert.ok(Word.isMoney("Dolar"));
            assert.ok(Word.isMoney("Sterlin"));
            assert.ok(Word.isMoney("Paunt"));
            assert.ok(Word.isMoney("Ons"));
            assert.ok(Word.isMoney("Ruble"));
            assert.ok(Word.isMoney("Mark"));
            assert.ok(Word.isMoney("Frank"));
            assert.ok(Word.isMoney("Sent"));
            assert.ok(Word.isMoney("Cent"));
            assert.ok(Word.isMoney("Yen"));
            assert.ok(Word.isMoney("3000$"));
            assert.ok(!Word.isMoney("3000"));
        });
        it('testIsTime', function() {
            assert.ok(Word.isTime("9:1"));
            assert.ok(Word.isTime("9:12"));
            assert.ok(Word.isTime("12:1"));
            assert.ok(Word.isTime("12:13"));
            assert.ok(Word.isTime("1:9:1"));
            assert.ok(Word.isTime("1:9:12"));
            assert.ok(Word.isTime("1:12:1"));
            assert.ok(Word.isTime("2:13:14"));
            assert.ok(Word.isTime("12:9:1"));
            assert.ok(Word.isTime("11:9:12"));
            assert.ok(Word.isTime("10:12:1"));
            assert.ok(Word.isTime("21:13:14"));
            assert.ok(!Word.isTime("12"));
            assert.ok(!Word.isTime("1:1:1:1"));
            assert.ok(Word.isTime("ocak"));
            assert.ok(Word.isTime("şubat"));
            assert.ok(Word.isTime("mart"));
            assert.ok(Word.isTime("nisan"));
            assert.ok(Word.isTime("mayıs"));
            assert.ok(Word.isTime("haziran"));
            assert.ok(Word.isTime("temmuz"));
            assert.ok(Word.isTime("ağustos"));
            assert.ok(Word.isTime("eylül"));
            assert.ok(Word.isTime("ekim"));
            assert.ok(Word.isTime("kasım"));
            assert.ok(Word.isTime("aralık"));
            assert.ok(Word.isTime("Ocak"));
            assert.ok(Word.isTime("Şubat"));
            assert.ok(Word.isTime("Mart"));
            assert.ok(Word.isTime("Nisan"));
            assert.ok(Word.isTime("Mayıs"));
            assert.ok(Word.isTime("Haziran"));
            assert.ok(Word.isTime("Temmuz"));
            assert.ok(Word.isTime("Ağustos"));
            assert.ok(Word.isTime("Eylül"));
            assert.ok(Word.isTime("Ekim"));
            assert.ok(Word.isTime("Kasım"));
            assert.ok(Word.isTime("Aralık"));
            assert.ok(Word.isTime("pazartesi"));
            assert.ok(Word.isTime("salı"));
            assert.ok(Word.isTime("çarşamba"));
            assert.ok(Word.isTime("perşembe"));
            assert.ok(Word.isTime("cuma"));
            assert.ok(Word.isTime("cumartesi"));
            assert.ok(Word.isTime("pazar"));
            assert.ok(Word.isTime("Pazartesi"));
            assert.ok(Word.isTime("Salı"));
            assert.ok(Word.isTime("Çarşamba"));
            assert.ok(Word.isTime("Perşembe"));
            assert.ok(Word.isTime("Cuma"));
            assert.ok(Word.isTime("Cumartesi"));
            assert.ok(Word.isTime("Pazar"));
            assert.ok(!Word.isTime("1234567"));
            assert.ok(!Word.isTime("-1234"));
            assert.ok(!Word.isTime("1834"));
            assert.ok(!Word.isTime("2201"));
            assert.ok(Word.isTime("1934"));
        });
    });
});
