import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Placeholder from '../components/Placeholder.jsx'

const filters = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor']

const articles = [
  { title: '10 Tips for a Cozy Living Room', date: 'May 20, 2024', read: '5 min read', icon: 'sofa' },
  { title: 'Choosing the Perfect Dining Table', date: 'May 15, 2024', read: '4 min read', icon: 'table' },
  { title: 'Bedroom Design Ideas for Better Sleep', date: 'May 10, 2024', read: '6 min read', icon: 'bed' },
  { title: 'Outdoor Furniture Care Guide', date: 'May 5, 2024', read: '3 min read', icon: 'plant' },
]

export default function Inspiration() {
  const [active, setActive] = useState('All')

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Inspiration' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-6">Inspiration & Ideas</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === f ? 'bg-clay-500 text-white' : 'bg-white border border-line text-ink-muted hover:text-ink'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((a, i) => (
          <article key={a.title} className="rounded-xl2 overflow-hidden border border-line/70 bg-white group cursor-pointer hover:shadow-lift transition-shadow">
            <Placeholder icon={a.icon} tone={i} className="aspect-[4/3]" />
            <div className="p-4">
              <h3 className="font-medium text-sm leading-snug group-hover:text-clay-500 transition-colors">{a.title}</h3>
              <p className="text-xs text-ink-muted mt-2">{a.date} · {a.read}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="btn-primary">View All Articles</button>
      </div>
    </div>
  )
}
