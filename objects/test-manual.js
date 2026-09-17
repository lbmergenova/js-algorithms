import { keys } from './keys.js';
import { values } from './values.js';
import { cloneDeep } from './clone-deep.js';
import { isEqualDeep } from './is-equal-deep.js';

const obj = { name: 'Анна', scores: [5, 4, 5] };

// 1. Ключи
const k = keys(obj);
console.log('keys:', k); // ['name', 'scores']

// 2. Значения
const v = values(obj);
console.log('values:', v); // ['Анна', [5, 4, 5]]

// 3. Копия
const copy = cloneDeep(obj);
copy.name = 'Борис';
copy.scores[0] = 3;
console.log('original после изменения копии:', obj);
// { name: 'Анна', scores: [5, 4, 5] } — не изменился

// 4. Сравнение
console.log('isEqualDeep(original, copy):', isEqualDeep(obj, copy)); // false
console.log('isEqualDeep(original, cloneDeep(original)):', isEqualDeep(obj, cloneDeep(obj))); // true
