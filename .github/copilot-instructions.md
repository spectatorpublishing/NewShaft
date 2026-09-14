# NewShaft Project Guidelines

## Read First

- Use `README.md` as the canonical source for setup, contribution, testing, commit, and review guidance. Then, consult the relevant `README.md` for the subdirectory you are working in.
- Before changing a subsystem, inspect nearby implementations and tests and preserve the existing public API and behavior unless the task explicitly changes them.
- Keep changes focused; do not reformat or refactor unrelated code.

## Architecture

- `server/` contains the backend Node.js routes. This subdirectory has its own `README.md` for its documentation at `server/README.md`. Follow the existing structure and patterns for all code changes.
- `client/` is the React frontend. Components should use the existing `pages/`, `components/`, and `util/` structure. This subdirectory has its own `README.md` for its documentation at `client/README.md`. Follow the existing structure and patterns for all code changes.

## Security and Data

- Never read, print, commit, or expose `.env` contents, credentials, tokens, or other secrets.

## Change Discipline

- Prefer the smallest root-cause fix that fits existing abstractions.
- Preserve unrelated user changes in the working tree.
- Do not commit changes or create branches unless explicitly asked.
- Always refer to existing code and tests before adding new abstractions, and avoid introducing new abstractions unless they are clearly needed.