/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";


const Login = () => {

 const handleLogin = () =>{
    e.preventDefault();
    const email = e.target.emali.value ;
    const password = e.target.password.value ;
    console.log(email,password) ;
 }
    


    return (
     <div >
            <h1 className="text-center text-3xl font-bold text-blue-600">Please Login</h1>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleLogin} >
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered required" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered required" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>

       <p >New here? Please <Link to='/register' className="" ><button className="px-4 rounded-xl py-3 text-white bg-blue-700 mt-3 text-lg">Register</button></Link></p>
      </div>
    </div>
  </div>
</div>
           
        </div>
        
    );
};

export default Login;