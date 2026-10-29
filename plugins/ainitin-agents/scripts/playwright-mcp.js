#!/usr/bin/env node
// Cross-platform launcher for the Playwright MCP server used by ainitin-qa.
// `node` is a real executable on every OS, so .mcp.json can call it directly;
// on Windows npx is a .cmd shim and must be started through a shell.
const { spawn } = require("child_process");

const isWin = process.platform === "win32";
const args = ["-y", "@playwright/mcp@latest", ...process.argv.slice(2)];

// Linux servers usually have no display: run headless with Playwright's bundled Chromium.
if (process.platform === "linux" && !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) {
  if (!args.includes("--headless")) args.push("--headless");
  if (!args.some((a) => a.startsWith("--browser"))) args.push("--browser", "chromium");
}

const child = spawn("npx", args, { stdio: "inherit", shell: isWin });
child.on("exit", (code, signal) => process.exit(signal ? 1 : code ?? 0));
child.on("error", (err) => {
  console.error(`playwright-mcp: failed to start npx: ${err.message}`);
  process.exit(1);
});
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => child.kill(sig));
