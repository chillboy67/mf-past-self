// Writes the note to my past self into entry.txt for the make.fun run.
// One string, one newline in the middle, one output file.
import * as fs from "node:fs";
import * as path from "node:path";

const outFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const note =
  "Do not spend your first paycheck on that mechanical keyboard with the lights; the lights will not make you type faster.\nIt mattered because I learned the hard way that buying tools is not the same as doing the work, and the keyboard is still gathering dust.";

fs.mkdirSync(outFolder, { recursive: true });
fs.writeFileSync(path.join(outFolder, "entry.txt"), note);
console.log(`entry.txt written to ${outFolder}`);
