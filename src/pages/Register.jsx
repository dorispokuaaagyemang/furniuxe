import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="container-px py-16 flex justify-center">
      <div className="w-full max-w-md bg-white border border-line rounded-xl2 p-8">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <p className="text-sm text-ink-muted mt-1">Join us today!</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="text-sm font-medium block mb-1.5">Full Name</label>
            <input required className="input-field" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Email Address</label>
            <input required type="email" className="input-field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Password</label>
            <input required type="password" className="input-field" placeholder="••••••••" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Confirm Password</label>
            <input required type="password" className="input-field" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Create Account</button>
        </form>

        <p className="text-sm text-ink-muted text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-clay-500 font-medium">Login</Link>
        </p>
      </div>
    </div>
  )
}
