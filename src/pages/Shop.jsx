import { useMemo, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

const colorSwatches = ['#2B2620', '#B8622E', '#7C8B67', '#3F5A6E', '#E8DCCB', '#FFFFFF']
const materials = ['Wood', 'Metal', 'Fabric', 'Leather', 'Glass']
const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low', 'Newest']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState(2000)
  const [sort, setSort] = useState('Popular')

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= maxPrice)
    if (activeCategory !== 'all') list = list.filter((p) => p.category === activeCategory)
    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [activeCategory, maxPrice, sort])

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Shop' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-8">Shop</h1>

      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        {/* Sidebar filters */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === 'all' ? 'bg-clay-50 text-clay-600 font-medium' : 'text-ink-muted hover:bg-cream-soft'
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setActiveCategory(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === c.id ? 'bg-clay-50 text-clay-600 font-medium' : 'text-ink-muted hover:bg-cream-soft'
                    }`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <input
              type="range"
              min={0}
              max={2000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-clay-500"
            />
            <div className="flex justify-between text-xs text-ink-muted mt-2">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {colorSwatches.map((c) => (
                <button
                  key={c}
                  aria-label={`Filter by color ${c}`}
                  className="w-7 h-7 rounded-full border border-line"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Material</h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <input type="checkbox" id={m} className="accent-clay-500 w-4 h-4 rounded" />
                  <label htmlFor={m}>{m}</label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-ink-muted">Showing 1–{filtered.length} of {products.length} products</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-ink-muted">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-line rounded-md px-3 py-1.5 bg-white outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-ink-muted">
              No products match these filters. Try widening your price range.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} tone={i} />
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-10">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`w-9 h-9 rounded-md text-sm font-medium ${
                  n === 1 ? 'bg-clay-500 text-white' : 'text-ink-muted hover:bg-cream-soft'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
