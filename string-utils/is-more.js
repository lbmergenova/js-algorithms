import { len } from "./len";

export function isMore(a, b) {
    if (typeof a !== 'string') throw new TypeError('Первый аргумент должен быть строкой');
    if (typeof b !== 'string') throw new TypeError('Второй аргумент должен быть строкой');
    let lenght_a = len(a);
    let lenght_b = len(b);
    let lenght = lenght_a < lenght_b ? lenght_a : lenght_b;
    for (let i = 0; i < lenght; i++) {
        if (a[i] > b[i]) return true;
        if (a[i] < b[i]) return false;
    }
    return lenght_a > lenght_b;
}