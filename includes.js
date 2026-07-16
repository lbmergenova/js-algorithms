import { len } from "./string-utils/len.js";

export function includes(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    const strLen = len(str);
    const searchLen = len(search);
    if (searchLen > strLen) return false;
    if (searchLen === 0) return true;
    for (let i = 0; i <= strLen - searchLen; i++) {
        if (str[i] === search[0]) {
            let j = 0
            for (; j < searchLen; j++) {
                if (str[i+j] !== search[j]) break; 
            }
            if (j === searchLen) return true;
        }
    }
    return false; 
}