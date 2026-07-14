export function reverse(str) {
    if (typeof str !== 'string') 
        throw new TypeError("Аргумент должен быть строкой");
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}