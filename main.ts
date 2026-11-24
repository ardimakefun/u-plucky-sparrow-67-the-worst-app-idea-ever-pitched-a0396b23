import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Blinkr is a subscription app that counts every blink you take, fines you a penny for each one you forget to log, and emails your optometrist a weekly report on your blinking discipline.";

const N = [...TEXT].length;
if (N < 1 || N > 240 || TEXT.trim().length === 0) {
  console.error(`entry must be 1-240 code points (got ${N})`);
  process.exit(1);
}

if (TEXT.includes("\n")) {
  console.error("entry must be a single line (newline found)");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
