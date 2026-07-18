import { len } from "./len.js";

export function endsWith(str, search)  {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    const strLen = len(str);
    const searchLen = len(search);
    if (searchLen > strLen) return false;
    let searchIndex = strLen - 1;
    for (let strIndex = searchLen-1; strIndex >= 0; strIndex--, searchIndex--) {
        if (str[searchIndex] !== search[strIndex]) return false;
    }
    return true;
}