(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Language"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnglishLanguage = void 0;
    const Language_1 = require("./Language");
    class EnglishLanguage extends Language_1.Language {
    }
    exports.EnglishLanguage = EnglishLanguage;
    EnglishLanguage.LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
    EnglishLanguage.UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
});
//# sourceMappingURL=EnglishLanguage.js.map