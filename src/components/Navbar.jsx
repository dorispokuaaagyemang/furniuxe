import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, User, ShoppingCart, Sofa, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/shop', label: 'Categories' },
  { to: '/about', label: 'About Us' },
  { to: '/inspiration', label: 'Inspiration' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-line">
      <div className="container-px h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <Sofa className="text-clay-500" size={24} />
          Furniuxe
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((l, i) => (
            <NavLink
              key={l.label + i}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-clay-500 transition-colors ${isActive ? 'text-clay-500' : 'text-ink'}`
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden sm:flex text-ink hover:text-clay-500 transition-colors">
            <Search size={20} />
          </button>
          <Link to="/login" aria-label="Account" className="hidden sm:flex text-ink hover:text-clay-500 transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative text-ink hover:text-clay-500 transition-colors">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-clay-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden container-px pb-4 flex flex-col gap-3 text-sm font-medium border-t border-line pt-4">
          {links.map((l, i) => (
            <NavLink key={l.label + i} to={l.to} onClick={() => setOpen(false)} className="py-1">
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
