var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Dictionary/Dictionary", "./Dictionary/ExceptionalWord", "./Dictionary/Pos", "./Dictionary/TxtDictionary", "./Dictionary/TxtWord", "./Dictionary/VectorizedDictionary", "./Dictionary/VectorizedWord", "./Dictionary/Word", "./Dictionary/WordComparator", "./Dictionary/Trie/Trie", "./Dictionary/Trie/TrieNode", "./Language/Language", "./Language/TurkishLanguage", "./Language/EnglishLanguage", "./Syllibification/Syllable", "./Syllibification/SyllableList"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Dictionary/Dictionary"), exports);
    __exportStar(require("./Dictionary/ExceptionalWord"), exports);
    __exportStar(require("./Dictionary/Pos"), exports);
    __exportStar(require("./Dictionary/TxtDictionary"), exports);
    __exportStar(require("./Dictionary/TxtWord"), exports);
    __exportStar(require("./Dictionary/VectorizedDictionary"), exports);
    __exportStar(require("./Dictionary/VectorizedWord"), exports);
    __exportStar(require("./Dictionary/Word"), exports);
    __exportStar(require("./Dictionary/WordComparator"), exports);
    __exportStar(require("./Dictionary/Trie/Trie"), exports);
    __exportStar(require("./Dictionary/Trie/TrieNode"), exports);
    __exportStar(require("./Language/Language"), exports);
    __exportStar(require("./Language/TurkishLanguage"), exports);
    __exportStar(require("./Language/EnglishLanguage"), exports);
    __exportStar(require("./Syllibification/Syllable"), exports);
    __exportStar(require("./Syllibification/SyllableList"), exports);
});
//# sourceMappingURL=index.js.map