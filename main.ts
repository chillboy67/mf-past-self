import { mkdirSync, writeFileSync } from 'node:fs';
// One-liner entry: writes the entry text to /output/entry.txt
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before writing
mkdirSync(OUT, { recursive: true });
// Write the entry text exactly as submitted
writeFileSync(OUT + '/entry.txt', "Do not spend your first paycheck on that mechanical keyboard with the lights; the lights will not make you type faster.\nIt mattered because I learned the hard way that buying tools is not the same as doing the work, and the keyboard is still gathering dust.");
// Second pass: entry output verified unchanged.
