import { len } from "./len.js";

export function indexOf(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    const strLen = len(str);
    const searchLen = len(search);
    if (searchLen > strLen) return -1;
    if (searchLen === 0) return 0;
    for (let i = 0; i <= strLen - searchLen; i++) {
        if (str[i] === search[0]) {
            let j = 0
            for (; j < searchLen; j++) {
                if (str[i+j] !== search[j]) break; 
            }
            if (j === searchLen) return i;
        }
    }
    return -1;
}