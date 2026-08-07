# Adding your own images

Every image is loaded from `/public/images/...` by plain path — no imports, no code changes. Drop a file in with the exact name below and it appears automatically; anything you haven't added yet just falls back to the soft placeholder graphic, so the site never breaks while you're mid-upload.

Recommended format: `.jpg` or `.webp`, roughly 1000×1000px for products (square), 1600×1000px for the hero, 800×600px for category/article cards.

## Hero (Home page)
```
public/images/hero/hero.jpg
```

## Categories (Home page — "Shop by Category")
```
public/images/categories/living-room.jpg
public/images/categories/bedroom.jpg
public/images/categories/dining-room.jpg
public/images/categories/office.jpg
public/images/categories/outdoor.jpg
```

## Products (Shop, product cards, product detail, cart, checkout)
Each product supports a main image plus two extra gallery shots (used on the product detail page thumbnails). Only the first is required — the page falls back gracefully if `-2` / `-3` are missing.

```
public/images/products/accent-chair.jpg
public/images/products/accent-chair-2.jpg
public/images/products/accent-chair-3.jpg

public/images/products/oak-dining-table.jpg
public/images/products/oak-dining-table-2.jpg
public/images/products/oak-dining-table-3.jpg

public/images/products/lounge-armchair.jpg
public/images/products/lounge-armchair-2.jpg
public/images/products/lounge-armchair-3.jpg

public/images/products/wooden-sideboard.jpg
public/images/products/wooden-sideboard-2.jpg
public/images/products/wooden-sideboard-3.jpg

public/images/products/coffee-table.jpg
public/images/products/coffee-table-2.jpg
public/images/products/coffee-table-3.jpg

public/images/products/king-bed-frame.jpg
public/images/products/king-bed-frame-2.jpg
public/images/products/king-bed-frame-3.jpg

public/images/products/l-shaped-sofa.jpg
public/images/products/l-shaped-sofa-2.jpg
public/images/products/l-shaped-sofa-3.jpg

public/images/products/wooden-bed-frame.jpg
public/images/products/wooden-bed-frame-2.jpg
public/images/products/wooden-bed-frame-3.jpg
```

## Articles (Inspiration page)
```
public/images/articles/cozy-living-room.jpg
public/images/articles/dining-table.jpg
public/images/articles/bedroom-design.jpg
public/images/articles/outdoor-care.jpg
```

## About page
```
public/images/about/about.jpg
```

## Adding a brand-new product
When you add a new product object in `src/data/products.js`, give it an `image` (and optional `gallery` array) field pointing at whatever path you want, e.g.:

```js
{
  id: 'new-armchair',
  name: 'New Armchair',
  image: '/images/products/new-armchair.jpg',
  gallery: ['/images/products/new-armchair.jpg', '/images/products/new-armchair-2.jpg'],
  // ...rest of fields
}
```
