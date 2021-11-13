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
    exports.Language = void 0;
    class Language {
    }
    exports.Language = Language;
    /**
     * Digits : 0123456789
     * Arithmetic Characters : +-/=\*
     * Extended Language Characters
     * Black dot : \u25CF
     */
    Language.DIGITS = "0123456789";
    Language.ARITHMETIC_CHARACTERS = "+-*/=";
    Language.EXTENDED_LANGUAGE_CHARACTERS = "âàáäãèéêëíîòóôûúqwxÂÈÉÊËÌÒÛQWX\u25CF";
});
//# sourceMappingURL=Language.js.map