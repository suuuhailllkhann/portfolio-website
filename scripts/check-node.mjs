const [major, minor] = process.versions.node.split(".").map(Number);
const supported = major > 22 || (major === 22 && minor >= 13);

if (!supported) {
  console.error(`\nUnsupported Node.js ${process.versions.node}.`);
  console.error("This project requires Node.js 22.13 or newer because vinext uses APIs unavailable in Node 20.");
  console.error("Install Node.js 22 LTS or newer, reopen the terminal, then run: npm install && npm run dev\n");
  process.exit(1);
}
