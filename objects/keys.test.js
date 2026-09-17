import { describe, test, expect } from 'bun:test';
import { keys } from './keys.js';

describe('Тесты keys', () => {

    test("Должна вернуть массив ключей: keys({ a: 1, b: 2, c: 3 }) → ['a', 'b', 'c']", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = keys(obj);
        expect(result).toEqual(['a', 'b', 'c']);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 })
    });

    test("Должна вернуть ключи в правильном порядке", () => {
        const obj = {
            b: 1,
            10: "ten",
            2: "two",
            a: 2,
            1: "one"
        };
        const result = keys(obj);
        expect(result).toEqual(["1", "2", "10", "b", "a"]);
    });

    test("Должна вернуть пустой массив для пустого объекта: keys({}) → []", () => {
        const obj = {};
        const result = keys(obj);
        expect(result).toEqual([]);
    });

    test("Должна вернуть ключи для объекта с одним свойством: keys({ x: 10 }) → ['x']", () => {
        const obj = { x: 10 };
        const result = keys(obj);
        expect(result).toEqual(['x']);
    });

    test("Унаследованные свойства не должны попадать в результат", () => {
        Object.prototype.custom = 'я унаследованное';
        const obj = { a: 1 };
        const result = keys(obj);
        expect(result).toEqual(['a']);
        delete Object.prototype.custom;
    });

    test("Должна работать с массивом: keys(['a', 'b', 'c']) → ['0', '1', '2']", () => {
        const obj = ['a', 'b', 'c'];
        const result = keys(obj);
        expect(result).toEqual(['0', '1', '2']);
    });

    test("Должна выбросить TypeError если obj равен null", () => {
        expect(() => keys(null)).toThrow('Аргумент должен быть объектом');
    });

    test("Должна выбросить TypeError если obj не объект", () => {
        expect(() => keys('123')).toThrow('Аргумент должен быть объектом');
        expect(() => keys(123)).toThrow(TypeError);
        expect(() => keys(true)).toThrow(TypeError);
    });

});
