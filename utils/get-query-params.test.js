import { describe, test, expect } from 'bun:test';
import { getQueryParams } from './get-query-params.js';

describe('Тесты getQueryParams', () => {
 
    test("Должна вернуть пустой объект если нет ?: getQueryParams('https://example.com/page') → {}", () => {
        const url = 'https://example.com/page';
        const result = getQueryParams(url);
        expect(result).toEqual({});
    });
    
    test("Должна вернуть пустой объект если ? в конце: getQueryParams('https://example.com?') → {}", () => {
        const url = 'https://example.com?';
        const result = getQueryParams(url);
        expect(result).toEqual({});
    });
    
    test("Должна разобрать один параметр: getQueryParams('https://example.com?a=1') → { a: '1' }", () => {
        const url = 'https://example.com?a=1';
        const result = getQueryParams(url);
        expect(result).toEqual({ a: '1' });
    });
    
    test("Должна разобрать несколько параметров: getQueryParams('https://example.com?a=1&b=2&c=3') → { a: '1', b: '2', c: '3' }", () => {
        const url = ('https://example.com?a=1&b=2&c=3');
        const result = getQueryParams(url);
        expect(result).toEqual({ a: '1', b: '2', c: '3' });
    });
    test("Должна обработать параметр без значения: getQueryParams('https://example.com?key') → { key: '' }", () => {
        const url = 'https://example.com?key';
        const result = getQueryParams(url);
        expect(result).toEqual({ key: '' });
    });
    
    test("Должна обработать несколько параметров, один без значения: getQueryParams('https://example.com?a=1&b') → { a: '1', b: '' }", () => {
        const url = 'https://example.com?a=1&b';
        const result = getQueryParams(url);
        expect(result).toEqual({ a: '1', b: '' });
    });
    
    test("Должна декодировать URL-кодирование: getQueryParams('https://example.com?name=%D0%90%D0%BD%D0%BD%D0%B0') → { name: 'Анна' }", () => {
        const url = 'https://example.com?name=%D0%90%D0%BD%D0%BD%D0%B0';
        const result = getQueryParams(url);
        expect(result).toEqual({ name: 'Анна' });
    });
    
    test("Должна декодировать пробелы: getQueryParams('https://example.com?q=hello%20world') → { q: 'hello world' }", () => {
        const url = 'https://example.com?q=hello%20world';
        const result = getQueryParams(url);
        expect(result).toEqual({ q: 'hello world' });
    });
    
    test("Должна работать с query-строкой без URL: getQueryParams('a=1&b=2') → { a: '1', b: '2' }", () => {
        const url = 'a=1&b=2';
        const result = getQueryParams(url);
        expect(result).toEqual({ a: '1', b: '2' });
    });

    test("Должна обработать несколько знаков = в значении: getQueryParams('https://example.com?a=1=2') → { a: '1=2' }", () => {
        const url = 'https://example.com?a=1=2';
        const result = getQueryParams(url);
        expect(result).toEqual({ a: '1=2' });
    });

    test("Должна выбросить TypeError если аргумент не строка", () => {
        expect(() => getQueryParams(123)).toThrow('Аргумент должен быть строкой');
    });

});
