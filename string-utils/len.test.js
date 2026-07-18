// string-utils/len.test.js
import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Тесты len', () => {
  test('должна вернуть 5 для строки "hello"', () => {
    expect(len('hello')).toBe(5);
  });

  test('должна вернуть 0 для пустой строки (\'\')', () => {
    expect(len('')).toBe(0);
  });

  test('должна вернуть 3 для строки из трёх пробелов (\'   \')', () => {
    expect(len('   ')).toBe(3);
  });

  test("должна вернуть 3 для строки из трёх пробелов ('hi\n')", () => {
    expect(len('hi\n')).toBe(3);
  });

  test('должна корректно считать кириллицу — len(\'привет\') → 6', () => {
    expect(len('привет')).toBe(6);
  });

  test('должна выбросить TypeError если аргумент — число (123)', () => {
    expect(() => len(123)).toThrow(TypeError);
  });

  test('должна выбросить TypeError если аргумент — null, undefined', () => {
    expect(() => len(null)).toThrow('Аргумент должен быть строкой');
    expect(() => len(undefined)).toThrow(TypeError);
  });

});


