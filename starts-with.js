export function startsWith(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    let lenStr = str.length;
    let lenSearch = search.length;
    if (lenSearch > lenStr) return false;
    for (let i = 0; i < lenSearch; i++) {
        if (str[i] !== search[i]) return false;
    }
    return true;
}