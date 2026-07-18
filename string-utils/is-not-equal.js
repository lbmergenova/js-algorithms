import { len } from "./len.js";
import { isEqual } from "./is-equal.js"

export function isNotEqual(firstStr, secondStr) {
    return !isEqual(firstStr, secondStr);
}