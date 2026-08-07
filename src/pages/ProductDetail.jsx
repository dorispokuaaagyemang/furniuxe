import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Truck, ShieldCheck, RotateCcw, Lock, Heart } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Placeholder from '../components/Placeholder.jsx'
import StarRating from '../components/StarRating.jsx'
import { getProductById } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

const colorOptions = ['#E8DCCB', '#3A3A3A', '#6B7D5A', '#1F1B17']
const tabs = ['Description', 'Details', 'Shipping & Returns', 'Reviews']

const perks = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
  { icon: ShieldCheck, title: '2 Years Warranty', desc: 'Quality you can trust' },
  { icon: RotateCcw, title: '30-Day Returns', desc: 'Hassle free returns' },
  { icon: Lock, title: 'Secure Payment', desc: '100% protected' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(colorOptions[0])
  const [tab, setTab] = useState('Description')
  const [added, setAdded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link to="/shop" className="text-clay-500 font-medium mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  function handleAddToCart() {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, color: 'Selected' }, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: product.name }]} />

      <div className="grid lg:grid-cols-2 gap-12 mt-6">
        {/* Gallery */}
        <div className="flex gap-4">
          <div className="hidden sm:flex flex-col gap-3">
            {(product.gallery || [product.image]).map((src, i) => (
              <button
                key={src + i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 rounded-lg overflow-hidden border transition-colors ${
                  activeImage === i ? 'border-clay-500' : 'border-line hover:border-clay-500'
                }`}
              >
                <Placeholder src={src} alt={`${product.name} view ${i + 1}`} icon="chair" tone={i} className="w-full h-full" />
              </button>
            ))}
          </div>
          <div className="flex-1 rounded-xl2 overflow-hidden">
            <Placeholder
              src={(product.gallery || [product.image])[activeImage]}
              alt={product.name}
              icon="chair"
              tone={0}
              className="w-full aspect-square"
            />
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-2xl font-semibold text-clay-500 mt-3">${product.price.toFixed(2)}</p>
          <div className="mt-2">
            <StarRating rating={product.rating} reviews={product.reviews} size={16} />
          </div>
          <p className="text-ink-muted leading-relaxed mt-5 max-w-md">{product.description}</p>

          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Color</p>
            <div className="flex gap-2">
              {colorOptions.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={`Select color ${c}`}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    color === c ? 'border-clay-500 scale-110' : 'border-line'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="inline-flex items-center border border-line rounded-md">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-cream-soft"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-cream-soft"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8 max-w-sm">
            <button onClick={handleAddToCart} className="btn-primary">
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <Link to="/checkout" className="btn-secondary">Buy Now</Link>
            <button className="text-sm font-medium text-ink-muted flex items-center justify-center gap-2 py-2 hover:text-clay-500">
              <Heart size={16} /> Add to Wishlist
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-line">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-2.5">
                <p.icon size={18} className="text-clay-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium text-ink">{p.title}</p>
                  <p className="text-[11px] text-ink-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex gap-8 border-b border-line overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                tab === t ? 'border-clay-500 text-clay-500' : 'border-transparent text-ink-muted hover:text-ink'
              }`}
            >
              {t === 'Reviews' ? `Reviews (${product.reviews})` : t}
            </button>
          ))}
        </div>
        <div className="py-6 max-w-2xl text-ink-muted leading-relaxed text-sm">
          {tab === 'Description' && <p>{product.description}</p>}
          {tab === 'Details' && (
            <ul className="grid sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k} className="flex justify-between border-b border-line/70 pb-2">
                  <span className="font-medium text-ink">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          )}
          {tab === 'Shipping & Returns' && (
            <p>Free shipping on all orders over $100. Delivered within 5–10 business days. Return within 30 days for a full refund if unused and in original packaging.</p>
          )}
          {tab === 'Reviews' && (
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size={18} />
              <span>Based on {product.reviews} verified reviews.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
