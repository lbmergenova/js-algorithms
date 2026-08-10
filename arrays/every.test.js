import { describe, test, expect } from 'bun:test';
import { every } from './every.js';

describe('Тесты every', () => {

    test("Должна вернуть true если все подходят: every([2, 4, 6], x => x % 2 === 0) → true", () => {
        const arr = [2, 4, 6];
        const result = every(arr, x => x % 2 === 0);
        expect(result).toBe(true);
    });

    test("Не должна изменять исходный масси", () => {
        const arr = [2, 4, 6];
        every(arr, x => x % 2 === 0);
        expect(arr).toEqual([2, 4, 6]);
    });

    test("Должна вернуть false если хотя бы один не подходит: every([2, 3, 4], x => x % 2 === 0) → false", () => {
        const arr = [2, 3, 4];
        const result = every(arr, x => x % 2 === 0);
        expect(result).toBe(false);
    });

    test("Должна вернуть true для пустого массива: every([], fn) → true", () => {
        const arr = [];
        expect(every(arr, x => x % 2 === 0)).toBe(true);
        expect(every(arr, x => x % 2 !== 0)).toBe(true);
    });

    test('Должна остановиться при первом false', () => {
      let callCount = 0;
      const result = every([5, 10, 15], (x) => {
        callCount++;
        return x < 10;
      });
      expect(result).toBe(false);
      expect(callCount).toBe(2);
    });

    test("Должна выбросить TypeError если arr не массив", () => {
        expect(() => every('hello', () => {})).toThrow('Первый аргумент должен быть массивом');
    });

    test("Должна выбросить TypeError если callback не функция", () => {
        expect(() => every([], 123)).toThrow('Второй аргумент должен быть функцией');
    });

});
