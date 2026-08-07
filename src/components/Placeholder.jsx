import { useState } from 'react'
import { Sofa, Lamp, BedDouble, Armchair, TableProperties, TreePine } from 'lucide-react'

const ICONS = {
  sofa: Sofa,
  lamp: Lamp,
  bed: BedDouble,
  chair: Armchair,
  table: TableProperties,
  plant: TreePine,
}

const TONES = [
  'from-clay-100 to-cream-soft',
  'from-sage-400/20 to-cream-soft',
  'from-ink-faint/20 to-cream-soft',
]

/**
 * Renders `src` as a real image when it's provided and loads successfully.
 * Falls back to a soft gradient + icon placeholder if `src` is missing or
 * the file 404s — so you can drop images into /public/images/... at your
 * own pace without breaking any page in the meantime.
 */
export default function Placeholder({ src, alt = '', icon = 'chair', tone = 0, className = '' }) {
  const [failed, setFailed] = useState(false)
  const Icon = ICONS[icon] || Armchair

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${TONES[tone % TONES.length]} ${className}`}
    >
      <Icon className="w-1/4 h-1/4 text-ink/25" strokeWidth={1.25} />
    </div>
  )
}
