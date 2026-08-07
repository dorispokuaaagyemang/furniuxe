import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Truck, ShieldCheck, RotateCcw, Headset } from 'lucide-react'
import Placeholder from '../components/Placeholder.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On all orders over $100' },
  { icon: ShieldCheck, title: '2 Years Warranty', desc: 'Quality you can trust' },
  { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
  { icon: Headset, title: '24/7 Support', desc: "We're here to help" },
]

const popularPicks = products.slice(0, 4)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container-px pt-8">
        <div className="relative rounded-xl2 overflow-hidden">
          <div className="grid lg:grid-cols-2 bg-white">
            <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-24">
              <span className="label-eyebrow">Style Meets Comfort</span>
              <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] mt-4 text-ink">
                Modern Furniture
                <br /> For Every Home
              </h1>
              <p className="text-ink-muted mt-5 max-w-md leading-relaxed">
                Discover premium quality furniture that blends comfort, style and functionality. Designed for modern living.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/shop" className="btn-primary">Shop Now</Link>
                <Link to="/shop" className="btn-secondary">Explore Collections</Link>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-0">
              <Placeholder src="/images/hero/hero.jpg" alt="Modern living room with a beige sofa" icon="sofa" tone={0} className="w-full h-full" />
              <button
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white"
              >
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-clay-500' : 'bg-white/70'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-px mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-line py-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <f.icon className="text-clay-500 shrink-0" size={26} strokeWidth={1.5} />
              <div>
                <p className="font-medium text-sm text-ink">{f.title}</p>
                <p className="text-xs text-ink-muted mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container-px mt-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Shop by Category</h2>
          <Link to="/shop" className="text-sm font-medium text-clay-500 flex items-center gap-1 hover:gap-2 transition-all">
            View all categories <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group rounded-xl2 overflow-hidden border border-line/70 bg-white hover:shadow-lift transition-shadow"
            >
              <Placeholder
                src={cat.image}
                alt={cat.name}
                icon={['sofa', 'bed', 'table', 'chair', 'plant'][i % 5]}
                tone={i}
                className="aspect-[4/3]"
              />
              <div className="p-4">
                <p className="font-medium text-sm">{cat.name}</p>
                <p className="text-xs text-ink-muted mt-0.5">{cat.count} Items</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Picks */}
      <section className="container-px mt-16 mb-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Popular Picks</h2>
          <Link to="/shop" className="text-sm font-medium text-clay-500 flex items-center gap-1 hover:gap-2 transition-all">
            View all products <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {popularPicks.map((p, i) => (
            <ProductCard key={p.id} product={p} tone={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
