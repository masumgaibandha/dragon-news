import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const [error, setError] = useState("");
  const {signIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)
const handleLogin = (e)=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  // console.log({email, password})

  signIn(email, password)
  .then(result =>{
   const user = result.user;
  //  console.log(user);
   navigate(`${location.state? location.state : "/"}`)
  })
  .catch(error =>{
    const errorCode = error.code;
    // const errorMessage = error.message; 
    setError(errorCode)
  })
}
  return (
    <form onSubmit={handleLogin} className="container mx-auto py-5 flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email address</label>
            <input type="email" name="email" required className="input bg-base-200" placeholder="Enter your email address" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" name="password" required className="input bg-base-200" placeholder="Enter your password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="text-center pt-5 font-semibold">Dont’t Have An Account ? <Link to= '/auth/register' className="text-red-600 underline">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Login;
