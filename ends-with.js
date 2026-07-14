export function endsWith(str, search)  {
    if (typeof str !== 'string' || typeof search !== 'string') 
        throw new TypeError("Аргументы должны быть строкой");
    let lenStr = str.length;
    let lenSearch = search.length;
    if (lenSearch > lenStr) return false;
    for (let i = lenSearch-1; i >= 0; i--, lenStr--) {
        if (str[lenStr-1] !== search[i]) return false;
    }
    return true;
}