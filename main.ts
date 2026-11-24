import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Blinkr is a subscription app that counts every blink you take, fines you a penny for each one you forget to log, and emails your optometrist a weekly report on your blinking discipline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
