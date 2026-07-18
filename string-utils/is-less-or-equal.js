import { len } from "./len.js";
import { isMore } from "./is-more.js";

export function isLessOrEqual(firstStr, secondStr) {
    return !isMore(firstStr, secondStr);
}