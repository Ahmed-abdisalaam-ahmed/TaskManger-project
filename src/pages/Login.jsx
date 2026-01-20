import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../lib/Auth';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async(event) =>{
    event.preventDefault();

    setIsLoading(true)
    setError(null)

    try {
      await signIn(email,password)
      toast.success(`Welcome back!`);
      navigate('/')
    } catch (error) {
      setError(error.message || "Failed to sign in . Please check your credentials.")
      console.log('error',error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
            <div className="w-full sm:max-w-md">  
        {/* title info */}
        <div className='flex flex-col items-center mb-4'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-slate-100'>Wellcome back</h2>
          <p className='text-lg text-gray-400'>Enter your details to register</p>
        </div>

      {/* form info  */}
        <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
 rounded-lg shadow-md p-8'>

          {
            error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )
          }

          <form onSubmit={handleSubmit}>
            {/* email */}
           <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-400 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-500 dark:text-slate-200 "
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-400 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-500 dark:text-slate-300 "
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-slate-950 hover:bg-slate-700 text-white dark:bg-slate-950 font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200
              disabled:cursor-not-allowed disabled:bg-slate-500"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}

            </button>
            {/* if is have an Account */}
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="dark:text-slate-100 hover:text-slate-500 text-slate-900 font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login