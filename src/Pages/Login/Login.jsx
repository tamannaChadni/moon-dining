import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoDuotone } from "react-icons/pi";
import login from '../../../public/login.avif'
import { Helmet } from 'react-helmet-async';


const Login = () => {

  const {signInUser,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        setLoginError("");
        setLoginSuccess("");


        signInUser(email,password)
        .then(result=>{
          console.log(result);
          navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
          console.log(error);
        })
       
    }

    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    const handleGithubSignIn = () =>{
      signInWithGithub()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.log(error);
      })
    }

    

    return (
        <div className='container mx-auto'>
          <Helmet>
      <title>Moon Dining | Login Page</title>
    </Helmet>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img src={login} alt="" />
     
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className=' space-x-5 mt-3 ml-8'>
            <button onClick={handleGoogleSignIn} className='btn btn-sm'><FcGoogle />Google Login</button>
            <button onClick={handleGithubSignIn} className='btn btn-sm'><PiGithubLogoDuotone />GitHub Login</button>
        </div>
        <div className="divider">OR</div>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        
        <div className="form-control mt-6">
          <button className="btn  bg-red-600 text-white">Login</button>
        </div>
        <p>If you new here then please, <span className='text-red-400'><Link to="/register">registrate</Link></span> first</p>
      </form>
      {
            loginError && <p className=" text-red-600">{loginError}</p>
        }
        {
            loginSuccess && <p className=" text-green-600">{loginSuccess}</p>
        }
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;