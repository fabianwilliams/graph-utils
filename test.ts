import { toGraphTime, fromGraphTime, buildGraphUrl } from "./src/index.mts";

console.log("ISO time:", toGraphTime(new Date()));
console.log("Parsed date:", fromGraphTime("2025-03-22T14:35:00.000Z"));

const url = buildGraphUrl("/users", {
  "$filter": "startswith(displayName,'F')",
  "$select": "id,displayName",
});
console.log("Built URL:", url);
