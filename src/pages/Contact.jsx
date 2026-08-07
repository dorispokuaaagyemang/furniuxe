import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'

const info = [
  { icon: MapPin, label: 'Address', value: 'Kotwi, Kumasi- Ashanti Region' },
  { icon: Phone, label: 'Phone', value: '+233257624221' },
  { icon: Mail, label: 'Email', value: 'support@furniuxe.com' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: 10:00 AM - 4:00 PM' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-10">Contact Us</h1>

      <div className="grid lg:grid-cols-[340px_1fr] gap-12">
        <div>
          <h2 className="font-semibold text-lg mb-2">Get in Touch</h2>
          <p className="text-sm text-ink-muted mb-6">We'd love to hear from you. Reach out to us for any questions or support.</p>
          <ul className="space-y-6">
            {info.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-clay-50 flex items-center justify-center shrink-0">
                  <item.icon size={17} className="text-clay-500" />
                </span>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-ink-muted whitespace-pre-line mt-0.5">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-line rounded-xl2 p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full Name" className="input-field" />
            <input required type="email" placeholder="Email Address" className="input-field" />
          </div>
          <input required placeholder="Subject" className="input-field" />
          <textarea required placeholder="Message" rows={6} className="input-field resize-none" />
          <button type="submit" className="btn-primary">Send Message</button>
          {sent && <p className="text-sm text-sage-500 font-medium">Thanks — your message has been sent!</p>}
        </form>
      </div>
    </div>
  )
}
