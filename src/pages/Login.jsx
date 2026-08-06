import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="container-px py-16 flex justify-center">
      <div className="w-full max-w-md bg-white border border-line rounded-xl2 p-8">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-ink-muted mt-1">Welcome back! Please login to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="text-sm font-medium block mb-1.5">Email Address</label>
            <input required type="email" className="input-field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Password</label>
            <input required type="password" className="input-field" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink-muted">
              <input type="checkbox" className="accent-clay-500 w-4 h-4 rounded" /> Remember me
            </label>
            <a href="#" className="text-clay-500 font-medium">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>

        <p className="text-sm text-ink-muted text-center mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-clay-500 font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
