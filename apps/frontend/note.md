## React Directory Structure 

---

## Root Structure (`src/`)

All application code lives inside `src`.

```txt
src/
├── pages/
├── components/
├── hooks/
├── services/
├── utils/
├── assets/
├── App.tsx
└── index.tsx
```

---

## Pages

The `pages` directory contains **route-level components**.

Each page is a folder. Any file used **only by that page** stays inside the page folder.

```txt
src/pages/Users/
├── UsersPage.tsx
├── UserList.tsx
├── useUsers.ts
├── users.service.ts
└── users.types.ts
```
---

## Shared Code

Code is moved out of a page **only after reuse**.

### Components

Reusable UI elements.

```txt
src/components/
├── Button.tsx
├── Modal.tsx
```

### Hooks

Reusable logic.

```txt
src/hooks/
├── useAuth.ts
```

### Services

API and external calls.

```txt
src/services/
├── apiClient.ts
├── auth.service.ts
```

### Utils

Pure helper functions (no React).

```txt
src/utils/
├── formatDate.ts
```

---