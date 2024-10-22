This is a [Nextjs](https://nextjs.org/) project created with [`Vercel Postgres + Prisma Next.js Starter`](https://vercel.com/templates/next.js/postgres-prisma).

# Getting Started

1. Navigate into `backend` folder
2. Run `cp .env.example .env` to create .env and then set the environment variables
3. Install dependencies

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the app

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

## Setting up local db

1. Apply db migrations to your db

   ```bash
   npm run prisma migrate deploy
   ```

   or

   ```bash
   yarn prisma migrate deploy
   ```

2. Populate your db with inital data in the `seed.ts` file

   ```bash
   npm run prisma db seed
   ```

   or

   ```bash
   yarn prisma db seed
   ```

### Learn more

To learn more about developing with Expo, look at the following resources:

- [Nextjs documentation](https://nextjs.org/docs): Learn Next.js fundamentals
- [Prisma documentation](https://www.prisma.io/docs): Learn Prisma fundamentals
