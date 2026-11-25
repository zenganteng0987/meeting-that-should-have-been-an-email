// Writes one meeting joke to /output/entry.txt and prints the same text.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We held a meeting so one person could read the email out loud to the people who had already read the email.";
const outFile = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outFile, entry, "utf8");
process.stdout.write(entry);
