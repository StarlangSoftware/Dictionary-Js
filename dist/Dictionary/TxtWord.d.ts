import { Word } from "./Word";
export declare class TxtWord extends Word {
    private flags;
    private morphology;
    /**
     * A constructor of {@link TxtWord} class which takes a String name as an input and calls its super class {@link Word}
     * with given name. Then, creates a new {@link Array} as flags.
     *
     * @param name String name.
     * @param flag String input.
     */
    constructor(name: string, flag?: string);
    clone(): TxtWord;
    /**
     * The addFlag method takes a String flag as an input and adds given flag to the flags {@link Array}.
     *
     * @param flag String input to add.
     */
    addFlag(flag: string): void;
    /**
     * The removeFlag method takes a String flag as an input and removes given flag from the flags {@link Array}.
     *
     * @param flag String input to remove.
     */
    removeFlag(flag: string): void;
    setMorphology(morphology: string): void;
    getMorphology(): string;
    /**
     * The verbType method checks flags {@link Array} and returns the corresponding cases.
     *
     * @return the corresponding cases.
     */
    verbType(): string;
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
    samePos(word: TxtWord): boolean;
    /**
     * The isNominal method returns true if flags {@link Array} contains CL_ISIM.
     *
     * @return true if flags {@link Array} contains CL_ISIM.
     */
    isNominal(): boolean;
    /**
     * The isPassive method returns true if flags {@link Array} contains PASSIVE-HN.
     *
     * @return true if flags {@link Array} contains PASSIVE-HN.
     */
    isPassive(): boolean;
    /**
     * The isAbbreviation method returns true if flags {@link Array} contains IS_KIS.
     *
     * @return true if flags {@link Array} contains IS_KIS.
     */
    isAbbreviation(): boolean;
    /**
     * The isInterjection method returns true if flags {@link Array} contains IS_INTERJ.
     *
     * @return true if flags {@link Array} contains IS_INTERJ.
     */
    isInterjection(): boolean;
    /**
     * The isDuplicate method returns true if flags {@link Array} contains IS_DUP.
     *
     * @return true if flags {@link Array} contains IS_DUP.
     */
    isDuplicate(): boolean;
    /**
     * The isDuplicate method returns true if flags {@link Array} contains IS_CODE.
     *
     * @return true if flags {@link Array} contains IS_CODE.
     */
    isCode(): boolean;
    /**
     * The isDuplicate method returns true if flags {@link Array} contains IS_METRIC.
     *
     * @return true if flags {@link Array} contains IS_METRIC.
     */
    isMetric(): boolean;
    /**
     * The isHeader method returns true if flags {@link Array} contains IS_HEADER.
     *
     * @return true if flags {@link Array} contains IS_HEADER.
     */
    isHeader(): boolean;
    /**
     * The isAdjective method returns true if flags {@link Array} contains IS_ADJ.
     *
     * @return true if flags {@link Array} contains IS_ADJ.
     */
    isAdjective(): boolean;
    /**
     * The isPureAdjective method returns true if flags {@link Array} contains IS_PUREADJ.
     *
     * @return true if flags {@link Array} contains IS_PUREADJ.
     */
    isPureAdjective(): boolean;
    /**
     * The isPronoun method returns true if flags {@link Array} contains IS_ZM.
     *
     * @return true if flags {@link Array} contains IS_ZM.
     */
    isPronoun(): boolean;
    /**
     * The isQuestion method returns true if flags {@link Array} contains IS_QUES.
     *
     * @return true if flags {@link Array} contains IS_QUES.
     */
    isQuestion(): boolean;
    /**
     * The isVerb method returns true if flags {@link Array} contains CL_FIIL.
     *
     * @return true if flags {@link Array} contains CL_FIIL.
     */
    isVerb(): boolean;
    /**
     * The isPortmanteau method returns true if flags {@link Array} contains IS_BILEŞ.
     *
     * @return true if flags {@link Array} contains IS_BILEŞ.
     */
    isPortmanteau(): boolean;
    /**
     * The isDeterminer method returns true if flags {@link Array} contains IS_DET.
     *
     * @return true if flags {@link Array} contains IS_DET.
     */
    isDeterminer(): boolean;
    /**
     * The isConjunction method returns true if flags {@link Array} contains IS_CONJ.
     *
     * @return true if flags {@link Array} contains IS_CONJ.
     */
    isConjunction(): boolean;
    /**
     * The isAdverb method returns true if flags {@link Array} contains IS_ADVERB.
     *
     * @return true if flags {@link Array} contains IS_ADVERB.
     */
    isAdverb(): boolean;
    /**
     * The isPostP method returns true if flags {@link Array} contains IS_POSTP.
     *
     * @return true if flags {@link Array} contains IS_POSTP.
     */
    isPostP(): boolean;
    /**
     * The isPortmanteauEndingWithSI method returns true if flags {@link Array} contains IS_B_SI.
     *
     * @return true if flags {@link Array} contains IS_B_SI.
     */
    isPortmanteauEndingWithSI(): boolean;
    /**
     * The isPortmanteauFacedVowelEllipsis method returns true if flags {@link Array} contains IS_B_UD.
     *
     * @return true if flags {@link Array} contains IS_B_UD.
     */
    isPortmanteauFacedVowelEllipsis(): boolean;
    /**
     * The isPortmanteauFacedSoftening method returns true if flags {@link Array} contains IS_B_UD.
     *
     * @return true if flags {@link Array} contains IS_B_SD.
     */
    isPortmanteauFacedSoftening(): boolean;
    /**
     * The isSuffix method returns true if flags {@link Array} contains EK.
     *
     * @return true if flags {@link Array} contains EK.
     */
    isSuffix(): boolean;
    /**
     * The isProperNoun method returns true if flags {@link Array} contains IS_OA.
     *
     * @return true if flags {@link Array} contains IS_OA.
     */
    isProperNoun(): boolean;
    /**
     * The isPlural method returns true if flags {@link Array} contains IS_CA.
     *
     * @return true if flags {@link Array} contains IS_CA.
     */
    isPlural(): boolean;
    /**
     * The isNumeral method returns true if flags {@link Array} contains IS_SAYI.
     *
     * @return true if flags {@link Array} contains IS_SAYI.
     */
    isNumeral(): boolean;
    /**
     * The isReal method returns true if flags {@link Array} contains IS_REELSAYI.
     *
     * @return true if flags {@link Array} contains IS_REELSAYI.
     */
    isReal(): boolean;
    /**
     * The isFraction method returns true if flags {@link Array} contains IS_KESIR.
     *
     * @return true if flags {@link Array} contains IS_KESIR.
     */
    isFraction(): boolean;
    /**
     * The isTime method returns true if flags {@link Array} contains IS_ZAMAN.
     *
     * @return true if flags {@link Array} contains IS_ZAMAN.
     */
    isTime(): boolean;
    /**
     * The isDate method returns true if flags {@link Array} contains IS_DATE.
     *
     * @return true if flags {@link Array} contains IS_DATE.
     */
    isDate(): boolean;
    /**
     * The isPercent method returns true if flags {@link Array} contains IS_PERCENT.
     *
     * @return true if flags {@link Array} contains IS_PERCENT.
     */
    isPercent(): boolean;
    /**
     * The isRange method returns true if flags {@link Array} contains IS_RANGE.
     *
     * @return true if flags {@link Array} contains IS_RANGE.
     */
    isRange(): boolean;
    /**
     * The isOrdinal method returns true if flags {@link Array} contains IS_ORD.
     *
     * @return true if flags {@link Array} contains IS_ORD.
     */
    isOrdinal(): boolean;
    /**
     * The notObeysVowelHarmonyDuringAgglutination method returns true if flags {@link Array} contains IS_UU.
     *
     * @return true if flags {@link Array} contains IS_UU.
     */
    notObeysVowelHarmonyDuringAgglutination(): boolean;
    /**
     * The obeysAndNotObeysVowelHarmonyDuringAgglutination method returns true if flags {@link Array} contain IS_UUU.
     *
     * @return true if flags {@link Array} contains IS_UUU.
     */
    obeysAndNotObeysVowelHarmonyDuringAgglutination(): boolean;
    /**
     * The rootSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SD, F_SD.
     *
     * @return true if flags {@link Array} contains IS_SD, F_SD.
     */
    rootSoftenDuringSuffixation(): boolean;
    /**
     * The rootSoftenAndNotSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SDD.
     *
     * @return true if flags {@link Array} contains IS_SDD.
     */
    rootSoftenAndNotSoftenDuringSuffixation(): boolean;
    /**
     * The verbSoftenDuringSuffixation method returns true if flags {@link Array} contains F_SD.
     *
     * @return true if flags {@link Array} contains F_SD.
     */
    verbSoftenDuringSuffixation(): boolean;
    /**
     * The nounSoftenDuringSuffixation method returns true if flags {@link Array} contains IS_SD.
     *
     * @return true if flags {@link Array} contains IS_SD.
     */
    nounSoftenDuringSuffixation(): boolean;
    /**
     * The endingKChangesIntoG method returns true if flags {@link Array} contains IS_KG.
     *
     * @return true if flags {@link Array} contains IS_KG.
     */
    endingKChangesIntoG(): boolean;
    /**
     * The isExceptional method returns true if flags {@link Array} contains IS_EX.
     *
     * @return true if flags {@link Array} contains IS_EX.
     */
    isExceptional(): boolean;
    /**
     * The duplicatesDuringSuffixation method returns true if flags {@link Array} contains IS_ST.
     *
     * @return true if flags {@link Array} contains IS_ST.
     */
    duplicatesDuringSuffixation(): boolean;
    /**
     * The duplicatesAndNotDuplicatesDuringSuffixation method returns true if flags {@link Array} contains IS_STT.
     *
     * @return true if flags {@link Array} contains IS_STT.
     */
    duplicatesAndNotDuplicatesDuringSuffixation(): boolean;
    /**
     * The lastIdropsDuringSuffixation method returns true if flags {@link Array} contains IS_UD.
     *
     * @return true if flags {@link Array} contains IS_UD.
     */
    lastIdropsDuringSuffixation(): boolean;
    /**
     * The lastIDropsAndNotDropDuringSuffixation method returns true if flags {@link Array} contains IS_UDD.
     *
     * @return true if flags {@link Array} contains IS_UDD.
     */
    lastIDropsAndNotDropDuringSuffixation(): boolean;
    /**
     * The takesRelativeSuffixKi method returns true if flags {@link Array} contains IS_KI.
     *
     * @return true if flags {@link Array} contains IS_KI.
     */
    takesRelativeSuffixKi(): boolean;
    /**
     * The takesRelativeSuffixKu method returns true if flags {@link Array} contains IS_KU.
     *
     * @return true if flags {@link Array} contains IS_KU.
     */
    takesRelativeSuffixKu(): boolean;
    /**
     * The consonantSMayInsertedDuringPossesiveSuffixation method returns true if flags {@link Array} contains IS_SII.
     *
     * @return true if flags {@link Array} contains IS_SII.
     */
    consonantSMayInsertedDuringPossesiveSuffixation(): boolean;
    /**
     * The lastIdropsDuringPassiveSuffixation method returns true if flags {@link Array} contains F_UD.
     *
     * @return true if flags {@link Array} contains F_UD.
     */
    lastIdropsDuringPassiveSuffixation(): boolean;
    /**
     * The vowelAChangesToIDuringYSuffixation method returns true if flags {@link Array} contains F_GUD.
     *
     * @return true if flags {@link Array} contains F_GUD.
     */
    vowelAChangesToIDuringYSuffixation(): boolean;
    /**
     * The vowelEChangesToIDuringYSuffixation method returns true if flags {@link Array} contains F_GUDO.
     *
     * @return true if flags {@link Array} contains F_GUDO.
     */
    vowelEChangesToIDuringYSuffixation(): boolean;
    /**
     * The takesSuffixIRAsAorist method returns true if flags {@link Array} contains F_GIR.
     *
     * @return true if flags {@link Array} contains F_GIR.
     */
    takesSuffixIRAsAorist(): boolean;
    /**
     * The takesSuffixDIRAsFactitive method returns true if flags {@link Array} contains F_DIR.
     *
     * @return true if flags {@link Array} contains F_DIR.
     */
    takesSuffixDIRAsFactitive(): boolean;
    /**
     * The showsSuRegularities method returns true if flags {@link Array} contains IS_SU.
     *
     * @return true if flags {@link Array} contains IS_SU.
     */
    showsSuRegularities(): boolean;
    /**
     * The containsFlag method returns true if flags {@link Array} contains flag.
     *
     * @param flag Flag to be cheked
     * @return true if flags {@link Array} contains flag.
     */
    containsFlag(flag: string): boolean;
    toString(): string;
}
