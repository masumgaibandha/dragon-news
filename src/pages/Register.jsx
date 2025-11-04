import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
  const [nameError, setNameError] = useState("")
  const {createUser, setUser, updateUser} = use(AuthContext)
  const navigate = useNavigate();

  const handleRegister = (e)=>{
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({name, photo, email, password})
    if(name.length <5){
      setNameError("Name should be more than 5 character")
      return;
    } else{
      setNameError("")
    }
    createUser(email, password)
    .then(result=> {
      const user = result.user;
      updateUser({displayName: name, photoURL: photo}).then(()=>{
        setUser({...user, displayName: name, photoURL: photo});
        navigate('/')
      }) .catch((error) =>{
        console.log(error)
        setUser(user);
      })
      
    })
    .catch(error =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    })

  }
  return (
    <form onSubmit={handleRegister} className="container mx-auto py-5 flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center">Register your account</h2>
        <div className="card-body ">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input 
            type="text" 
            name='name' 
            className="input bg-base-200" 
            placeholder="Enter your name"
            required
             />
             {nameError && <p className='text-error'>{nameError}</p>}
            <label className="label">Photo URL</label>
            <input 
            type="text" 
            name='photo' 
            className="input bg-base-200" 
            placeholder="Enter your Photo URL"
            required />

            <label className="label">Email address</label>
            <input 
            type="email" 
            name='email' 
            className="input bg-base-200" 
            placeholder="Enter your email address"
            required />

            <label className="label">Password</label>
            <input 
            type="password" 
            name='password' 
            className="input bg-base-200" 
            placeholder="Enter your password" 
            required />

            <div className='flex gap-3 pt-3'>
              <input type="checkbox"/>
              <a className="link link-hover">Accept Term & Conditions</a>
            </div>
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className="text-center pt-5 font-semibold">Already have account ? <Link to= '/auth/login' className="text-red-600 underline">Login</Link></p>
          </fieldset>
        </div>
      </div>
    </form>
  )
}

export default Register