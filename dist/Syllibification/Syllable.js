(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Syllable = void 0;
    class Syllable {
        /**
         * A constructor of {@link Syllable} class which takes a String as an input and initializes syllable variable with given input.
         *
         * @param syllable String input.
         */
        constructor(syllable) {
            this.syllable = syllable;
        }
        /**
         * Getter for the syllable variable.
         *
         * @return the syllable variable.
         */
        getText() {
            return this.syllable;
        }
    }
    exports.Syllable = Syllable;
});
//# sourceMappingURL=Syllable.js.map