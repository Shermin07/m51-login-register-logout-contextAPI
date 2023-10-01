import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Home = () => {
    return (
        <div  className="text-center text-3xl font-bold ">
           <div className="flex-end"> <Navber></Navber></div>
         <Outlet></Outlet>   
        </div>
    );
};

export default Home;