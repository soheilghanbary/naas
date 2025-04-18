# the modern NextJS starter for all developers

A modern, scalable boilerplate for full-stack web apps using:

- **Next.js** (frontend & API routes)
- **Better Auth** (authentication)
- **Drizzle ORM** (database)
- **TypeScript**
- **React**
- **TailwindCSS**
- **Hono.js** (API framework)

---

## Features

- Full-stack Next.js (frontend & backend)
- Pre-configured authentication (Better Auth)
- Drizzle ORM for database
- TailwindCSS for styling
- TypeScript throughout

---

## Requirements

- **Bun** >= 1.0.x or **Node.js** >= 20.x
- **bun** or **pnpm**
- **PostgreSQL** (or Drizzle-supported DB)

---

## Getting Started

```bash
git clone https://github.com/soheilghanbary/naas.git
cd naas
bun install        # or: pnpm install
cp .env.example .env
# Edit .env with your settings
bun drizzle-kit migrate:dev
bun run dev        # or: pnpm dev
```

---

## Project Structure

```
naas/
├── biome.json              # Biome linter/formatter config
├── bun.lockb               # Bun lockfile
├── components.json         # UI components config
├── drizzle.config.ts       # Drizzle ORM config
├── next.config.ts          # Next.js config
├── package.json            # Project manifest
├── postcss.config.mjs      # PostCSS config
├── tsconfig.json           # TypeScript config
├── README.md
├── public/                 # Static assets (favicon, manifest, etc)
├── server/                 # Backend logic (auth, db, API)
│   ├── auth.ts
│   ├── main.ts
│   └── db/
│       ├── index.ts
│       └── schema.ts
├── src/                    # Frontend & shared code
│   ├── middleware.ts       # Next.js middleware
│   ├── app/                # App directory (routes, pages)
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       ├── [[...route]]/route.ts
│   │       └── auth/[...all]/route.ts
│   ├── components/         # UI & common components
│   │   ├── common/
│   │   ├── providers/
│   │   └── ui/
│   ├── config/             # App config (site.ts)
│   ├── lib/                # Utilities (api.ts, utils.ts)
│   └── styles/             # CSS (app.css, theme.css)
```

---

## Scripts

- `dev` – Start dev server
- `build` – Build for production
- `start` – Run production build
- `lint` – Lint code (Biome)
- `db:push` – Push DB migrations
- `db:gen` – Generate Drizzle types

---

## License

MIT © [Soheil Ghanbary](https://github.com/soheilghanbary)
