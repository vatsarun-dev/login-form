import React from 'react'

const SignUp = ({setToggle}) => {
  return (
    <div className="h-[650px] w-[550px]  flex flex-col  p-5 gap-4 shadow-2xl shadow-black/70 rounded-3xl">
      <h1 className="text-5xl font-bold text-center">Create Account</h1>
      <h5 className="text-xl font-light text-center">Join us Today</h5>

      {/* Use onSubmit so browser validation runs for required fields */}
      <form className="flex flex-col gap-4 px-5 " onSubmit={(e) => e.preventDefault()}>

        <label className="text-xl font-bold" htmlFor="name">FullName</label>
        <input required className="border p-2 rounded-2xl px-5 h-[60px]" type="text" placeholder="John Doe" name="name"/>

        <label className="text-xl font-bold" htmlFor="email">Email</label>
        <input required className="border p-2 rounded-2xl px-5 h-[60px]" type="email" placeholder="you@example.com" name="email" />


        <label className="text-xl font-bold" htmlFor="password">Password</label>
        <input required className="border p-2 rounded-2xl px-5 h-[60px]" type="password" placeholder="......" name="password" />

        <button  type="submit" className="bg-[#0f172b] text-white h-[70px] text-xl font-bold rounded-3xl">SignUp</button>

        <h1 className="text-center text-xl">Already have an account? <button className="font-semibold text-[#0f172b]" onClick={()=>setToggle((prev)=>!prev)}>Signin</button></h1>
      </form>
    </div>
  )
}

export default SignUp
