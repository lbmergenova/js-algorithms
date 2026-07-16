import { len } from "./len";

export function isNotEqual(firstStr, secondStr) {
    if (typeof firstStr !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    const miLength = len(firstStr);
    if ( miLength !== len(secondStr)) return true;
    for (let i = 0; i < miLength; i++) {
        if (firstStr[i] !== secondStr[i]) return true;
    }
    return false;
}