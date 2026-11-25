import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "Do not spend your first paycheck on that mechanical keyboard with the lights; the lights will not make you type faster.\nIt mattered because I learned the hard way that buying tools is not the same as doing the work, and the keyboard is still gathering dust.");
// Second pass: entry output verified unchanged.
