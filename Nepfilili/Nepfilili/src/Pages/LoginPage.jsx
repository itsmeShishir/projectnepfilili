import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function LoginPage() {
    const [data, setUser] = useState({username: "", password: ""});

    const handleChange = (e) => {
        setData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value
        }));
      };
  return (

    <div>
        <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
            
            <div className='bg-gray-100 flex shadow-lg p-5 max-w-3xl'>

                <div className='w-1/2 px-10'>
                    <h2 className='font-bold flex justify-center text-2xl mt-10'>Login</h2>

                    <form action="POST" className='flex flex-col gap-5'>
                        <input type="text" className='p-2 mt-10 rounded-xl border' name='Username' placeholder='Enter Your Username' required value={data.username} onChange={handleChange} />
                     
                        <input type="password" className='p-2 rounded-xl border' name='password' placeholder='Enter Your Password' required value={data.password} onChange={handleChange}/>

                        <button className='bg-[#6d757a] rounded-full text-white py-2 mt-5 hover:scale-105 duration-300'>Login</button>
                    </form>

                    <p className='mt-10 text-base border-b items-center justify-center py-4 hover:text-red-500 cursor-pointer'>Forgot Your Password?</p>

                    <div>
                        <p></p>
                    </div>
                    <div className='text-sm flex justify-center'>
                        <Link to="/signup"
                        className='py-2 px-5 bg-white border rounded-full mt-20 hover:scale-105 duration-300'>
                            Create Your Account
                        </Link>
                    </div>

                    
                </div>

                <div className='w-1/2'>
                    <img src="/src/Images/sidepic.jpg" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default LoginPage