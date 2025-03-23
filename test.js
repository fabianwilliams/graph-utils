"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_mts_1 = require("./src/index.mts");
console.log("ISO time:", (0, index_mts_1.toGraphTime)(new Date()));
console.log("Parsed date:", (0, index_mts_1.fromGraphTime)("2025-03-22T14:35:00.000Z"));
const url = (0, index_mts_1.buildGraphUrl)("/users", {
    "$filter": "startswith(displayName,'F')",
    "$select": "id,displayName",
});
console.log("Built URL:", url);
//# sourceMappingURL=test.js.map