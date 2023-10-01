import { Link } from "react-router-dom";


const Register = () => {

   const handleRegister =() =>{
    e.preventDefault();
    const email = e.target.emali.value ;
    const password = e.target.password.value ;
    console.log(email,password) ;
   }
    return (
        <div>
        <h1  className="text-center text-3xl font-bold text-teal-500">Please Registration</h1>

        <div className="text-center mt-7 max-auto max-h-screen-xl">
            <form onSubmit={handleRegister}>

                <input className="border-2 mb-2 px-20 py-2" type="text" name='name' placeholder="Your name" ></input><br></br>

                <input  className="border-2 px-20 mb-2 py-2"  type="email" name='email' placeholder="Your email" ></input><br></br>

                <input  className="border-2 px-20  py-2"  type="password" name='password' placeholder="Your password" ></input><br></br>

                <input value='register' type="submit" className="border-2 mt-5 bg-teal-800 text-white px-20 rounded-lg py-2" ></input>

             

            </form>
            <p className="mt-4">Already have an account? Please<br></br> <Link to='/'><button className="border-2 mt-5 bg-teal-800 text-white px-7 rounded-lg text-sm  py-2"  >Login</button></Link></p>
           

          
        </div>
    </div>
    );
};

export default Register;