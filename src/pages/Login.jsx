import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";



const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);


  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      const user = { email };

      axios.post('http://localhost:5000/jwt', user)
      .then(res => res.data)
    })
      .catch(error => {
        console.error(error);
       })
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result => {
      console.log(result.user);
    })
   
  }

  return (
    <div>
    <h1 className="text-3xl font-semibold text-center mb-5">Login your account</h1>
  <div className="shadow-2xl bg-base-100">
    <form onSubmit={handleLogin} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Email address</span>
        </label>
        <input type="email" name="email" placeholder="Enter your email address" className="input bg-base-200" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Password</span>
        </label>
        <input type="password" name="password" placeholder="Enter your email password" className="input bg-base-200" required />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-info font-bold text-white">Login</button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-center font-bold"> login With Google</h1>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full"><FcGoogle
        ></FcGoogle> Login With Google</button>
      </div>
    </form>
    <p className="text-center">Dont’t Have An Account ?<Link to="/register" className="text-[#F61414] font-semibold"> Register</Link></p>
  </div>
    </div>
  );
};

export default Login;