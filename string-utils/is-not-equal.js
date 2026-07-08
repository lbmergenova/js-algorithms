import { len } from "./len";

export function isNotEqual(a, b) {
    if (typeof a !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof b !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    let lenght = len(a);
    if ( lenght !== len(b)) return true;
    for (let i = 0; i < lenght; i++) {
        if (a[i] !== b[i]) return true;
    }
    return false;
}