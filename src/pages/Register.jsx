import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
 const [getinput, setGetInput]= useState (
  {name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState("")

  const formHandler = (e)=> {
    if(e.target.id === "name"){
      setGetInput((prev)=>({...prev, name: e.target.value}))
      return
    } else if (e.target.id === "password"){
      setGetInput((prev)=>({...prev, password: e.target.value}))
      return 
    } else if (e.target.id === "confirmPassword"){
      setGetInput((prev)=>({...prev, confirmPassword: e.target.value}))
      return 
    } else if (e.target.id === "email"){
       setGetInput((prev)=>({...prev, email: e.target.value}))
       return
    } 
    return
  }


  function handleSubmit(e) {
    e.preventDefault()

    if (getinput.password !== getinput.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // read the users we've saved so far (none yet if this is the first signup)
    const users = JSON.parse(localStorage.getItem('users')) || []

    const alreadyExists = users.some((user) => user.email === getinput.email)
    if (alreadyExists) {
      setError("An account with this email already exists")
      return
    }

    // add the new user to the list and save it back to the browser
    users.push(getinput)
    localStorage.setItem('users', JSON.stringify(users))

    setError("")
    navigate('/login')
  }

  return (
    <div className="container-px py-16 flex justify-center">
      <div className="w-full max-w-md bg-white border border-line rounded-xl2 p-8">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <p className="text-sm text-ink-muted mt-1">Join us today!</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label htmlFor='name'  className="text-sm font-medium block mb-1.5">Full Name</label>
            <input required className="input-field" id='name' value={getinput.name} name='name' placeholder="Jane Doe" 
            onChange={formHandler} />
          </div>
          <div>
            <label htmlFor='email' className="text-sm font-medium block mb-1.5">Email Address</label>
            <input required type="email"  value={getinput.email} className="input-field" id='email' name='email' placeholder="you@example.com"
            onChange={formHandler} />
          </div>
          <div>
            <label htmlFor='password' className="text-sm font-medium block mb-1.5">Password</label>
            <input required type="password" className="input-field" id='password' name='password' value={getinput.password} placeholder="••••••••"
            onChange={formHandler} />
          </div>
          <div>
            <label htmlFor='confirmPassword' className="text-sm font-medium block mb-1.5">Confirm Password</label>
            <input required type="password" id="confirmPassword" value={getinput.confirmPassword} name='confirmPassword' className="input-field" placeholder="••••••••"
            onChange={formHandler} />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button  type="submit" className="btn-primary w-full">Create Account</button>
        </form>

        <p className="text-sm text-ink-muted text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-clay-500 font-medium">Login</Link>
        </p>
      </div>
    </div>
  )
}
