export function len(str) {
    if (typeof str !== 'string') throw new TypeError('Аргумент должен быть строкой');
    
    let length = 0;
    while (str[length]) {
        length++;
    }
    return length;
}