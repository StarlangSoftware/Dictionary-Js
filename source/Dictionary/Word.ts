import {TurkishLanguage} from "../Language/TurkishLanguage";

export class Word {

    protected name: string

    /**
     * A constructor of {@link Word} class which gets a String name as an input and assigns to the name variable.
     *
     * @param name String input.
     */
    constructor(name: string) {
        this.name = name
    }

    /**
     * The overridden toString method returns the name variable.
     *
     * @return the name variable.
     */
    toString(): string{
        return this.name
    }

    /**
     * The charCount method returns the length of name variable.
     *
     * @return the length of name variable.
     */
    charCount(): number{
        return this.name.length
    }

    /**
     * Getter for the name variable.
     *
     * @return name variable.
     */
    getName(): string{
        return this.name
    }

    /**
     * Setter for the name variable.
     *
     * @param name String input.
     */
    setName(name: string){
        this.name = name
    }

    /**
     * The isCapital method takes a String surfaceForm as an input and returns true if the character at first index of surfaceForm
     * is a capital letter, false otherwise.
     *
     * @param surfaceForm String input to check the first character.
     * @return true if the character at first index of surfaceForm is a capital letter, false otherwise.
     */
    static isCapital(surfaceForm: string): boolean{
        return TurkishLanguage.UPPERCASE_LETTERS.includes(surfaceForm.charAt(0))
    }

    /**
     * The isPunctuation method takes a String surfaceForm as an input and returns true if it is a punctuation, false otherwise.
     * Grave accent : \u0060
     * Left quotation mark : \u201C
     * Right quotation mark : \u201D
     * Left single quotation mark : \u2018
     *Horizontal ellipsis : \u2026
     *
     * @param surfaceForm String input to check.
     * @return true if it is a punctuation, false otherwise.
     */
    static isPunctuation(surfaceForm: string): boolean{
        return (surfaceForm == "." || surfaceForm == "..." || surfaceForm == "[" || surfaceForm == "]" ||
            surfaceForm == "\u2026" || surfaceForm == "%" || surfaceForm == "&" || surfaceForm == "=" ||
            surfaceForm == "\u0060\u0060" || surfaceForm == "\u0060" || surfaceForm == "''" || surfaceForm == "$" ||
            surfaceForm == "!" || surfaceForm == "?" || surfaceForm == "," || surfaceForm == ":" ||
            surfaceForm == "--" || surfaceForm == ";" || surfaceForm == "(" || surfaceForm == ")" ||
            surfaceForm == "'" || surfaceForm == "\"" || surfaceForm == "\u201C" || surfaceForm == "\u2018" ||
            surfaceForm == "\u201D" || surfaceForm == "…" || surfaceForm == "\u25CF" || surfaceForm == "/" ||
            surfaceForm == "-" || surfaceForm == "+" || surfaceForm == "-LRB-" || surfaceForm == "-RRB-" ||
            surfaceForm == "-LCB-" || surfaceForm == "-RCB-" || surfaceForm == "-LSB-" || surfaceForm == "-RSB-")
    }

    /**
     * The isHonorific method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to "bay" or "bayan", false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to "bay" or "bayan", false otherwise.
     */
    static isHonorific(surfaceForm: string): boolean{
        let lowerCase = surfaceForm.toLocaleLowerCase("tr")
        return lowerCase == "bay" || lowerCase == "bayan"
    }

    /**
     * The isOrganization method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to "şirket", "corp", "inc.", or "co.", and false otherwise.
     */
    static isOrganization(surfaceForm: string): boolean{
        let lowerCase = surfaceForm.toLocaleLowerCase("tr")
        return lowerCase == "corp" || lowerCase == "inc." || lowerCase == "co."
    }

    /**
     * The isMoney method takes a String surfaceForm as an input and after converting it to lower case it returns true
     * if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
     *
     * @param surfaceForm String input to check.
     * @return true if it equals to one of the dolar, sterlin, paunt, ons, ruble, mark, frank, yan, sent, yen' or $, and false otherwise.
     */
    static isMoney(surfaceForm: string): boolean{
        let lowerCase = surfaceForm.toLocaleLowerCase("tr")
        return lowerCase.startsWith("dolar") || lowerCase.startsWith("sterlin") || lowerCase.startsWith("paunt")
            || lowerCase.startsWith("ons") || lowerCase.startsWith("ruble") || lowerCase.startsWith("mark") ||
            lowerCase.startsWith("frank") || lowerCase == "yen" || lowerCase.startsWith("sent") ||
            lowerCase.startsWith("cent") || lowerCase.startsWith("yen'") || lowerCase.includes("$")
    }

    /**
     * The isPunctuation method without any argument, it checks name variable whether it is a punctuation or not and
     * returns true if so.
     *
     * @return true if name is a punctuation.
     */
    isPunctuation(): boolean{
        return Word.isPunctuation(this.name)
    }

    /**
     * The isTime method takes a String surfaceForm as an input and after converting it to lower case it checks some cases.
     * If it is in the form of 12:23:34 or 12:23 it returns true.
     * If it starts with name of months; ocak, şubat, mart, nisan, mayıs, haziran, temmuz, ağustos, eylül, ekim, kasım, aralık it returns true.
     * If it equals to the name of days; pazar, pazartesi, salı, çarşamba, perşembe, cuma, cumartesi it returns true.
     *
     * @param surfaceForm String input to check.
     * @return true if it presents time, and false otherwise.
     */
    static isTime(surfaceForm: string): boolean{
        let lowerCase = surfaceForm.toLocaleLowerCase("tr")
        if (lowerCase.match("^(\\d\\d|\\d):(\\d\\d|\\d):(\\d\\d|\\d)$") || lowerCase.match("^(\\d\\d|\\d):(\\d\\d|\\d)$")) {
            return true;
        }
        if (lowerCase.startsWith("ocak") || lowerCase.startsWith("şubat") || lowerCase.startsWith("mart") ||
            lowerCase.startsWith("nisan") || lowerCase.startsWith("mayıs") || lowerCase.startsWith("haziran") ||
            lowerCase.startsWith("temmuz") || lowerCase.startsWith("ağustos") || lowerCase.startsWith("eylül") ||
            lowerCase.startsWith("ekim") || lowerCase.startsWith("kasım") || lowerCase == "aralık") {
            return true;
        }
        if (lowerCase == "pazar" || lowerCase == "salı" || lowerCase.startsWith("çarşamba") ||
            lowerCase.startsWith("perşembe") || lowerCase == "cuma" || lowerCase.startsWith("cumartesi") ||
            lowerCase.startsWith("pazartesi")) {
            return true;
        }
        if (lowerCase.includes("'")) {
            lowerCase = lowerCase.substring(0, lowerCase.indexOf("'"));
        }
        let time = Number.parseInt(lowerCase)
        if (time > 1900 && time < 2200) {
            return true
        }
        return false
    }

    /**
     * The toWordArray method takes a String {@link Array} sourceArray as an input. First it creates
     * a {@link Word} type result array and puts items of input sourceArray to this result {@link Array}.
     *
     * @param sourceArray String {@link Array}.
     * @return Word type {@link Array}.
     */
    static toWordArray(sourceArray: Array<string>): Array<Word>{
        let result = new Array<Word>()
        for (let i = 0; i < sourceArray.length; i++) {
            result.push(new Word(sourceArray[i]))
        }
        return result
    }

    /**
     * The toCharacters method creates a {@link Word} type characters {@link Array} and adds characters of name variable
     * to newly created {@link Array}.
     *
     * @return Word type {@link Array}.
     */
    toCharacters(): Array<Word>{
        let characters = new Array<Word>()
        for (let i = 0; i < this.name.length; i++){
            characters.push(new Word("" + this.name.charAt(i)))
        }
        return characters
    }
}