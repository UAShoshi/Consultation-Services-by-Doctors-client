import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Register = () => {
  const { createUser } = useContext(AuthContext)


  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div>
    <h1 className="text-3xl font-semibold text-center mb-5">Register your account</h1>
  <div className="shadow-2xl bg-base-100">
    <form onSubmit={handleRegister} className="card-body md:w-2/3 lg: w-2/3 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Your Name</span>
        </label>
        <input type="text" name="name" placeholder="Enter your name" className="input bg-base-200" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Photo URL</span>
        </label>
        <input type="text" name="photo URL" placeholder="Enter your photo URL" className="input bg-base-200" required />
      </div>
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
        <button className="btn bg-info font-bold text-white">Register</button>
      </div>
    </form>
    <p className="text-center">Already Have An Account ?<Link to="/login" className="text-[#F61414] font-semibold"> Login</Link></p>
  </div>
    </div>
  );
};

export default Register;