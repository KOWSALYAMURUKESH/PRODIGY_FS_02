
import {  useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    
    return(
        <div className="flex flex-col items-center justify-center  sm: p-10 sm: mt-24 ">
          
          <h1 className="text-center font-bold text-4xl w-full m-10">Welcome to Employee Management System</h1>
          <p className="text-center" >Here Employee Management System built using  React.js and TailwindCSS </p>
            <p className="mt-5 text-center" >Here use <span className="text-orange-500 font-bold">Employee Name : Admin </span> <span className="text-blue-800 font-bold" >  Employee ID : 1111 </span> to login</p> 
           <button className="p-2 rounded-full bg-green-600 text-white w-1/2 font-bold text-xl hover:bg-green-700 transition duration-300 mt-5" onClick={() => navigate( "/login") }>
            login
           </button>
          
        </div>
    )
    
}
export default Home;
