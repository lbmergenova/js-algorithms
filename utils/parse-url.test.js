import { describe, test, expect } from 'bun:test';
import { parseUrl } from './parse-url.js';

describe('Тесты parseUrl', () => {

    test("Должна разобрать полный URL: parseUrl('https://example.com:8080/path?q=1#top') → { protocol: 'https', host: 'example.com', port: '8080', path: '/path', query: 'q=1', hash: 'top' }", () => {
        const url = 'https://example.com:8080/path?q=1#top';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: 'https', host: 'example.com', port: '8080', path: '/path', query: 'q=1', hash: 'top' });
    });

    test("Должна разобрать URL без порта и query: parseUrl('https://example.com/page') → { protocol: 'https', host: 'example.com', port: '', path: '/page', query: '', hash: '' }", () => {
        const url = 'https://example.com/page';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: 'https', host: 'example.com', port: '', path: '/page', query: '', hash: '' });
    });
    
    test("Должна разобрать URL с портом: parseUrl('http://localhost:3000/api') → { protocol: 'http', host: 'localhost', port: '3000', path: '/api', query: '', hash: '' }", () => {
        const url = 'http://localhost:3000/api';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: 'http', host: 'localhost', port: '3000', path: '/api', query: '', hash: '' });
    });

    test("Должна разобрать URL с query и hash: parseUrl('https://example.com/page?q=1#section') → проверить query и hash", () => {
        const url = 'https://example.com/page?q=1#section';
        const result = parseUrl(url);
        expect(result.query).toBe('q=1');
        expect(result.hash).toBe('section');
    });

    test("Должна разобрать URL без протокола: parseUrl('example.com/path') → { protocol: '', host: 'example.com', port: '', path: '/path', query: '', hash: '' }", () => {
        const url = 'example.com/path';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: '', host: 'example.com', port: '', path: '/path', query: '', hash: '' });
    });

    test("Должна указать path / если пути нет: parseUrl('https://example.com') → path: '/'", () => {
        const url = 'https://example.com';
        const result = parseUrl(url);
        expect(result.path).toBe('/');
    });

    test("Должна разобрать URL только с хэшем: parseUrl('https://example.com#section') → { ..., path: '/', query: '', hash: 'section' }", () => {
        const url = 'https://example.com#section';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: 'https', host: 'example.com', port: '', path: '/', query: '', hash: 'section' });
    });
        
    test("Должна разобрать URL только с query: parseUrl('https://example.com?q=1') → { ..., path: '/', query: 'q=1', hash: '' }", () => {
        const url = 'https://example.com?q=1';
        const result = parseUrl(url);
        expect(result).toEqual({ protocol: 'https', host: 'example.com', port: '', path: '/', query: 'q=1', hash: '' });
    });
    
    test("Должна выбросить TypeError если аргумент не строка", () => {
        expect(() => parseUrl(123)).toThrow('Аргумент должен быть строкой');
    });

});
