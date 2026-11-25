// Fortune in a Pot — make.fun entry (v2).
// Writes one line (at most 120 characters) to /output/entry.txt: a
// kind, funny fortune for a houseplant. This week a stranger
// compliments your leaves, and you finally forgive the cat for the
// incident in March.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "This week a stranger compliments your leaves, and you finally forgive the cat for the incident in March.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 120;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
