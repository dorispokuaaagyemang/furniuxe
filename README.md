# Furniuxe — Furniture Storefront

React + Vite + Tailwind CSS implementation of the Furniuxe design (Home, Shop, Product Detail, Cart, Checkout, About, Inspiration, Contact, Login, Register).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Structure

```
src/
  components/   Navbar, Footer, Layout, ProductCard, Breadcrumb, StarRating, Placeholder
  context/      CartContext — global cart state (add/update/remove, subtotal, count)
  data/         products.js — mock product + category data
  pages/        one file per route
```

## Notes

- Product photography is mocked with a lightweight `Placeholder` component (icon + soft gradient) so the app runs with zero external image dependencies. It also accepts a `src`/`alt` prop and renders a real `<img>` when one is provided, falling back to the placeholder if the file is missing — see **`IMAGES.md`** for the exact filenames/folders to drop your own photos into.
- Cart state lives in React context (`CartContext`) and is in-memory only (resets on refresh). Wire it to your backend/localStorage when ready.
- Running Tailwind CSS v4. There's no `tailwind.config.js` — design tokens (`clay`, `sage`, `ink`, `cream`, fonts, shadows, radius) are defined in the `@theme` block at the top of `src/index.css`. Change them there to re-theme the whole app.
- Routing uses `react-router-dom` v6, nested under a shared `Layout` (Navbar + Footer).
