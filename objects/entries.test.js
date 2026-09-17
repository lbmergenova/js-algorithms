import { describe, test, expect } from 'bun:test';
import { entries } from './entries.js';
import { len } from "../arrays/len.js"

describe('Тесты entries', () => {

    test("Должна вернуть массив пар: entries({ a: 1, b: 2 }) → [['a', 1], ['b', 2]]", () => {
        const obj = { a: 1, b: 2 };
        const result = entries(obj);
        expect(result).toEqual([['a', 1], ['b', 2]]);
    });

    test("Должна вернуть пустой массив для пустого объекта: entries({}) → []", () => {
        const obj = {};
        const result = entries(obj);
        expect(result).toEqual([]);
    });

    test("Каждая пара должна быть массивом из двух элементов: ключ и значение", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = entries(obj);
        const lenResult = len(result);
        expect(Array.isArray(result)).toBe(true);
        for (let i = 0; i < lenResult; i++) {
            expect(Array.isArray(result[i])).toBe(true);
        }
        expect(result[0]).toEqual(['a', 1]);
        expect(result[1]).toEqual(['b', 2]);
        expect(result[2]).toEqual(['c', 3]);
    });

    test("Должна корректно обрабатывать значения разных типов", () => {
        const arr = [1, 2, 3];
        const obj = {
            number: 10,
            string: "hello",
            nothing: null,
            array: arr
        };
    
        const result = entries(obj);
    
        expect(result).toEqual([
            ["number", 10],
            ["string", "hello"],
            ["nothing", null],
            ["array", arr]
        ]);
    });

    test(" Должна выбросить TypeError если obj равен null", () => {
        expect(() => entries(null)).toThrow('Аргумент должен быть объектом');
    });

    test("Должна выбросить TypeError если obj не объект", () => {
        expect(() => entries(123)).toThrow(TypeError);
        expect(() => entries("123")).toThrow(TypeError);
        expect(() => entries(true)).toThrow(TypeError);
    });
});
