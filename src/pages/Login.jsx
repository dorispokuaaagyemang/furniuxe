import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [getinput, setGetInput] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  const formHandler = (e) => {
    setGetInput((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // look up the users saved during registration
    const users = JSON.parse(localStorage.getItem('users')) || []

    const matchedUser = users.find(
      (user) => user.email === getinput.email && user.password === getinput.password
    )

    if (!matchedUser) {
      setError("Incorrect email or password")
      return
    }

    setError("")
    login(matchedUser)
    navigate('/')
  }

  return (
    <div className="container-px py-16 flex justify-center">
      <div className="w-full max-w-md bg-white border border-line rounded-xl2 p-8">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-ink-muted mt-1">Welcome back! Please login to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email Address</label>
            <input required type="email" className="input-field" id="email" value={getinput.email} placeholder="you@example.com"
            onChange={formHandler} />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium block mb-1.5">Password</label>
            <input required type="password" className="input-field" id="password" value={getinput.password} placeholder="••••••••"
            onChange={formHandler} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-ink-muted">
              <input type="checkbox" className="accent-clay-500 w-4 h-4 rounded" /> Remember me
            </label>
            <a href="#" className="text-clay-500 font-medium">Forgot password?</a>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
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
