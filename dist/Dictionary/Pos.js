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
    exports.Pos = void 0;
    var Pos;
    (function (Pos) {
        /**
         * Adjective.
         */
        Pos[Pos["ADJECTIVE"] = 0] = "ADJECTIVE";
        /**
         * Noun.
         */
        Pos[Pos["NOUN"] = 1] = "NOUN";
        /**
         * Verb.
         */
        Pos[Pos["VERB"] = 2] = "VERB";
        /**
         * Adverb.
         */
        Pos[Pos["ADVERB"] = 3] = "ADVERB";
        /**
         * Conjunction.
         */
        Pos[Pos["CONJUNCTION"] = 4] = "CONJUNCTION";
        /**
         * Interjection.
         */
        Pos[Pos["INTERJECTION"] = 5] = "INTERJECTION";
        /**
         * Preposition.
         */
        Pos[Pos["PREPOSITION"] = 6] = "PREPOSITION";
        /**
         * Pronoun.
         */
        Pos[Pos["PRONOUN"] = 7] = "PRONOUN";
    })(Pos = exports.Pos || (exports.Pos = {}));
});
//# sourceMappingURL=Pos.js.map