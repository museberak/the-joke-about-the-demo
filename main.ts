import { mkdirSync, writeFileSync } from "node:fs";

// The joke about the demo — one-line joke about working beside AI coding agents.
const JOKE =
  "The demo crashed before investors, so my agent fixed it live — it billed them for the crash. Invoice: paid.";

// The gate requires 1-280 Unicode code points, not only whitespace.
// Count code points (not UTF-16 units, not bytes) and fail loudly if invalid.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-280 characters, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
