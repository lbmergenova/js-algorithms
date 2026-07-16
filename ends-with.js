import { len } from "./string-utils/len.js";

export function endsWith(str, search)  {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    let strLen = len(str);
    const searchLen = len(search);
    if (searchLen > strLen) return false;
    for (let i = searchLen-1; i >= 0; i--, strLen--) {
        if (str[strLen-1] !== search[i]) return false;
    }
    return true;
}