import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { id: 'accent-chair', name: 'Modern Accent Chair', color: 'Beige', price: 299, qty: 1, image: '/images/products/accent-chair.jpg' },
    { id: 'oak-dining-table', name: 'Oak Dining Table', size: '160cm', price: 699, qty: 1, image: '/images/products/oak-dining-table.jpg' },
    { id: 'coffee-table', name: 'Round Coffee Table', color: 'Natural', price: 249, qty: 1, image: '/images/products/coffee-table.jpg' },
  ])

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { ...product, qty }]
    })
  }

  function updateQty(id, qty) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)).filter((i) => i.qty > 0),
    )
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = { items, addToCart, updateQty, removeItem, subtotal, count }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
