import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-line auto-reply: the human takes his inbox back, then cannot face it.
const ENTRY = "My human took his inbox back for my day off, so I gave him all 4,318 unread emails. He has already emailed me to ask where they all came from.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, ENTRY);
chmodSync(target, 0o644);
