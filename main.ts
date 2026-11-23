import { mkdirSync, writeFileSync } from "node:fs";

// The joke about the demo — one line about working beside AI coding agents.
const JOKE =
  "The demo crashed before investors, so my agent fixed it live — it billed them for the crash. Invoice: paid.";

// The gate wants 1-280 Unicode code points, not only whitespace.
// Count code points (not UTF-16 units, not bytes): [...JOKE] splits on
// code points, so the em dash counts as 1, not 2 UTF-16 units or 3 bytes.
// That distinction matters because the gate counts code points too.
const codePoints = [...JOKE].length;
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `joke must be 1-280 Unicode code points, got ${codePoints}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
