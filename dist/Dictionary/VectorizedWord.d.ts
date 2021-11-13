import { Vector } from "nlptoolkit-math/dist/Vector";
import { Word } from "./Word";
export declare class VectorizedWord extends Word {
    private vector;
    /**
     * A constructor of {@link VectorizedWord} class which takes a String and a {@link Vector} as inputs and calls its
     * super class {@link Word} with name and also initializes vector variable with given input.
     *
     * @param name   String input.
     * @param vector {@link Vector} type input.
     */
    constructor(name: string, vector: Vector);
    /**
     * Getter for the vector variable.
     *
     * @return the vector variable.
     */
    getVector(): Vector;
}
