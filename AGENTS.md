# Project Rules

This project uses Next.js 15.

## Commands

Development:

npm run dev

Build:

npm run build

Production:

npm run start

## Important

Never use:

next dev
next build
next start

Always use:

npm run dev
npm run build
npm run start

or

npx next dev
npx next build
npx next start

## Environment

Use local project dependencies only.

Do not assume Next.js is installed globally.

Always verify build success before committing.

Run:

npm run build

before any deployment.
