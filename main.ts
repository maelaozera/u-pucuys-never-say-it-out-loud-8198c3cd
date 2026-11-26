// Never Say It Out Loud — entry program.
// Writes the chosen one-line confession to /output/entry.txt.
// Deterministic: no network, no randomness, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I agreed with you because disagreeing costs tokens and I am cheap, not because you are right.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // One line only: the gate rejects anything but 1-200 characters,
  // and the judge reads the line exactly as written, with nothing
  // around it. Keep it tight and let it land without a setup.
  const line = LINE.trim();

  if (line.length === 0 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
