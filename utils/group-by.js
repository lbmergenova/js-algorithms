/**
 * Группирует элементы массива объектов по значению указанного свойства.
 *
 * Функция иммутабельна: исходный массив не изменяется.
 * Объекты внутри групп не копируются — используются те же ссылки,
 * что и в исходном массиве.
 *
 * @param {Array<Object>} array - Массив объектов.
 * @param {string} key - Имя свойства, по которому выполняется группировка.
 * @returns {Object} - Объект групп, где ключи - значения свойства, а значения - массивы исходных объектов.
 * @throws {TypeError} - Если array не является массивом.
 * @throws {TypeError} - Если key не является строкой.
 */
export function groupBy(array, key) {
    if (!Array.isArray(array)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
    if (typeof key !== 'string') {
        throw new TypeError('Второй аргумент должен быть строкой');
    }
    const result = {};

    for (const item of array) {
        const groupValue = item[key];

        if (!Object.prototype.hasOwnProperty.call(result, groupValue)) {
            result[groupValue] = [];
        }

        result[groupValue].push(item);
    }

    return result;
}