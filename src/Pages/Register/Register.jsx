import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash,FaRegEye  } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {

const { createUser } = useContext(AuthContext);
console.log(createUser);

  const [resgisterError, setResgisterError] = useState("");
  const [resgisterSuccess, setResgisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form submited");
    const form = new FormData(e.currentTarget);
    console.log(form.get('password'));
    
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');

    
    console.log(name, email, password, photo);

    // reset error & success message

    setResgisterError("");
    setResgisterSuccess("");

    // validation

    if (password.length < 6) {
      setResgisterError("password should be 6 character or more than that");
      return;

    }

    else if (!/[A-Z]/.test(password)) {
      setResgisterError("you password should be one upper character");
      return;
    }
     
    else if (!/[a-z]/.test(password)) {
      setResgisterError("you password should be one lower character");
      return;
    }
     
    createUser(email,password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })

    }
  

  return (
    <div className="container mx-auto">
      <Helmet>
      <title>Moon Dining | Register page</title>
    </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                   type={ showPassword ? "text" :"password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>{
            showPassword ? <FaRegEyeSlash />:<FaRegEye />
           }</span>
              </div>
              </div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn  bg-red-600 text-white">
                  Register
                </button>
              </div>
              <p>
                After finish registration,go{" "}
                <span className="text-red-400">
                  <Link to="/login">Login</Link>
                </span>{" "}
                page
              </p>
            </form>
            {
            resgisterError && <p className=" text-red-600">{resgisterError}</p>
        }
        {
            resgisterSuccess && <p className=" text-green-600">{resgisterSuccess}</p>
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
