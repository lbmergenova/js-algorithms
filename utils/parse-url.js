import { indexOf } from "../string-utils/index-of.js";
import { substring } from "../string-utils/substring.js";
import { len } from "../string-utils/len.js";

/**

* Разбирает URL на составные части.
*
* @param {string} url - URL для разбора.
* @returns {{ protocol: string,
*            host: string,
*            port: string,
*            path: string,
*            query: string,
*            hash: string }} - Объект с частями URL.
* @throws {TypeError} - Если аргумент не является строкой.
*
* @example
*   parseUrl('https://example.com:8080/path?q=1#top');
*   // {
*   //     protocol: 'https',
*   //     host: 'example.com',
*   //     port: '8080',
*   //     path: '/path',
*   //     query: 'q=1',
*   //     hash: 'top'
*   // }
*/

export function parseUrl(url) {
    if (typeof url !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }
    const separators = [
        ['hash', '#'],
        ['query', '?'],
        ['path', '/'],
        ['port', ':']
    ]
    const result = {
        protocol: '',
        host: '',
        port:  '',
        path:  '/',
        query: '',
        hash: '',
    };
    // protocol
    const indexProtocol = indexOf(url, '://');
    let leftUrl = url;
    if (indexProtocol !== -1) {
        result.protocol = substring(url, 0, indexProtocol);
        leftUrl = substring(url, indexProtocol + 3);
    }
    // other separators
    for (const [key, separator] of separators) {
        const index = indexOf(leftUrl, separator);
        if (index !== -1) {
            result[key] = result[key] + substring(leftUrl, index + 1);
            leftUrl = substring(leftUrl, 0, index);
        }
    }
    result.host = leftUrl;
    return result;
}

/**
export function parseUrl(url) {
    if (typeof url !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }

    const result = {
        protocol: '',
        host: '',
        port: '',
        path: '/',
        query: '',
        hash: '',
    };

    let leftUrl = url;

    // protocol
    const protocolIndex = indexOf(leftUrl, '://');

    if (protocolIndex !== -1) {
        result.protocol = substring(leftUrl, 0, protocolIndex);
        leftUrl = substring(leftUrl, protocolIndex + 3, len(leftUrl));
    }

    // hash
    const hashIndex = indexOf(leftUrl, '#');

    if (hashIndex !== -1) {
        result.hash = substring(leftUrl, hashIndex + 1, len(leftUrl));
        leftUrl = substring(leftUrl, 0, hashIndex);
    }

    // query
    const queryIndex = indexOf(leftUrl, '?');

    if (queryIndex !== -1) {
        result.query = substring(leftUrl, queryIndex + 1, len(leftUrl));
        leftUrl = substring(leftUrl, 0, queryIndex);
    }

    // path
    const pathIndex = indexOf(leftUrl, '/');

    if (pathIndex !== -1) {
        result.path = substring(leftUrl, pathIndex, len(leftUrl));
        leftUrl = substring(leftUrl, 0, pathIndex);
    }

    // port
    const portIndex = indexOf(leftUrl, ':');

    if (portIndex !== -1) {
        result.port = substring(leftUrl, portIndex + 1, len(leftUrl));
        leftUrl = substring(leftUrl, 0, portIndex);
    }

    result.host = leftUrl;

    return result;
}
*/
