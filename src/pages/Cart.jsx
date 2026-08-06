import { Link } from 'react-router-dom'
import { Minus, Plus, X, ArrowLeft } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart()
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 25
  const tax = 0
  const total = subtotal + shipping + tax

  return (
    <div className="container-px py-10">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
      <h1 className="text-3xl font-semibold mt-3 mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-ink-muted">Your cart is empty.</p>
          <Link to="/shop" className="btn-primary mt-6 inline-flex">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] text-xs uppercase tracking-wide text-ink-muted font-medium pb-3 border-b border-line">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span />
            </div>

            <ul>
              {items.map((item, i) => (
                <li
                  key={item.id}
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 py-5 border-b border-line"
                >
                  <div className="flex items-center gap-4 col-span-2 md:col-span-1">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <Placeholder icon="chair" tone={i} className="w-full h-full" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      {item.color && <p className="text-xs text-ink-muted mt-0.5">Color: {item.color}</p>}
                      {item.size && <p className="text-xs text-ink-muted mt-0.5">Size: {item.size}</p>}
                    </div>
                  </div>

                  <span className="text-sm text-ink-muted hidden md:block">${item.price.toFixed(2)}</span>

                  <div className="hidden md:inline-flex items-center border border-line rounded-md w-fit">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-cream-soft"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-cream-soft"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <span className="text-sm font-semibold hidden md:block">${(item.price * item.qty).toFixed(2)}</span>

                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="text-ink-muted hover:text-clay-500 justify-self-end"
                  >
                    <X size={18} />
                  </button>

                  {/* Mobile row for qty/price */}
                  <div className="md:hidden flex items-center justify-between col-span-2">
                    <div className="inline-flex items-center border border-line rounded-md w-fit">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 flex items-center justify-center">
                        <Minus size={13} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center">
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-clay-500 mt-6">
              <ArrowLeft size={15} /> Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="bg-white border border-line rounded-xl2 p-6 h-fit">
            <h2 className="font-semibold text-lg mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-ink-muted">
                <span>Subtotal</span>
                <span className="text-ink font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-ink-muted">
                <span>Shipping</span>
                <span className="text-ink font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-ink-muted">
                <span>Tax</span>
                <span className="text-ink font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-3 border-t border-line">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary w-full mt-6">Proceed to Checkout</Link>
            <p className="text-xs text-ink-muted text-center mt-4">We accept Visa, Mastercard, PayPal & Google Pay</p>
          </div>
        </div>
      )}
    </div>
  )
}
