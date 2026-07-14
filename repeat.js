export function repeat(str, count = 0) {
    if (typeof str !== 'string')
        throw new TypeError("Первый аргумент должен быть строкой");
    if (typeof count !== 'number') 
        throw new TypeError("Второй аргумент должен быть числом");
    if (count < 0 || count === Infinity) 
        throw new RangeError("Второй аргумент должен быть положительным"); 
    let whole = 0;
    while (whole + 1 <= count) {
        whole++;
    }
    let result = '';
    for (let i = 0; i < whole; i++) {
        result += str;
    }
    return result;
}