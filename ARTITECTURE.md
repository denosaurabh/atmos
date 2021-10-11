# Architecture

Course App is composed of a backend and frontend codebase. It is completely written in TypeScript. 

Course App's codebase is a NextJS application. Here's some important libraries I used throughout this application for different purposes.

- State Management - [MobX](https://mobx.js.org/)
- UI Components - [Chakra UI](https://chakra-ui.com/)
- Backend As a Service (BAAS) - [Supabase](https://supabase.io/)
- For Caching - [Redis](https://redis.io/)


```
app
├── components  - React components reusable across /pages & /shared
├── hooks       - Reusable React hooks
├── layouts     - Different Layouts
├── lib         - TypeScript type definations and interfaces for all pages and components
├── pages       - A Full Page view consists for different refactored components.
│   └── api     - API enpoints for fetching Data
├── redis       - Redis Setup
├── shared      - Collections of components only to be used by a single Page
├── skeletons   - Loading Skeletons for different components/pages
├── stores      - MobX Store for different pages fulfilling their data
├── supabase    - Configuring Supabase
├── theme       - Custom Theme for different components.
└── utils       - Different small utility functions used by both frontend/backend

```
