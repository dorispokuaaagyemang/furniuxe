import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import Placeholder from './Placeholder.jsx'
import StarRating from './StarRating.jsx'

export default function ProductCard({ product, tone = 0 }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-xl2 bg-white border border-line/70 overflow-hidden hover:shadow-lift transition-shadow"
    >
      <div className="relative aspect-square">
        <Placeholder src={product.image} alt={product.name} icon="chair" tone={tone} className="w-full h-full" />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 text-ink text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart size={15} className="text-ink" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm text-ink">{product.name}</h3>
        <p className="text-clay-500 font-semibold mt-1">${product.price.toFixed(2)}</p>
        <div className="mt-2">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </Link>
  )
}
