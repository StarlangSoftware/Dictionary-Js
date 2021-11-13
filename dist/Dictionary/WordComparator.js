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
    exports.WordComparator = void 0;
    var WordComparator;
    (function (WordComparator) {
        WordComparator[WordComparator["ENGLISH"] = 0] = "ENGLISH";
        WordComparator[WordComparator["TURKISH"] = 1] = "TURKISH";
        WordComparator[WordComparator["TURKISH_IGNORE_CASE"] = 2] = "TURKISH_IGNORE_CASE";
    })(WordComparator = exports.WordComparator || (exports.WordComparator = {}));
});
//# sourceMappingURL=WordComparator.js.map