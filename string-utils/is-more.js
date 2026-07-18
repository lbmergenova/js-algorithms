import { len } from "./len";

export function isMore(firstStr, secondStr) {
    if (typeof firstStr !== 'string') 
        throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') 
        throw new TypeError('Второй аргумент должен быть строкой');
    const firstLength = len(firstStr);
    const secondLength = len(secondStr);
    const minLength = firstLength < secondLength ? firstLength : secondLength;
    for (let i = 0; i < minLength; i++) {
        if (firstStr[i] > secondStr[i]) return true;
        if (firstStr[i] < secondStr[i]) return false;
    }
    return firstLength > secondLength;
}