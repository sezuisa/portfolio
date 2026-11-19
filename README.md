# Portfolio

My personal UX portfolio, built with Next.js and Tailwind CSS and exported as a
static site.

- Pages live in `src/app/` (`(home)/page.tsx` is the home page, case studies are
  in `(projects)/`).
- Images and other static files live in `public/`.
- The order of the "Next Case Study" links is defined in
  `src/utils/casestudies.ts`.
- Folders prefixed with `_` (e.g. `(projects)/_smarti`) are excluded from
  routing. Rename them back to publish them again.

## Deployment

Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/nextjs.yml` (`npm ci` + `next build`, then `out/` is
uploaded). Nix is **not** involved in deployment; the flake is only a local
development convenience.

## Development with Nix

The flake provides a pinned Node.js 26 toolchain, a shortcut for the dev server,
and a formatter. It is configured for Apple Silicon Macs (`aarch64-darwin`)
only.

### Prerequisites

Nix with flakes enabled. If a `nix` command complains about the experimental
features `nix-command` or `flakes`, either add this line to
`~/.config/nix/nix.conf`:

```
experimental-features = nix-command flakes
```

or pass `--extra-experimental-features "nix-command flakes"` to each command.

### Commands

| Command            | What it does                                                                     |
| ------------------ | -------------------------------------------------------------------------------- |
| `nix develop`      | Opens a shell with Node.js 26 (and npm) on the `PATH`. Leave it with `exit`.     |
| `nix run`          | Starts the dev server (`npm run dev`) with Node.js 26, without entering a shell. |
| `nix fmt`          | Formats `.nix`, `.md`, `.yml` and `.yaml` files (configured in `treefmt.nix`).   |
| `nix flake check`  | Fails if any of those files are not formatted.                                   |
| `nix flake update` | Updates the pinned inputs in `flake.lock` (e.g. to get a newer Node.js 26).      |

Note that `nix fmt` does **not** format the TypeScript code. Use
`npm run format:fix` for that (see below).

### Typical workflow

```bash
# 1. Enter the dev shell
nix develop

# 2. Install dependencies (first time, and whenever package-lock.json changes)
npm ci

# 3. Start the dev server, then open http://localhost:3000
npm run dev

# 4. Before pushing: check that the production build works.
#    The static site is written to out/.
npm run build

# 5. Format the code
npm run format:fix   # TypeScript, CSS, JSON, ...
nix fmt              # Nix, Markdown, YAML
```

Instead of steps 1 and 3, you can also just run `nix run` once dependencies are
installed.

### npm scripts

| Script               | What it does                                  |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Dev server with hot reload on port 3000.      |
| `npm run build`      | Production build and static export to `out/`. |
| `npm run lint`       | Runs ESLint.                                  |
| `npm run format`     | Checks formatting with Prettier.              |
| `npm run format:fix` | Fixes formatting with Prettier.               |

### Troubleshooting

- **Type errors mentioning `.next/dev/types` and pages that no longer exist**
  (e.g. after renaming or moving a page): these are stale generated files.
  Stop the dev server, delete `.next/dev/types` and build again.
- **Wrong Node.js version**: check `node --version` inside `nix develop`. It
  should be 26.x. Outside the dev shell, whichever Node is installed globally is
  used instead.
