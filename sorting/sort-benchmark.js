import { indexOf } from '../arrays/index-of.js'
import { bubbleSort } from './bubble-sort.js';
import { insertionSort } from './insertion-sort.js';
import { selectionSort } from './selection-sort.js';
import { quickSort } from './quick-sort.js';
import { binarySearch } from './binary-search.js';

const SIZES = [100, 500, 1000, 2000, 4000, 8000, 10000];
const RUNS = 5;

function randomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
}

function measure(fn, input) {
  fn(input); // прогрев — первый вызов не замеряем
  let best = Infinity;
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now();
    fn(input);
    const elapsed = performance.now() - start;
    if (elapsed < best) best = elapsed;
  }
  return best;
}

const algorithms = [
  { name: 'bubbleSort', fn: bubbleSort },
  { name: 'insertionSort', fn: insertionSort },
  { name: 'selectionSort', fn: selectionSort },
  { name: 'quickSort', fn: quickSort },
];

const sizesCount = SIZES.length;
const algorithmsCount = algorithms.length;

for (let s = 0; s < sizesCount; s++) {
  const input = randomArray(SIZES[s]);
  let line = 'n=' + SIZES[s];
  for (let a = 0; a < algorithmsCount; a++) {
    const ms = measure(algorithms[a].fn, input);
    line = line + '  |  ' + algorithms[a].name + ': ' + Math.round(ms * 100) / 100 + 'мс';
  }
  console.log(line);
}

// Поиск: линейный (indexOf) против бинарного (binarySearch)
const searchSize = 1000000;
const sorted = [];
for (let i = 0; i < searchSize; i++) sorted.push(i); // уже отсортированный массив
const target = searchSize - 1; // ищем последний элемент — худший случай для перебора

const linearSearch = (arr) => indexOf(arr, target);
const binarySearchForTarget = (arr) => binarySearch(arr, target);

const linearMs = measure(linearSearch, sorted);
const binaryMs = measure(binarySearchForTarget, sorted);

console.log('--- Поиск в массиве из ' + searchSize + ' элементов (ищем ' + target + ') ---');
console.log('indexOf (перебор): ' + Math.round(linearMs * 100) / 100 + 'мс');
console.log('binarySearch: ' + Math.round(binaryMs * 100) / 100 + 'мс');