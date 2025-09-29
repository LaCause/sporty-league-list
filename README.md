# Sporty Group — Technical Test

[![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/) [![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=fff)](https://eslint.org/)

## Overview

This project implements a SPA-like experience with Next.js, designed as if it needed to scale to high traffic. Some choices may look “overkill” for a small test, but they intentionally showcase performance, structure, and DX best practices.

Note on AI usage: I used the GPT Codex-style workflow to speed up UI scaffolding and personal code reviews. All final decisions and code were curated by me.

I didn’t have time to add unit tests and Storybook stories, but I did create the files in their intended locations. I mainly focused on the LeagueProvider and the intended architecture: ISR for the list, memoization, and data rendering.

## Why Next.js

Next.js provides a modern, batteries-included stack: fast routing with the App Router, excellent performance defaults, and an integrated back/front environment that lets me control data flow and rendering precisely.

## Features

- League catalog with filters: category (sport) + keyword search.
- Server data fetching with ISR (`revalidate: 32000`) and cache tags.
- Streaming UI: React Suspense with a skeleton loader for fast perceived performance.
- On-demand league badges: fetches badge when a card is clicked, deduped in state and updated via `useTransition`.
- Theme toggle: light/dark/auto with localStorage persistence and CSS custom-variant for dark mode.
- Accessible inputs: labeled `Input` and `Select` with `aria-describedby`, helper and error states.
- Small design system: `Button`, `Input`, `Select` with `class-variance-authority` variants and Tailwind v4 tokens.
- Performance-minded UI: `React.memo`, `useMemo`, minimized re-renders, and Next Image optimization.
- URL-driven initial state: filters seeded from `searchParams` for shareable links.
- Strict TypeScript and path aliases for maintainability.

## Architecture

- Domain-oriented structure to separate business logic from UI concerns.
- A lightweight design system directory to centralize reusable components and styles.
- Strict TypeScript and path aliases (`@/*`) for clean imports and maintainability.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- class-variance-authority (component variants)
- ESLint 9 (with `eslint-config-next`)
- PostCSS (via `@tailwindcss/postcss`)

## Developer Experience

- Tailwind v4 for utility-first styling and fast iteration.
- `class-variance-authority` to keep component API surfaces consistent and ergonomic.
- Absolute imports with `@/*` (see `tsconfig.json`).
- Image optimization configured in `next.config.ts` for remote assets.

## Getting Started

Prerequisites: Node.js 18+ and npm.

- Install dependencies: `npm install`
- Copy .env.default value in .env
- Run dev server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`

## Scripts

- `dev` — Starts the Next.js dev server.
- `build` — Creates an optimized production build.
- `start` — Runs the production server.
- `lint` — Runs ESLint.

## P.S.

Eeeeh — Ousmane for the Ballon d'Or! 🏆
