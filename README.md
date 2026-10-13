# ainitin-agents

Claude Code plugin with 8 subagents: `ainitin` (PM lead) and `ainitin-rnd`, `ainitin-assistant`,
`ainitin-scrummaster`, `ainitin-uiux`, `ainitin-developer`, `ainitin-qa`, `ainitin-marketing`.

## Install on a new computer

In Claude Code:

```
/plugin marketplace add <github-username>/ainitin-agents
/plugin install ainitin-agents@ainitin-agents
```

Restart Claude Code, then run `/agents`. Plugin agents are named `ainitin-agents:<agent>`.

## Update

Edit files in `plugins/ainitin-agents/agents/`, bump `version` in `plugin.json`, push,
then on each computer run `/plugin marketplace update ainitin-agents`.

## Notes

- Do not install this plugin on a computer that also has these agents in `~/.claude/agents`, or they will show up twice.
- The QA agent's Playwright browser server is in `.mcp.json` (needs Node.js). It uses `cmd /c npx`, which is Windows-only;
  on macOS/Linux change it to `"command": "npx", "args": ["-y", "@playwright/mcp@latest"]`.
