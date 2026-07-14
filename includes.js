export function includes(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') throw new TypeError("Аргумент должен быть строкой");
    let lenStr = str.length;
    let lenSearch = search.length;
    if (lenSearch > lenStr) return false;
    if (lenSearch === 0) return true;
    for (let i = 0; i < lenStr; i++) {
        if (str[i] === search[0]) {
            let j = 0
            for (; j < lenSearch; j++) {
                if (str[i+j] !== search[j]) break; 
            }
            if (j === lenSearch) return true;
        }
    }
    return false; 
}