// A Day of One-Line Pitches — make.fun entry.
// Writes one pitch sentence (at most 240 characters) to /output/entry.txt.
// Node.js 22, standard library only, fully deterministic: the sentence is fixed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "You've had that app idea for ages \u2014 just tell make.fun what it is in plain words, and an AI agent will build it while you watch, no coding needed.";

const OUTPUT = "/output/entry.txt";

function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // A sentence terminator counts only at the end or before a space + capital,
  // so the dot inside "make.fun" is not mistaken for one.
  const terminators = (text.match(/[.!?](?=\s+[A-Z]|$)/g) ?? []).length;
  if (terminators !== 1 || !/[.!?]$/.test(text.trim())) {
    throw new Error("entry must be exactly one sentence");
  }
}

function main(): void {
  validate(PITCH);
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, PITCH, "utf8");
  // Read the file back and confirm it holds exactly the validated sentence.
  const roundTrip = readFileSync(OUTPUT, "utf8");
  if (roundTrip !== PITCH) {
    throw new Error("read-back mismatch: /output/entry.txt does not hold the validated sentence");
  }
  console.log(`wrote ${[...PITCH].length} characters to ${OUTPUT}`);
}

main();
