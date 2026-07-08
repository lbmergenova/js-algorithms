export function len(str) {
    if (typeof str !== 'string') throw new TypeError('Аргумент должен быть строкой');
    
    let lenght = 0;
    while (str[lenght]) {
        lenght++;
    }
    return lenght;
}