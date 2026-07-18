import { len } from "./len.js";

export function startsWith(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    const searchLen = len(search);
    if (searchLen > len(str)) return false;
    for (let i = 0; i < searchLen; i++) {
        if (str[i] !== search[i]) return false;
    }
    return true;
}