# Naas - Next.js as a Service

Naas is a **clean, modern, and developer-friendly** boilerplate designed for full-stack web developers using the following technologies:

- **Next.js** (frontend & API routes)
- **NextAuth** (authentication)
- **Prisma** (database ORM)
- **Hono.js** (lightweight backend framework for APIs)
- **TypeScript** (type-safe code)
- **React** (frontend library)
- **TailwindCSS** (styling)

This repository ensures clean code practices, ease of use, and flexibility for your projects.

---

## Features

- **Full Stack Solution:** Seamlessly integrates frontend and backend development.
- **Clean Code:** Enforced by Biome for formatting and linting.
- **Authentication:** Easy-to-implement authentication with NextAuth.
- **Database Management:** Prisma for type-safe and efficient database handling.
- **Fast Backend:** Lightweight API handling with Hono.js.
- **Modern Styling:** Styled with TailwindCSS.
- **Type Safety:** Full TypeScript support throughout.

---

## Requirements

- **Node.js** >= 18.x
- **npm** or **yarn** (package manager)
- **PostgreSQL** (or any database supported by Prisma)

---

## Getting Started

### 1. Clone the Repository

```bash
$ git clone https://github.com/soheilghanbary/naas.git
$ cd naas
```

### 2. Install Dependencies

```bash
$ npm install
# or
$ yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
# DataBase
DATABASE_URL=postgresql://root:password@localhost:5432/test

# secret key
AUTH_SECRET=mysecret

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000

# Github
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

# Google
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

### 4. Run Database Migrations

```bash
$ npx prisma migrate dev
```

### 5. Start the Development Server

Start the Next.js app:

```bash
$ npm run dev
# or
$ yarn dev
```

By default:

- **Frontend** is available at `http://localhost:3000`
- **Backend/API** is available at `http://localhost:3000/api`

---

## Project Structure

```
naas/
├── prisma/             # Prisma schema and migrations
├── public/             # Public assets (images, etc.)
├── src/
│   ├── app/          # Next.js pages
│   ├── components/     # Reusable React components
│   ├── styles/         # TailwindCSS styles
│   ├── utils/          # Utility functions
│   ├── api/            # Backend logic using Hono.js
│   └── server          # Additional server-side logic
├── .env                # Environment variables
├── .biome.json         # Configuration for Biome formatter & linter
├── package.json        # Package dependencies and scripts
└── README.md           # Project documentation
```

---

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the production-ready app.
- `start`: Runs the production build.
- `lint`: Lints the code using Biome.
- `check:lint`: Checks for linting errors.
- `db:push`: Pushes database migrations to the database.
- `db:gen`: Generates Prisma client.
- `db:std`: Opens Prisma Studio.

---

## Technologies

| Technology    | Purpose                         |
|---------------|---------------------------------|
| **Next.js**   | Frontend framework              |
| **NextAuth**  | User authentication             |
| **Prisma**    | Database ORM                   |
| **Hono.js**   | Lightweight API framework       |
| **TypeScript**| Type-safe code                 |
| **React**     | Frontend library               |
| **TailwindCSS**| Styling                        |
| **Biome**     | Linter and formatter           |

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes, enhancements, or bug fixes.

---

## License

This project is licensed under the **MIT License**.

---

## Author

Created by [Soheil Ghanbary](https://github.com/soheilghanbary).