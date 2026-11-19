# Betesda Church

A responsive Angular website for Betesda Church in Miami. The site includes a home page, an about page, and a visit page with directions to the church.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`. Angular's development server reloads when source files change.

## Routes

- `/` — welcome, community values, and a visit invitation
- `/about` — the church's welcome and values
- `/visit` — address, weekly gathering schedule, map directions, and the supplied Instagram location page

The church address is 12200 SW 56th St, Miami, FL 33175. Weekly gatherings are Fridays at 8:00 PM (sharing with family), Sundays at 9:00 AM (English service), and Sundays at 11:00 AM (Spanish service).

## Build and test

```bash
npm run build
npm test
```

## Deploy to GitHub Pages

The `main` branch deploys automatically to [https://janfatovar.github.io/betesda-church/](https://janfatovar.github.io/betesda-church/) after the GitHub Actions workflow passes its tests and production build. You can also start a deployment manually from the Actions tab.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow builds with the repository's Pages base path and includes a fallback for direct navigation to Angular routes.
