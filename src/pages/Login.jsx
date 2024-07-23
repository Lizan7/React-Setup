import React from 'react'
import mainlogo from '../assets/logo.png'
import smallogo from '../assets/logo1.png'

const Login = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src={smallogo} alt="Logo" className="h-24" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">Log in to your account</h2>
          <p className="text-gray-600 mb-6 text-center">Welcome back! Please enter your details.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
