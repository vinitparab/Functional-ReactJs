import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
   
    setemail("")
    setpassword("")
  }
  return (
    

    
    <>
    <div className='flex items-center justify-center border-2 w-screen h-screen bg-black'>
        <div className='border-2 border-white-600  rounded  p-20 bg-emerald-600' >
            <form onSubmit={(e)=>{
                  submitHandler(e)

                }} 
            className=' gap-5 flex flex-col items-center justify-center'>
                <input
                value={email} 
                onChange={(e)=>{
                  setemail(e.target.value)
                }} 
                required type="email" placeholder='Enter your email' className='outline-none bg-transparent border-2 border-black text-xl py-2 px-3 rounded-full placeholder:text-white'/>
                <input
                value={password} 
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                 required type="password" placeholder=' Enter Password' className=' outline-none bg-transparent border-black border-2  text-xl py-2 px-3 rounded-full placeholder:text-white text-yellow' />
                <button className=' mt-5 outline-none bg-transparent border-2 border-black text-xl py-2 px-3 rounded text-white'>Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login