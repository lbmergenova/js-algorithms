import { len } from "./len";

export function isEqual(a, b) {
    if (typeof a !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof b !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    let lenght = len(a);
    if ( lenght !== len(b)) return false;
    for (let i = 0; i < lenght; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true
}