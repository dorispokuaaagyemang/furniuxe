import { Link } from 'react-router-dom'
import { Sofa, Facebook, Instagram, Twitter, Phone, MessageCircle, Mail } from 'lucide-react'

const phoneNumber = '+18881234567'
const email = 'support@furniuxe.com'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="container-px py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Sofa className="text-clay-400" size={22} />
            Furniuxe
          </Link>
          <p className="text-sm text-cream/60 mt-4 leading-relaxed">
            Premium quality furniture that blends comfort, style and functionality for modern living.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay-500 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-cream/60">
            <li><Link to="/shop" className="hover:text-clay-400">Living Room</Link></li>
            <li><Link to="/shop" className="hover:text-clay-400">Bedroom</Link></li>
            <li><Link to="/shop" className="hover:text-clay-400">Dining Room</Link></li>
            <li><Link to="/shop" className="hover:text-clay-400">Office</Link></li>
            <li><Link to="/shop" className="hover:text-clay-400">Outdoor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-cream/60">
            <li><Link to="/about" className="hover:text-clay-400">About Us</Link></li>
            <li><Link to="/inspiration" className="hover:text-clay-400">Inspiration</Link></li>
            <li><Link to="/contact" className="hover:text-clay-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-cream/60">
            <li>Kotwi, Kumasi- Ashanti Region</li>
            <li className="flex items-center gap-4">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-1.5 hover:text-clay-400">
                <Phone size={14} /> Call
              </a>
              <a
                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-clay-400"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-clay-400">
                <Mail size={14} /> {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Furniuxe. All rights reserved.
      </div>
    </footer>
  )
}
