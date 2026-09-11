import { len } from '../arrays/len.js';
import { push } from '../arrays/push.js';
import { indexOf } from '../arrays/index-of.js';
import { bubbleSort } from './bubble-sort.js';
import { insertionSort } from './insertion-sort.js';
import { selectionSort } from './selection-sort.js';
import { quickSort } from './quick-sort.js';
import { binarySearch } from './binary-search.js';

const SIZES = [100, 500, 1000, 2000];
const RUNS = 5;

function ascendingArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    push(arr, i);
  }
  return arr;
}

function descendingArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    push(arr, size - i);
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

const sizesCount = len(SIZES);
const algorithmsCount = len(algorithms);
console.log("Отсартированный по возрастанию массив")
for (let s = 0; s < sizesCount; s++) {
  const input = ascendingArray(SIZES[s]);
  let line = 'n=' + SIZES[s];
  for (let a = 0; a < algorithmsCount; a++) {
    const ms = measure(algorithms[a].fn, input);
    line = line + '  |  ' + algorithms[a].name + ': ' + Math.round(ms * 100) / 100 + 'мс';
  }
  console.log(line);
}
console.log("Отсартированный по убыванию массив")
for (let s = 0; s < sizesCount; s++) {
  const input = descendingArray(SIZES[s]);
  let line = 'n=' + SIZES[s];
  for (let a = 0; a < algorithmsCount; a++) {
    const ms = measure(algorithms[a].fn, input);
    line = line + '  |  ' + algorithms[a].name + ': ' + Math.round(ms * 100) / 100 + 'мс';
  }
  console.log(line);
}
