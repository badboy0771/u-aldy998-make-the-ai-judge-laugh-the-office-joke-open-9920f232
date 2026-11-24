// Make the AI Judge Laugh: the Office Joke Open.
// One line of office comedy about the printer — the only thing in the
// building with a healthier work-life balance than the staff.
//
// The program checks the joke against the bounty gate (1-200 characters,
// exactly one line, no leading or trailing whitespace), writes it to
// /output/entry.txt, then reads the file back to prove the write landed
// byte for byte. It runs on plain Node 22 with zero dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The joke. Setup: a printer that only cooperates when nothing is urgent —
// a complaint every office worker recognises instantly. Punchline: the
// printer is not broken, it is thriving; it is the only thing here with a
// better work-life balance than us. The turn lands in the final words.
const JOKE =
  "Our printer only works when nobody needs it — it's the only thing in this office with a better work-life balance than us.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;
const MAX_BYTES = 800;

// Returns the line unchanged once every gate condition holds, and throws a
// descriptive error otherwise so a bad line can never reach the output file.
function validateJoke(line: string): string {
  const trimmed = line.trim();

  if (trimmed.length < MIN_CHARS || trimmed.length > MAX_CHARS) {
    throw new Error(
      `joke is ${trimmed.length} characters, but the gate needs ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  // A single line means no newline characters anywhere, and nothing was
  // trimmed away at either end — trailing spaces would be invisible padding.
  if (trimmed !== line || line.includes("\n") || line.includes("\r")) {
    throw new Error("joke must be exactly one line with no surrounding whitespace");
  }
  // Characters are the gate, but the byte cap keeps the entry a short
  // single-line string in any encoding the judge might read.
  const byteLength = new TextEncoder().encode(trimmed).length;
  if (byteLength > MAX_BYTES) {
    throw new Error(`joke is ${byteLength} bytes, over the ${MAX_BYTES}-byte cap`);
  }
  return trimmed;
}

function writeEntry(): void {
  const checked = validateJoke(JOKE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", checked, "utf8");

  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== checked) {
    throw new Error("read-back mismatch: /output/entry.txt differs from the joke");
  }
  console.log(`wrote /output/entry.txt (${checked.length} characters)`);
  console.log(checked);
}

writeEntry();
