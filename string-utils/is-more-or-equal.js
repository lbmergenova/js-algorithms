import { len } from "./len";
import { isLess } from "./is-less.js";

export function isMoreOrEqual(firstStr, secondStr) {
    return !isLess(firstStr, secondStr);
}