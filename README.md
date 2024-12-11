| name                                                | description                                                                                                                                                                                  | frontend framework                                                                            | backend framework                  | css                                                   | database                                                           | ORM                                  |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------ |
| Expo + Vercel Postgres + Prisma Next.js Application | A React Native mobile app frontend built with Expo, along with a Next.js backend using Vercel Postgres as the database and Prisma as the ORM, as well as an internal tool built with Next.js | [Expo](https://docs.expo.dev/) ([React Native](https://reactnative.dev/docs/getting-started)) | [Next.js](https://nextjs.org/docs) | [Tailwind](https://tailwindcss.com/docs/installation) | [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) | [Prisma](https://www.prisma.io/docs) |

# Jila

Jila (KHēlä′) aims to reduce language barriers for local Q’anjob’al-speaking immigrants by providing resources for skills crucial for daily life. Q’anjob’al is a Mayan language that is not similar to Spanish or English, making it difficult for speakers to navigate everyday life. As such, several organizations in the Champaign-Urbana area have been working to strengthen resource access and support for local immigrants. Our solution is to bridge the technology gap by providing a user-friendly mobile application which will host short, educational videos translated in Q’anjob’al covering various domains, such as transportation, legal, medical, and professional development. This app will supplement current efforts, with the ultimate goal of increasing accessibility of resources. 

## Deploy for Frontend

TBD

## Deploy for Backend

This app uses Vercel's Git integration for the backend, which gives the ability to test new features and changes on the internal tool and backend APIs using [Preview Deployments](https://vercel.com/docs/concepts/deployments/preview-deployments) for pull requests. This allows for thorough testing before merging to the main branch, which then triggers an automatic [Production Deployment](https://vercel.com/docs/concepts/deployments/environments#production).

The `main` branch automatically deploys to Vercel Production when pushing to `main` branch, or triggering a one-time manual deploy of the `main` branch by `vercel --prod`.

## Relative Links

- Backend host: [Vercel](https://vercel.com/jila) (Currently, only the Jila GitHub account has access due to the limitation of Vercel's free tier, which doesn’t allow teammates to be added)
- Design: [Figma](https://www.figma.com/design/sKxojtM0ai5Wge51ZFXFKm/Jila-UI%2FUX)
- Project management: [Jira](https://jila.atlassian.net/jira/projects)

### Notes

The entire backend is hosted on [Vercel](https://vercel.com/docs). We're using Vercel's free tier for this app, which includes a free Vercel Postgres database with certain [limitations](https://vercel.com/docs/storage/vercel-postgres/usage-and-pricing). Given that we expect fewer than 1,000 total users and a small amount of data stored in the database, we believe this should suffice for now. However, should consider upgrading to a higher tier when we approach these limitations or migrating to a better free database provider if one becomes available.

This repository is public because Vercel’s free tier does not support team contributions on private repos. To work around this limitation, we made the repo public but enabled [protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule), such as requiring pull request reviews and mandatory approvals before merging, to prevent any intentional misuse or accidental issues from outsiders.
