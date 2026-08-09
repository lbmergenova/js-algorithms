import { describe, test, expect } from 'bun:test';
import { join } from './join.js';

describe('Тесты join', () => {

    test("Должна склеить с разделителем по умолчанию (запятая): join([1, 2, 3]) → '1,2,3'", () => {
        const arr = [1, 2, 3];
        const result  = join(arr);
        expect(result).toBe('1,2,3');
        expect(arr).toEqual([1, 2, 3]);
    });
    
    test("Должна склеить с явным разделителем: join([1, 2, 3], '-') → '1-2-3'", () => {
        const arr = [1, 2, 3];
        const result  = join(arr, '-');
        expect(result).toBe('1-2-3');
        expect(arr).toEqual([1, 2, 3]);
    });

    test("Должна склеить с пробелом: join(['a', 'b', 'c'], ' ') → 'a b c'", () => {
        const arr = ['a', 'b', 'c'];
        const result  = join(arr, ' ');
        expect(result).toBe('a b c');
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test("Должна склеить с пустым разделителем: join(['a', 'b', 'c'], '') → 'abc'", () => {
        const arr = ['a', 'b', 'c'];
        const result  = join(arr, '');
        expect(result).toBe('abc');
        expect(arr).toEqual(['a', 'b', 'c']);
    });

    test("Должна вернуть '' для пустого массива", () => {
        const arr = [];
        const result  = join(arr, ',');
        expect(result).toBe('');
        expect(arr).toEqual([]);
    });

    test("Должна вернуть строку из одного элемента без разделителя: join([42], ',') → '42'", () => {
        const arr = [42];
        const result  = join(arr, ',');
        expect(result).toBe('42');
        expect(arr).toEqual([42]);
    });

    test("Должна работать с null как элементом: join([1, null, 3]) → '1,,3'", () => {
        const arr = [1, null, 3];
        const result  = join(arr);
        expect(result).toBe('1,,3');
        expect(arr).toEqual([1, null, 3]);
    });

    test("Должна работать с булевыми значениями: join([1, true, false]) → '1,true,false'", () => {
        const arr = [1, true, false];
        const result  = join(arr);
        expect(result).toBe('1,true,false');
        expect(arr).toEqual([1, true, false]);
    });

    test("Должна работать с NaN как элементом: join([1, NaN, 3]) → '1,NaN,3'", () => {
        const arr = [1, NaN, 3];
        const result  = join(arr);
        expect(result).toBe("1,NaN,3");
        expect(arr).toEqual([1, NaN, 3]);
    });

    test("Должна работать с Infinity как элементом: join([1, Infinity, -Infinity]) → '1,Infinity,-Infinity'", () => {
        const arr = [1, Infinity, -Infinity];
        const result  = join(arr);
        expect(join(arr)).toBe("1,Infinity,-Infinity");
        expect(arr).toEqual([1, Infinity, -Infinity]);

    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => join('hello')).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если separator передана и не строка", () => {
        expect(() => join([], 1)).toThrow('Второй аргумент должен быть строкой');
    });

});
