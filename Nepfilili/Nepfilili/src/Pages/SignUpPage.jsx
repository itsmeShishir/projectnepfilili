import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try{
                await axios.post("http://localhost:8000/signup", {
                    email,password
                })

        }
        catch(e){
            console.log(e);
        
    }

  return (

    <div>
        <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
            
            <div className='bg-gray-100 flex shadow-lg p-5 max-w-3xl'>

                <div className='w-1/2 px-10'>
                    <h2 className='font-bold flex justify-center text-2xl'>Sign Up</h2>

                    <form onSubmit={handleSubmit} action="POST" className='flex flex-col gap-5'>
                        <input id='' type="text" name='name' placeholder='Name' className='p-2 mt-10 rounded-xl border' onChange={(e)=> setName(e.target.value)}/>

                        <input id='' type="text" name='username' placeholder='Username' className='p-2 rounded-xl border' onChange={(e)=> setName(e.target.value)}/>

                        <input id='' type="text" name='username' placeholder='Address' className='p-2 rounded-xl border' onChange={(e)=> setName(e.target.value)}/>

                        <input id='' type="password" className='p-2 rounded-xl border' name='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                        
                        <input id='' type="tel" name='number' placeholder='Phone Number' className='p-2 rounded-xl border' onChange={(e)=> setName(e.target.value)}/>

                        <input id='' type="text" className='p-2 rounded-xl border' name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />

                        <input id='' type="password" className='p-2 rounded-xl border' name='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                        

                        <button className='bg-[#6d757a] rounded-full text-white py-2 mt-3 hover:scale-105 duration-300'>Create Account</button>
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