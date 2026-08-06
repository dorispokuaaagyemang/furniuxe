import { Star } from 'lucide-react'

export default function StarRating({ rating = 0, reviews, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={size}
            className={n <= Math.round(rating) ? 'fill-clay-500 text-clay-500' : 'fill-line text-line'}
          />
        ))}
      </div>
      {reviews != null && <span className="text-xs text-ink-muted">({reviews})</span>}
    </div>
  )
}
