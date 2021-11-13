export class Syllable {

    private readonly syllable: string

    /**
     * A constructor of {@link Syllable} class which takes a String as an input and initializes syllable variable with given input.
     *
     * @param syllable String input.
     */
    constructor(syllable: string) {
        this.syllable = syllable
    }

    /**
     * Getter for the syllable variable.
     *
     * @return the syllable variable.
     */
    getText(): string{
        return this.syllable
    }
}