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

## Agents (v1.3.0, 18)

Product team: `ainitin` (PM lead), `ainitin-rnd`, `ainitin-assistant`, `ainitin-scrummaster`, `ainitin-uiux`,
`ainitin-developer`, `ainitin-qa`, `ainitin-marketing`.

Vision AI engineering team: `architect`, `backend-engineer`, `frontend-engineer`, `ml-cv-engineer`, `security-engineer`,
`devops-sre`, `code-reviewer`, `debugger`, `tech-writer`, `brand-designer`. They are written for the `vision-ai-final` repo and its
`CLAUDE.md` (Flask + CV engines on a GPU server). `ainitin` delegates to them.

`skills/` holds the design skills from github.com/emilkowalski/skills (MIT, licence included) used by `ainitin-uiux`
and `brand-designer`.

Flow: `ainitin` -> `architect` -> `ainitin-uiux` -> `backend-engineer` / `frontend-engineer` / `ml-cv-engineer`
-> `ainitin-qa` -> `code-reviewer` + `security-engineer` -> `devops-sre` -> `tech-writer`.
