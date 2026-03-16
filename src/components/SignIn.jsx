import React from 'react'

const SignIn = ({ setToggle }) => {
  return (
    <div className="h-[550px] w-[550px]  flex flex-col p-5 gap-4 shadow-2xl shadow-black/70 rounded-3xl">
      <h1 className="text-5xl font-bold text-center">Welcome back</h1>
      <h5 className="text-xl font-light text-center">Sign in to your account</h5>

      {/* Use onSubmit so browser validation runs for required fields */}
      <form className="flex flex-col gap-4 px-5" onSubmit={(e) => e.preventDefault()}>
        <label className="text-xl font-bold" htmlFor="email">Email</label>
        <input
          required
          className="border p-2 rounded-2xl px-5 h-[60px]"
          type="email"
          placeholder="you@example.com"
          name="email"
        />

        <label className="text-xl font-bold" htmlFor="password">Password</label>
        <input
          required
          className="border p-2 rounded-2xl px-5 h-[60px]"
          type="password"
          placeholder="......"
          name="password"
        />

        <button type="submit" className="bg-[#0f172b] text-white h-[70px] text-xl font-bold rounded-3xl">
          Sign in
        </button>

        <h1 className="text-center text-xl">
          Don&apos;t have an account?{' '}
          <button className="font-semibold text-[#0f172b]" onClick={() => setToggle((prev) => !prev)}>
            Sign up
          </button>
        </h1>
      </form>
    </div>
  )
}

export default SignIn
