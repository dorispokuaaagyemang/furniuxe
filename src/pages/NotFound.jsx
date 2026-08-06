import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-px py-24 text-center">
      <p className="label-eyebrow">404</p>
      <h1 className="text-3xl font-semibold mt-3">Page not found</h1>
      <p className="text-ink-muted mt-2">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-6 inline-flex">Back to Home</Link>
    </div>
  )
}
