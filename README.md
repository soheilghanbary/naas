# Naas - Next.js as a Service

Naas is a **modern, scalable, and developer-friendly** boilerplate designed for full-stack web applications. It integrates powerful technologies for seamless development:

- **Next.js** – Full-stack framework (frontend & API routes)
- **Better Auth** – Authentication solution
- **Drizzle ORM** – Type-safe database ORM
- **TypeScript** – Strict type safety
- **React** – Component-based frontend library
- **TailwindCSS** – Utility-first styling
- **Hono.js** – Lightweight API framework

This boilerplate enforces clean code practices, flexibility, and ease of use for developers.

---

## 🚀 Features

- **Full Stack Solution** – Integrated frontend and backend with Next.js
- **Authentication** – Pre-configured Better Auth support
- **Database Management** – Drizzle ORM for efficient database operations
- **Modern Styling** – TailwindCSS for rapid UI development
- **Type Safety** – Full TypeScript support
- **API Routes** – Hono.js for type-safe API handling
- **Code Quality** – Biome for formatting and linting

---

## 📌 Requirements

- **Bun** >= 1.0.x || **Node.js** >= 20.x
- **bun** or **pnpm** (recommended package managers)
- **PostgreSQL** (or any Drizzle-supported database)

---

## 🔧 Getting Started

### 1️⃣ Clone the Repository

```bash
$ git clone https://github.com/soheilghanbary/naas.git
$ cd naas
```

### 2️⃣ Install Dependencies

```bash
$ bun install  # Recommended
# or
$ pnpm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and define the following variables:

```env
# DataBase
DATABASE_URL=postgresql://postgres:password@localhost:5432/test
# Better Auth
BETTER_AUTH_SECRET=secret
BETTER_AUTH_URL=http://localhost:3000
# Github
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
# Google
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

### 4️⃣ Run Database Migrations

```bash
$ bun drizzle-kit migrate:dev
```

### 5️⃣ Start the Development Server

```bash
$ bun run dev  # Recommended
# or
$ pnpm dev
```

---

## 📂 Project Structure

```
naas/
├── public/             # Static assets (images, etc.)
├── server/             # Backend logic (API, auth, db)
├── src/
│   ├── app/            # Next.js application
│   ├── components/     # Reusable UI components
│   ├── assets/         # Static files
│   ├── config/         # App configuration
│   ├── lib/            # Utility functions
├── .env.example        # Environment variables (copy to .env)
├── .biome.json         # Biome linter & formatter config
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## 🛠 Scripts

| Command         | Description                     |
|----------------|---------------------------------|
| `dev`          | Starts the development server  |
| `build`        | Builds the production app      |
| `start`        | Runs the production build      |
| `lint`         | Lints the code (Biome)         |
| `check:lint`   | Checks for linting errors      |
| `db:push`      | Pushes database migrations     |
| `db:gen`       | Generates Drizzle ORM types    |
| `db:std`       | Opens Drizzle ORM Studio       |

---

## ⚡️ Technologies

| Technology    | Purpose                        |
|---------------|---------------------------------|
| **Next.js**  | Full-stack web framework        |
| **Better Auth** | User authentication          |
| **Drizzle ORM** | Database ORM                 |
| **TypeScript** | Type-safe development         |
| **React**    | Component-based UI              |
| **TailwindCSS** | Utility-first styling        |
| **Biome**    | Linter and code formatter       |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements or bug fixes.

---

## 📜 License

Licensed under the **MIT License**.

---

## 👤 Author

Created by [Soheil Ghanbary](https://github.com/soheilghanbary).