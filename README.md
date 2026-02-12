# Ecomerce (local dev run)

Quick instructions to run backend and frontend for local development.

Prerequisites
- Node.js 18+ recommended
- PostgreSQL running and configured (see `backend/.env`)

Backend
1. Open a terminal and go to the backend folder:

```bash
cd backend
```

2. Create a `.env` file (or update) with these important variables:

```
PORT=8083
DATABASE_URL=postgres://user:pass@localhost:5432/ecomerce
STRIPE_SECRET_KEY=sk_test_...
FRONTEND_URL=http://localhost:3000
```

3. Install and start:

```bash
npm install
npm run dev
```

Frontend
1. Open another terminal and go to the frontend folder:

```bash
cd frontend
```

2. Create a `.env` file (optional) to override API url:

```
REACT_APP_API_URL=http://localhost:8083/api
```

3. Install and start:

```bash
npm install
npm start
```

Notes
- Backend uses CORS with `FRONTEND_URL` and allows credentials; if you use a different frontend port, set `FRONTEND_URL` in backend `.env`.
- Keep secrets out of version control.
- If you get Stripe errors, verify `STRIPE_SECRET_KEY` is set and valid.

If you want, I can add a single npm script at the repository root to run both apps with `concurrently` or `npm-run-all`.
