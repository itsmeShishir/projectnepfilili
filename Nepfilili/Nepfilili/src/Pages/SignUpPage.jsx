import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUpPage() {
    const [data, setData] = useState({name: "", username:"", email:"", address:"", phone:"", password:""})
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
                    <h2 className='font-bold flex justify-center text-2xl'>Sign Up</h2>

                    <form action="POST" className='flex flex-col gap-5'>
                        <input onChange={handleChange} id='name' type="text" name='name' value={data.name} placeholder='Name' className='p-2 mt-10 rounded-xl border'/>

                        <input onChange={handleChange}  id='username' type="text" name='username' value={data.username} placeholder='Username' className='p-2 rounded-xl border'/>

                        <input onChange={handleChange}  id='address' type="text" name='address' value={data.address} placeholder='Address' className='p-2 rounded-xl border'/>

                        <input onChange={handleChange}  id='telephone' type="tel" name='number' value={data.address} placeholder='Phone Number' className='p-2 rounded-xl border'/>

                        <input onChange={handleChange}  id='email' type="text" className='p-2 rounded-xl border' name='email' value={data.email} placeholder='Email'/>

                        <input onChange={handleChange}  id='password' type="password" className='p-2 rounded-xl border' name='password' value={data.password} placeholder='Password'/>
                        

                        <button type='submit' className='bg-[#6d757a] rounded-full text-white py-2 mt-3 hover:scale-105 duration-300'>Create Account</button>
                    </form>

                    <div className='text-sm flex justify-center mt-6'>
                        <Link to="/login"
                        className='py-2 px-5 bg-white border rounded-full mt-4 hover:scale-105 duration-300'>
                            Login Page
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

export default SignUpPage