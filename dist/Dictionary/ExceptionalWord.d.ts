import { Word } from "./Word";
import { Pos } from "./Pos";
export declare class ExceptionalWord extends Word {
    private root;
    private pos;
    /**
     * A constructor of {@link ExceptionalWord} class which takes a {@link Pos} as a  part of speech and two Strings; name
     * and root as inputs. Then, calls its super class {@link Word} with given name and initialises root and pos variables
     * with given inputs.
     *
     * @param name String input.
     * @param root String input.
     * @param pos  {@link Pos} type input.
     */
    constructor(name: string, root: string, pos: Pos);
    /**
     * Getter for the root variable.
     *
     * @return root variable.
     */
    getRoot(): string;
    /**
     * Getter for the pos variable.
     *
     * @return pos variable.
     */
    getPos(): Pos;
}
