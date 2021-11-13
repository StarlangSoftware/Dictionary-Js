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
    exports.VectorizedWord = void 0;
    const Word_1 = require("./Word");
    class VectorizedWord extends Word_1.Word {
        /**
         * A constructor of {@link VectorizedWord} class which takes a String and a {@link Vector} as inputs and calls its
         * super class {@link Word} with name and also initializes vector variable with given input.
         *
         * @param name   String input.
         * @param vector {@link Vector} type input.
         */
        constructor(name, vector) {
            super(name);
            this.vector = vector;
        }
        /**
         * Getter for the vector variable.
         *
         * @return the vector variable.
         */
        getVector() {
            return this.vector;
        }
    }
    exports.VectorizedWord = VectorizedWord;
});
//# sourceMappingURL=VectorizedWord.js.map