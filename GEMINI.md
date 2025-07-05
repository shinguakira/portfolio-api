# Project Overview

## Purpose

This project is a RESTful API built with Express.js and TypeScript. It serves portfolio data for a web front-end.

## Core Technologies

- Node.js
- Express.js
- TypeScript

## Directory Structure

- `src/`: Contains the main source code.
  - `constants/`: Holds hardcoded data for the portfolio (e.g., profile, projects, skills).
  - `controllers/`: Contains the route handlers (business logic) for the API endpoints.
  - `routes/`: Defines the API routes and maps them to controllers.
  - `type/`: Contains TypeScript type definitions, likely shared with a front-end application.
- `dist/`: (Generated on build) Contains the compiled JavaScript code.

## Key Files

- `src/index.ts`: The main entry point of the application. It sets up the Express server, middleware, and routes.
- `src/routes/portfolio.ts`: Defines all the API endpoints (e.g., `/api/profile`, `/api/projects`).
- `src/controllers/portfolio.ts`: Implements the logic for each API endpoint, fetching data from the `constants` directory.
- `package.json`: Lists project dependencies and defines NPM scripts.
- `tsconfig.json`: Configuration file for the TypeScript compiler.

## NPM Scripts

- `npm run dev`: Starts the development server with `ts-node-dev` for live reloading.
- `npm run build`: Compiles the TypeScript source code into JavaScript in the `dist/` directory.
- `npm run start`: Starts the production server from the compiled code in `dist/`.
- `npm run test`: Runs tests using Jest.
