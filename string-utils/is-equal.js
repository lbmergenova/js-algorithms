import { len } from "./len";

export function isEqual(firstStr, secondStr) {
    if (typeof firstStr !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof secondStr !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    const length = len(firstStr);
    if ( length !== len(secondStr)) return false;
    for (let i = 0; i < length; i++) {
        if (firstStr[i] !== secondStr[i]) return false;
    }
    return true
}