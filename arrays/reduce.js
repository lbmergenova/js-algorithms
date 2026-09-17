import { len } from "./len.js";

/**
 * Сворачивает массив в одно значение.
 *
 * @param {Array} arr - Массив для свертки.
 * @param {Function} callback - Функция-свёртка, получает (аккумулятор, элемент, индекс, массив).
 * @param {*} initialValue - Начальное значение аккумулятора(необязательный).
 * @returns {*} - Итоговое значение аккумулятора.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй не является функцией.
 * @throws {TypeError} - Если массив пустой и начальное значение аккумулятора не задано.
 * 
 * @example
 * reduce([1, 2, 3], (acc, item) => acc + item, 4)  // 10
 * reduce([1, 2, 3], (acc, item) => acc + item)     // 6
 *
 */
export function reduce(arr, callback, initialValue) {
    if (!Array.isArray(arr))
        throw new TypeError("Первый аргумент должен быть массивом");
    if (typeof callback !== 'function')
        throw new TypeError("Второй аргумент должен быть функцией");

    let result;
    let i = 0;
    const lenArr = len(arr);
    if (arguments.length === 3) {
        result = initialValue;
    } else if (lenArr === 0){
        throw new TypeError("Невозможно выполнить reduce для пустого массива без начального значения аккумулятора")
    } else {
        i = 1;
        result = arr[0];
    }
    for (i; i < lenArr; i++) {
        result = callback(result, arr[i], i, arr);        
    }
    return result;
}
