import { Check } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Placeholder from '../components/Placeholder.jsx'

const values = ['Premium Quality', 'Sustainable Materials', 'Timeless Design', 'Customer First']

export default function About() {
  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-10">About Us</h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="label-eyebrow">Crafting Comfort.</span>
          <h2 className="text-3xl font-semibold mt-3 leading-tight">Creating Homes.</h2>
          <p className="text-ink-muted leading-relaxed mt-5 max-w-md">
            At Furniuxe, we believe that furniture is more than just function — it's about creating spaces that inspire
            and bring people together.
          </p>
          <p className="text-ink-muted leading-relaxed mt-4 max-w-md">
            Our mission is to deliver high-quality, beautifully designed furniture that fits your lifestyle and lasts
            for years.
          </p>
          <ul className="mt-8 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3 text-sm font-medium">
                <span className="w-6 h-6 rounded-full bg-clay-50 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-clay-500" />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </div>
        <Placeholder
          src="/images/about/about.jpg"
          alt="Furniuxe workshop crafting furniture"
          icon="table"
          tone={1}
          className="rounded-xl2 aspect-[4/5] w-full"
        />
      </div>
    </div>
  )
}
