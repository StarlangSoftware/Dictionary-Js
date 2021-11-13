(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExceptionalWord = void 0;
    const Word_1 = require("./Word");
    class ExceptionalWord extends Word_1.Word {
        /**
         * A constructor of {@link ExceptionalWord} class which takes a {@link Pos} as a  part of speech and two Strings; name
         * and root as inputs. Then, calls its super class {@link Word} with given name and initialises root and pos variables
         * with given inputs.
         *
         * @param name String input.
         * @param root String input.
         * @param pos  {@link Pos} type input.
         */
        constructor(name, root, pos) {
            super(name);
            this.root = root;
            this.pos = pos;
        }
        /**
         * Getter for the root variable.
         *
         * @return root variable.
         */
        getRoot() {
            return this.root;
        }
        /**
         * Getter for the pos variable.
         *
         * @return pos variable.
         */
        getPos() {
            return this.pos;
        }
    }
    exports.ExceptionalWord = ExceptionalWord;
});
//# sourceMappingURL=ExceptionalWord.js.map