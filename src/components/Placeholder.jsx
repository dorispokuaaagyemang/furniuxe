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

export default function Placeholder({ icon = 'chair', tone = 0, className = '' }) {
  const Icon = ICONS[icon] || Armchair
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${TONES[tone % TONES.length]} ${className}`}
    >
      <Icon className="w-1/4 h-1/4 text-ink/25" strokeWidth={1.25} />
    </div>
  )
}
