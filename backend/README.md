This is an [Nextjs](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Getting Started

- Navigate into `backend` folder
- Run `cp .env.example .env` to open .env and set the environment variables to match the ones in the Vercel Storage Dashboard
- Run `yarn install` to install all dependencies for local development
- Run `yarn dev` to run the Next.js app in development mode

## Setting up local db

- Run `yarn prisma migrate deploy` to apply db migrations to your db
- Run `yarn prisma db seed` to populate your db with inital data in the `seed.ts` file
