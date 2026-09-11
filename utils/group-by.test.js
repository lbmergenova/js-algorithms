import { describe, test, expect } from 'bun:test';
import { groupBy } from './group-by.js';

describe('Тесты groupBy', () => {
    
    test("Должна вернуть пустой объект для пустого массива: groupBy([], 'city') → {}", () => {
        const arr = [];
        const key = 'city';
        const result = groupBy(arr, key)
        expect(result).toEqual({});
    });

    test("Должна сгруппировать по строковому ключу: groupBy([{ city: 'Москва' }, { city: 'Питер' }, { city: 'Москва' }], 'city') → { 'Москва': [{ city: 'Москва' }, { city: 'Москва' }], 'Питер': [{ city: 'Питер' }] }", () => {
        const arr = [{ city: 'Москва' }, { city: 'Питер' }, { city: 'Москва' }];
        const key = 'city';
        const result = groupBy(arr, key)
        expect(result).toEqual({ 'Москва': [{ city: 'Москва' }, { city: 'Москва' }], 'Питер': [{ city: 'Питер' }] });
    });

    test("Должна сгруппировать по числовому ключу: groupBy([{ age: 25 }, { age: 30 }, { age: 25 }], 'age') → ключи '25' и '30'", () => {
        const arr = [{ age: 25 }, { age: 30 }, { age: 25 }];
        const key = 'age';
        const result = groupBy(arr, key)
        expect(result).toEqual({'25': [{age: 25}, {age: 25}], '30': [{age: 30}]});
    });

    test("Должна работать с одним элементом: groupBy([{ x: 1 }], 'x') → { '1': [{ x: 1 }] }", () => {
        const arr = [{ x: 1 }];
        const key = 'x';
        const result = groupBy(arr, key)
        expect(result).toEqual({ '1': [{ x: 1 }] } );
    });

    test("Все элементы в одной группе если ключ одинаковый: groupBy([{ a: 1 }, { a: 1 }], 'a') → { '1': [{ a: 1 }, { a: 1 }] }", () => {
        const arr = [{ a: 1 }, { a: 1 }];
        const key = 'a';
        const result = groupBy(arr, key)
        expect(result).toEqual({ '1': [{ a: 1 }, { a: 1 }] });
    });

    test("Должна обработать отсутствующий ключ: groupBy([{ a: 1 }, {}], 'a') → { '1': [{ a: 1 }], 'undefined': [{}] }", () => {
        const arr = [{ a: 1 }, {}];
        const key = 'a';
        const result = groupBy(arr, key)
        expect(result).toEqual({ '1': [{ a: 1 }], 'undefined': [{}] });
    });

    test("Должна вернуть те же объекты (не копии): элементы в группах должны быть теми же ссылками", () => {
        const item1 = { city: 'Москва' };
        const item2 = { city: 'Питер' };
        const result = groupBy([item1, item2], 'city');
        expect(result.Москва[0]).toBe(item1);
        expect(result.Питер[0]).toBe(item2);
    });

    test("Должна выбросить TypeError если array не массив", () => {
        expect(() => groupBy(123, "key")).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если key не строка", () => {
        expect(() => groupBy([], 123)).toThrow('Второй аргумент должен быть строкой');
    });

});
