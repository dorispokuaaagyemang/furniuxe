import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, ChevronDown } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { useCart } from '../context/CartContext.jsx'

const steps = [
  { id: 'shipping', title: '1. Shipping Information' },
  { id: 'payment', title: '2. Payment Method' },
  { id: 'review', title: '3. Review Your Order' },
]

export default function Checkout() {
  const { items, subtotal } = useCart()
  const [openStep, setOpenStep] = useState('shipping')
  const navigate = useNavigate()
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 25
  const total = subtotal + shipping

  function handlePlaceOrder(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Checkout' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-8">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="border border-line rounded-xl2 bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenStep(openStep === step.id ? '' : step.id)}
                className="w-full flex items-center justify-between px-6 py-4 font-semibold"
              >
                {step.title}
                <ChevronDown size={18} className={`transition-transform ${openStep === step.id ? 'rotate-180' : ''}`} />
              </button>

              {openStep === step.id && (
                <div className="px-6 pb-6">
                  {step.id === 'shipping' && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input required placeholder="Full Name" className="input-field sm:col-span-2" />
                      <input required type="email" placeholder="Email Address" className="input-field" />
                      <input placeholder="Phone Number" className="input-field" />
                      <input required placeholder="Street Address" className="input-field sm:col-span-2" />
                      <input placeholder="Apartment, suite, etc. (optional)" className="input-field sm:col-span-2" />
                      <input required placeholder="City" className="input-field" />
                      <input placeholder="State / Province" className="input-field" />
                      <input placeholder="Postal / Zip Code" className="input-field" />
                      <select className="input-field" defaultValue="United States">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Ghana</option>
                      </select>
                    </div>
                  )}

                  {step.id === 'payment' && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input placeholder="Card Number" className="input-field sm:col-span-2" />
                      <input placeholder="MM / YY" className="input-field" />
                      <input placeholder="CVC" className="input-field" />
                      <input placeholder="Name on Card" className="input-field sm:col-span-2" />
                    </div>
                  )}

                  {step.id === 'review' && (
                    <ul className="divide-y divide-line">
                      {items.map((item) => (
                        <li key={item.id} className="flex justify-between py-2 text-sm">
                          <span>{item.name} × {item.qty}</span>
                          <span className="font-medium">${(item.price * item.qty).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Order summary */}
        <aside className="bg-white border border-line rounded-xl2 p-6 h-fit">
          <h2 className="font-semibold text-lg mb-5">Order Summary</h2>
          <ul className="space-y-3 mb-4 max-h-56 overflow-y-auto pr-1">
            {items.map((item, i) => (
              <li key={item.id} className="flex items-center gap-3 text-sm">
                <div className="w-11 h-11 rounded-md overflow-hidden shrink-0">
                  <Placeholder icon="chair" tone={i} className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="font-medium leading-tight">{item.name}</p>
                  <p className="text-xs text-ink-muted">x{item.qty}</p>
                </div>
                <span className="font-medium">${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2.5 text-sm pt-3 border-t border-line">
            <div className="flex justify-between text-ink-muted">
              <span>Subtotal</span>
              <span className="text-ink font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ink-muted">
              <span>Shipping</span>
              <span className="text-ink font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-2 border-t border-line">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full mt-6">Place Order</button>
          <p className="text-xs text-ink-muted flex items-center justify-center gap-1.5 mt-3">
            <Lock size={12} /> Secure Checkout
          </p>
        </aside>
      </form>
    </div>
  )
}
