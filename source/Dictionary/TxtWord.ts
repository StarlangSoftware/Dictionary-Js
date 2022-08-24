import {Word} from "./Word";

export class TxtWord extends Word{

    private flags: Array<string> = []
    private morphology: string

    /**
     * A constructor of {@link TxtWord} class which takes a String name as an input and calls its super class {@link Word}
     * with given name. Then, creates a new {@link Array} as flags.
     *
     * @param name String name.
     * @param flag String input.
     */
    constructor(name: string, flag?: string) {
        super(name);
        if (flag != undefined){
            this.addFlag(flag)
        }
    }

    clone(): TxtWord{
        let copy = new TxtWord(this.name);
        for (let i = 0; i < this.flags.length; i++) {
            copy.addFlag(this.flags[i]);
        }
        return copy;
    }

    /**
     * The addFlag method takes a String flag as an input and adds given flag to the flags {@link ArrayList}.
     *
     * @param flag String input to add.
     */
    addFlag(flag: string){
        this.flags.push(flag)
    }

    /**
     * The removeFlag method takes a String flag as an input and removes given flag from the flags {@link ArrayList}.
     *
     * @param flag String input to remove.
     */
    removeFlag(flag: string){
        this.flags.splice(this.flags.indexOf(flag), 1)
    }

    setMorphology(morphology: string){
        this.morphology = morphology
    }

    getMorphology(): string{
        return this.morphology
    }

    /**
     * The verbType method checks flags {@link Array} and returns the corresponding cases.
     *
     * @return the corresponding cases.
     */
    verbType(): string{
        if (this.flags.includes("F2P1-NO-REF")) {
            /*
             F2P1-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             can take CausativeT suffix. e.g. Doğ, göç, için
             */
            return "F2P1-NO-REF";
        }
        if (this.flags.includes("F3P1-NO-REF")) {
            /*
             *F3P1-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take Passive Hl suffix,
             *can take CausativeT suffix. e.g. Ak
             */
            return "F3P1-NO-REF";
        }
        if (this.flags.includes("F4P1-NO-REF")) {
            /*
             *F4P1-NO-REF: The bare-form is a verb and depending on this attribute, the verb can't take PassiveHn suffix, can take CausativeT suffix.
             *e.g. Aksa
             */
            return "F4P1-NO-REF";
        }
        if (this.flags.includes("F4PR-NO-REF")) {
            /*
             *F4PR-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeT suffix. e.g. Çevir, göster
             */
            return "F4PR-NO-REF";
        }
        if (this.flags.includes("F4PL-NO-REF")) {
            /*
             *F4PL-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix,
             *can take CausativeT suffix. e.g. Azal, çoğal
             */
            return "F4PL-NO-REF";
        }
        if (this.flags.includes("F4PW-NO-REF")) {
            /*
             *F4PW-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveN suffix,
             *can take CausativeT suffix. e.g. Birle, boya
             */
            return "F4PW-NO-REF";
        }
        if (this.flags.includes("F5PL-NO-REF")) {
            /*
             *F5PL-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix,
             *can take CausativeDHr suffix. e.g. Çal, kal
             */
            return "F5PL-NO-REF";
        }
        if (this.flags.includes("F5PR-NO-REF")) {
            /*
             *F5PR-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeDHr suffix. e.g. Birleş, çöz
             */
            return "F5PR-NO-REF";
        }
        if (this.flags.includes("F5PW-NO-REF")) {
            /*
             *F5PW-NO-REF: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeDHr suffix. e.g. Ye
             */
            return "F5PW-NO-REF";
        }
        if (this.flags.includes("F1P1")) {
            /*
             *F1P1: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeAr suffix, can take ReciprocalHs suffix. e.g. Çık, kop
             */
            return "F1P1";
        }
        if (this.flags.includes("F2P1")) {
            /*
             *F2P1: The bare-form is a verb and depending on this attribute, the verb can can not PassiveHn suffix, can take CausativeHr suffix,
             *can take CausativeDHr suffix, can take ReciprocalHs suffix. e.g. Bit, doy, düş
             */
            return "F2P1";
        }
        if (this.flags.includes("F2PL")) {
            /*
             *F2PL: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take CausativeHr suffix,
             *can take CausativeDHr suffix, can take ReciprocalHs suffix. e.g. Art, çök
             */
            return "F2PL";
        }
        if (this.flags.includes("F3P1")) {
            /*
             *F3P1: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeHl suffix, can take ReciprocalHs suffix. e.g. Kok, sark
             */
            return "F3P1";
        }
        if (this.flags.includes("F4P1")) {
            /*
             *F4P1: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix,
             *can take CausativeT suffix, can take ReciprocalHs suffix. e.g. Anla
             */
            return "F4P1";
        }
        if (this.flags.includes("F4PR")) {
            /*
             *F4PR: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeT suffix, can take ReciprocalHs suffix. e.g. Bitir, çağır
             */
            return "F4PR";
        }
        if (this.flags.includes("F4PL")) {
            /*
             *F4PL: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveN suffix,
             *can take CausativeT suffix, can take ReciprocalHs suffix. e.g. Bolal, çömel
             */
            return "F4PL";
        }
        if (this.flags.includes("F4PW")) {
            /*
             *F4PW: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveN suffix,
             *can take CausativeT suffix, can take ReciprocalHs suffix. e.g. Boyla, çağla
             */
            return "F4PW";
        }
        if (this.flags.includes("F5P1")) {
            /*
             *F5P1: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeDHr suffix, can take ReciprocalHs suffix, can take ReflexiveHn suffix. e.g. Giy
             */
            return "F5P1";
        }
        if (this.flags.includes("F5PL")) {
            /*
             *F5PL: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveHl suffix,
             *can take CausativeDHr suffix, can take ReciprocalHs suffix. e.g. Böl, dal
             */
            return "F5PL";
        }
        if (this.flags.includes("F5PR")) {
            /*
             *F5PR: The bare-form is a verb and depending on this attribute, the verb can take NominalVerb suffixes "-sHm, -SHn, -yHz, SHnHz, -lAr",
             *can take NominalVerb1 suffixes, "-yDH, -ysA
             ", can take NominalVerb2 suffix, "-ymHs", can take AdjectiveRoot suffix, "-SH",
             *can take Adjective suffix, "-ŞAr" e.g. Bilin, çalış
             */
            return "F5PR";
        }
        if (this.flags.includes("F5PW")) {
            /*
             *F5PW: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix,
             *can take CausativeDHr suffix, can take ReciprocalHs suffix. e.g. Boşver, cezbet
             */
            return "F5PW";
        }
        if (this.flags.includes("F6P1")) {
            /*
             *F6P1: The bare-form is a verb and depending on this attribute, the verb can not take PassiveHn suffix, can take PassiveN suffix,
             *can take ReciprocalHs suffix, can take ReflexiveHn suffix. e.g. Gizle, hazırla, kaşı
             */
            return "F6P1";
        }
        return "";
    }

    /**
     * The samePos method takes {@link TxtWord} as input and returns true if;
     * <p>
     * flags {@link Array} contains CL_ISIM
     * CL_ISIM: The bare-form of the word is a noun. e.g. Abla
     * <p>
     * flags {@link Array} contains CL_FIIL
     * CL_FIIL: The bare-form of the word is a verb. e.g. Affet
     * <p>
     * flags {@link Array} contains IS_ADJ
     * IS_ADJ: The bare-form of the word is a adjective. e.g. Acayip
     * <p>
     * flags {@link Array} contains IS_ZM
     * IS_ZM: The bare-form of the word is a pronoun. e.g. Başkası
     * <p>
     * flags {@link Array} contains IS_ADVERB
     * IS_ADVERB: The bare-form of the word is a adverb. e.g. Tekrar, açıktan, adeta
     *
     * @param word {@link TxtWord} type input.
     * @return true if given word is nominal, verb, adjective, pronoun or adverb, false otherwise.
     */
    samePos(word: TxtWord): boolean{
        if (this.isNominal() && word.isNominal()) {
            return true;
        }
        if (this.isVerb() && word.isVerb()) {
            return true;
        }
        if (this.isAdjective() && word.isAdjective()) {
            return true;
        }
        if (this.isPronoun() && word.isPronoun()) {
            return true;
        }
        if (this.isAdverb() && word.isAdverb()) {
            return true;
        }
        return false;
    }

    /**
     * The isNominal method returns true if flags {@link Array} contains CL_ISIM.
     *
     * @return true if flags {@link Array} contains CL_ISIM.
     */
    isNominal(): boolean{
        return this.flags.includes("CL_ISIM");
    }

    /**
     * The isPassive method returns true if flags {@link Array} contains PASSIVE-HN.
     *
     * @return true if flags {@link Array} contains PASSIVE-HN.
     */
    isPassive(): boolean{
        return this.flags.includes("PASSIVE-HN");
    }

    /**
     * The isAbbreviation method returns true if flags {@link Array} contains IS_KIS.
     *
     * @return true if flags {@link Array} contains IS_KIS.
     */
    isAbbreviation(): boolean{
        /*
         IS_KIS: The bare-form of the word is an abbrevation which does not obey
         vowel harmony while taking suffixes. Örn. Ab
         */
        return this.flags.includes("IS_KIS");
    }

    /**
     * The isInterjection method returns true if flags {@link Array} contains IS_INTERJ.
     *
     * @return true if flags {@link Array} contains IS_INTERJ.
     */
    isInterjection(): boolean{
        /*
         *IS_INTERJ: An interjection is a part of speech that shows the emotion or feeling. e.g. Ah, aferin
         */
        return this.flags.includes("IS_INTERJ");
    }

    /**
     * The isDuplicate method returns true if flags {@link Array} contains IS_DUP.
     *
     * @return true if flags {@link Array} contains IS_DUP.
     */
    isDuplicate(): boolean{
        /*
         *IS_DUP: The bare-form is part of a duplicate form. e.g. Abuk
         */
        return this.flags.includes("IS_DUP");
    }

    /**
     * The isHeader method returns true if flags {@link Array} contains IS_HEADER.
     *
     * @return true if flags {@link Array} contains IS_HEADER.
     */
    isHeader(): boolean{
        return this.flags.includes("IS_HEADER");
    }

    /**
     * The isAdjective method returns true if flags {@link Array} contains IS_ADJ.
     *
     * @return true if flags {@link Array} contains IS_ADJ.
     */
    isAdjective(): boolean{
        return this.flags.includes("IS_ADJ");
    }

    /**
     * The isPureAdjective method returns true if flags {@link Array} contains IS_PUREADJ.
     *
     * @return true if flags {@link Array} contains IS_PUREADJ.
     */
    isPureAdjective(): boolean{
        return this.flags.includes("IS_PUREADJ");
    }

    /**
     * The isPronoun method returns true if flags {@link Array} contains IS_ZM.
     *
     * @return true if flags {@link Array} contains IS_ZM.
     */
    isPronoun(): boolean{
        /*
         *IS_ZM: The bare-form of the word is a pronoun. e.g. Hangi, hep, hiçbiri
         */
        return this.flags.includes("IS_ZM");
    }

    /**
     * The isQuestion method returns true if flags {@link Array} contains IS_QUES.
     *
     * @return true if flags {@link Array} contains IS_QUES.
     */
    isQuestion(): boolean{
        /*The bare-form of the word is a question. e.g. Mi, mu, mü
         */
        return this.flags.includes("IS_QUES");
    }

    /**
     * The isVerb method returns true if flags {@link Array} contains CL_FIIL.
     *
     * @return true if flags {@link Array} contains CL_FIIL.
     */
    isVerb(): boolean{
        return this.flags.includes("CL_FIIL");
    }

    /**
     * The isPortmanteau method returns true if flags {@link Array} contains IS_BILEŞ.
     *
     * @return true if flags {@link Array} contains IS_BILEŞ.
     */
    isPortmanteau(): boolean{
        /*
         *IS_BILEŞ: The bare-form is a portmanteau word in affixed form. e.g. gelinçiçeği
         */
        return this.flags.includes("IS_BILEŞ");
    }

    /**
     * The isDeterminer method returns true if flags {@link Array} contains IS_DET.
     *
     * @return true if flags {@link Array} contains IS_DET.
     */
    isDeterminer(): boolean{
        /*
         *IS_DET: The bare-form of the word is a determiner. e.g. Bazı, bir
         */
        return this.flags.includes("IS_DET");
    }

    /**
     * The isConjunction method returns true if flags {@link Array} contains IS_CONJ.
     *
     * @return true if flags {@link Array} contains IS_CONJ.
     */
    isConjunction(): boolean{
        /*
         *IS_CONJ: The bare-form of the word is a conjunction. e.g. Gerek, halbuki
         */
        return this.flags.includes("IS_CONJ");
    }

    /**
     * The isAdverb method returns true if flags {@link Array} contains IS_ADVERB.
     *
     * @return true if flags {@link Array} contains IS_ADVERB.
     */
    isAdverb(): boolean{
        return this.flags.includes("IS_ADVERB");
    }

    /**
     * The isPostP method returns true if flags {@link Array} contains IS_POSTP.
     *
     * @return true if flags {@link Array} contains IS_POSTP.
     */
    isPostP(): boolean{
        /*
         *The bare-form of the word is a postposition. e.g. Önce, takdirde, üzere
         */
        return this.flags.includes("IS_POSTP");
    }

    /**
     * The isPortmanteauEndingWithSI method returns true if flags {@link Array} contains IS_B_SI.
     *
     * @return true if flags {@link Array} contains IS_B_SI.
     */
    isPortmanteauEndingWithSI(): boolean{
        /*
         *IS_B_SI: The bare-form is a portmanteau word ending with "sı". e.g. Giritlalesi
         */
        return this.flags.includes("IS_B_SI");
    }

    /**
     * The isPortmanteauFacedVowelEllipsis method returns true if flags {@link Array} contains IS_B_UD.
     *
     * @return true if flags {@link Array} contains IS_B_UD.
     */
    isPortmanteauFacedVowelEllipsis(): boolean{
        /*
         *IS_B_UD: The bare-form of the word includes vowel epenthesis,
         *therefore the last inserted vowel drops during suffixation. e.g. İnsanoğlu
         */
        return this.flags.includes("IS_B_UD");
    }

    /**
     * The isPortmanteauFacedSoftening method returns true if flags {@link Array} contains IS_B_UD.
     *
     * @return true if flags {@link Array} contains IS_B_SD.
     */
    isPortmanteauFacedSoftening(): boolean{
        /*
         *IS_B_SD: The bare-form of the word includes softening. e.g. Çançiçeği
         */
        return this.flags.includes("IS_B_SD");
    }

    /**
     * The isSuffix method returns true if flags {@link Array} contains EK.
     *
     * @return true if flags {@link Array} contains EK.
     */
    isSuffix(): boolean{
        /*
         * EK: This tag indicates complementary verbs. e.g. İdi, iken, imiş.
         */
        return this.flags.includes("EK");
    }

    /**
     * The isProperNoun method returns true if flags {@link Array} contains IS_OA.
     *
     * @return true if flags {@link Array} contains IS_OA.
     */
    isProperNoun(): boolean{
        /*
         *IS_OA: The bare-form of the word is a proper noun. e.g. Abant, Beşiktaş
         */
        return this.flags.includes("IS_OA");
    }

    /**
     * The isPlural method returns true if flags {@link Array} contains IS_CA.
     *
     * @return true if flags {@link Array} contains IS_CA.
     */
    isPlural(): boolean{
        /*
         *IS_CA: The bare-form of the word is already in a plural form,
         *therefore can not take plural suffixes such as "ler" or "lar". e.g. Buğdaygiller
         */
        return this.flags.includes("IS_CA");
    }

    /**
     * The isNumeral method returns true if flags {@link Array} contains IS_SAYI.
     *
     * @return true if flags {@link Array} contains IS_SAYI.
     */
    isNumeral(): boolean{
        /*
         *IS_SAYI: The word is a number. e.g. Dört
         */
        return this.flags.includes("IS_SAYI");
    }

    /**
     * The isReal method returns true if flags {@link Array} contains IS_REELSAYI.
     *
     * @return true if flags {@link Array} contains IS_REELSAYI.
     */
    isReal(): boolean{
        return this.flags.includes("IS_REELSAYI");
    }

    /**
     * The isFraction method returns true if flags {@link Array} contains IS_KESIR.
     *
     * @return true if flags {@link Array} contains IS_KESIR.
     */
    isFraction(): boolean{
        return this.flags.includes("IS_KESIR");
    }

    /**
     * The isTime method returns true if flags {@link Array} contains IS_ZAMAN.
     *
     * @return true if flags {@link Array} contains IS_ZAMAN.
     */
    isTime(): boolean{
        return this.flags.includes("IS_ZAMAN");
    }

    /**
     * The isDate method returns true if flags {@link Array} contains IS_DATE.
     *
     * @return true if flags {@link Array} contains IS_DATE.
     */
    isDate(): boolean{
        return this.flags.includes("IS_DATE");
    }

    /**
     * The isPercent method returns true if flags {@link Array} contains IS_PERCENT.
     *
     * @return true if flags {@link Array} contains IS_PERCENT.
     */
    isPercent(): boolean{
        return this.flags.includes("IS_PERCENT");
    }

    /**
     * The isRange method returns true if flags {@link Array} contains IS_RANGE.
     *
     * @return true if flags {@link Array} contains IS_RANGE.
     */
    isRange(): boolean{
        return this.flags.includes("IS_RANGE");
    }

    /**
     * The isOrdinal method returns true if flags {@link Array} contains IS_ORD.
     *
     * @return true if flags {@link Array} contains IS_ORD.
     */
    isOrdinal(): boolean{
        /*
         *IS_ORD: The bare-form of the word can take suffixes and these suffixes define a ranking. e.g. Birinci
         */
        return this.flags.includes("IS_ORD");
    }

    /**
     * The notObeysVowelHarmonyDuringAgglutination method returns true if flags {@link Array} contains IS_UU.
     *
     * @return true if flags {@link Array} contains IS_UU.
     */
    notObeysVowelHarmonyDuringAgglutination(): boolean{
        /*
         *IS_UU: The bare-form does not obey vowel harmony while taking suffixes. e.g. Dikkat
         */
        return this.flags.includes("IS_UU");
    }

    /**
     * The obeysAndNotObeysVowelHarmonyDuringAgglutination method returns true if flags {@link Array} contain IS_UUU.
     *
     * @return true if flags {@link Array} contains IS_UUU.
     */
    obeysAndNotObeysVowelHarmonyDuringAgglutination(): boolean{
        /*
         *IS_UUU: The bare-form does not obey vowel harmony while taking suffixes. e.g. Bol, kalp
         */
        return this.flags.includes("IS_UUU");
    }

    /**
     * The rootSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SD, F_SD.
     *
     * @return true if flags {@link Array} contains IS_SD, F_SD.
     */
    rootSoftenDuringSuffixation(): boolean{
        return this.flags.includes("IS_SD") || this.flags.includes("F_SD");
    }

    /**
     * The rootSoftenAndNotSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SDD.
     *
     * @return true if flags {@link Array} contains IS_SDD.
     */
    rootSoftenAndNotSoftenDuringSuffixation(): boolean{
        /*
         *The bare-form final consonant can (or can not) get devoiced during vowel-initial suffixation. e.g. Kalp
         */
        return this.flags.includes("IS_SDD");
    }

    /**
     * The verbSoftenDuringSuffixation method returns true if flags {@link Array} contains F_SD.
     *
     * @return true if flags {@link Array} contains F_SD.
     */
    verbSoftenDuringSuffixation(): boolean{
        /*
         * F_SD: The bare-form final consonant gets devoiced during vowel-initial suffixation. e.g. Cezbet
         */
        return this.flags.includes("F_SD");
    }

    /**
     * The nounSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SD.
     *
     * @return true if flags {@link Array} contains IS_SD.
     */
    nounSoftenDuringSuffixation(): boolean{
        /*
         *IS_SD: The bare-form final consonant already has an accusative suffix. e.g. Kabağı
         */
        return this.flags.includes("IS_SD");
    }

    /**
     * The endingKChangesIntoG method returns true if flags {@link Array} contains IS_KG.
     *
     * @return true if flags {@link Array} contains IS_KG.
     */
    endingKChangesIntoG(): boolean{
        /*
         *IS_KG: The bare-form includes vowel epenthesis, therefore the last inserted vowel drope
         *during suffixation. e.g. Çelenk
         */
        return this.flags.includes("IS_KG");
    }

    /**
     * The isExceptional method returns true if flags {@link Array} contains IS_EX.
     *
     * @return true if flags {@link Array} contains IS_EX.
     */
    isExceptional(): boolean{
        /*
         *IS_EX: This tag defines exception words. e.g. Delikanlı
         */
        return this.flags.includes("IS_EX");
    }

    /**
     * The duplicatesDuringSuffixation method returns true if flags {@link Array} contains IS_ST.
     *
     * @return true if flags {@link Array} contains IS_ST.
     */
    duplicatesDuringSuffixation(): boolean{
        /*
         *IS_ST: The second consonant of the bare-form undergoes a resyllabification. e.g. His
         */
        return this.flags.includes("IS_ST");
    }

    /**
     * The duplicatesAndNotDuplicatesDuringSuffixation method returns true if flags {@link Array} contains IS_STT.
     *
     * @return true if flags {@link Array} contains IS_STT.
     */
    duplicatesAndNotDuplicatesDuringSuffixation(): boolean{
        /*
         *IS_STT: The second consonant of the bare-form undergoes a resyllabification. e.g. His
         */
        return this.flags.includes("IS_STT");
    }

    /**
     * The lastIdropsDuringSuffixation method returns true if flags {@link Array} contains IS_UD.
     *
     * @return true if flags {@link Array} contains IS_UD.
     */
    lastIdropsDuringSuffixation(): boolean{
        /*
         *IS_UD: The bare-form includes vowel epenthesis, therefore the last inserted vowel drops during suffixation.
         *e.g. Boyun
         */
        return this.flags.includes("IS_UD");
    }

    /**
     * The lastIDropsAndNotDropDuringSuffixation method returns true if flags {@link Array} contains IS_UDD.
     *
     * @return true if flags {@link Array} contains IS_UDD.
     */
    lastIDropsAndNotDropDuringSuffixation(): boolean{
        /*
         *The bare-form includes vowel epenthesis, therefore the last inserted vowel can (or can not) drop during
         * suffixation. e.g. Kadir
         */
        return this.flags.includes("IS_UDD");
    }

    /**
     * The takesRelativeSuffixKi method returns true if flags {@link Array} contains IS_KI.
     *
     * @return true if flags {@link Array} contains IS_KI.
     */
    takesRelativeSuffixKi(): boolean{
        /*
         *IS_KI: The word can take a suffix such as "ki". e.g. Önce
         */
        return this.flags.includes("IS_KI");
    }

    /**
     * The takesRelativeSuffixKu method returns true if flags {@link Array} contains IS_KU.
     *
     * @return true if flags {@link Array} contains IS_KU.
     */
    takesRelativeSuffixKu(): boolean{
        /*
         *IS_KU: The word can take a suffix such as "kü". e.g. Bugün
         */
        return this.flags.includes("IS_KU");
    }

    /**
     * The consonantSMayInsertedDuringPossesiveSuffixation method returns true if flags {@link Array} contains IS_SII.
     *
     * @return true if flags {@link Array} contains IS_SII.
     */
    consonantSMayInsertedDuringPossesiveSuffixation(): boolean{
        return this.flags.includes("IS_SII");
    }

    /**
     * The lastIdropsDuringPassiveSuffixation method returns true if flags {@link Array} contains F_UD.
     *
     * @return true if flags {@link Array} contains F_UD.
     */
    lastIdropsDuringPassiveSuffixation(): boolean{
        /*
         *F_UD: The bare-form includes vowel epenthesis, therefore the last "ı"
         *drops during passive suffixation. e.g. Çağır
         */
        return this.flags.includes("F_UD");
    }

    /**
     * The vowelAChangesToIDuringYSuffixation method returns true if flags {@link Array} contains F_GUD.
     *
     * @return true if flags {@link Array} contains F_GUD.
     */
    vowelAChangesToIDuringYSuffixation(): boolean{
        /*
         *F_GUD: The verb bare-form includes vowel reduction, the last vowel "a" of the bare-form is replaced with "ı"
         *e.g. Buzağıla
         */
        return this.flags.includes("F_GUD");
    }

    /**
     * The vowelEChangesToIDuringYSuffixation method returns true if flags {@link Array} contains F_GUDO.
     *
     * @return true if flags {@link Array} contains F_GUDO.
     */
    vowelEChangesToIDuringYSuffixation(): boolean{
        /*
         *F_GUDO: The verb bare-form includes viwel reduction, the last vowel "e" of the
         *bare-form is replaced with "i". e.g. Ye
         */
        return this.flags.includes("F_GUDO");
    }

    /**
     * The takesSuffixIRAsAorist method returns true if flags {@link Array} contains F_GIR.
     *
     * @return true if flags {@link Array} contains F_GIR.
     */
    takesSuffixIRAsAorist(): boolean{
        /*
         *F_GIR: The bare-form of the word takes "ir" suffix. e.g. Geç
         */
        return !this.flags.includes("F_GIR");
    }

    /**
     * The takesSuffixDIRAsFactitive method returns true if flags {@link Array} contains F_DIR.
     *
     * @return true if flags {@link Array} contains F_DIR.
     */
    takesSuffixDIRAsFactitive(): boolean{
        /*
         *F_DIR: The bare-form of the word takes "tır" suffix. e.g. Daral
         */
        return !this.flags.includes("F_DIR");
    }

    /**
     * The showsSuRegularities method returns true if flags {@link Array} contains IS_SU.
     *
     * @return true if flags {@link Array} contains IS_SU.
     */
    showsSuRegularities(): boolean{
        return this.flags.includes("IS_SU");
    }

    /**
     * The containsFlag method returns true if flags {@link Array} contains flag.
     *
     * @param flag Flag to be cheked
     * @return true if flags {@link Array} contains flag.
     */
    containsFlag(flag: string): boolean{
        return this.flags.includes(flag);
    }

    toString(): string{
        let result = super.toString()
        for (let flag of this.flags){
            result += " " + flag;
        }
        return result
    }
}