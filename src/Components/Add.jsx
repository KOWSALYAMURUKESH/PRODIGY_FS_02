import {  useNavigate } from "react-router-dom";


function Add(){

 const Navigate = useNavigate();
    return(
        <div className="flex items-center justify-center">
            <button className="p-2 rounded-full bg-green-600 text-white  w-1/2 font-bold text-xl hover:bg-green-700 transition duration-300" onClick={() => Navigate ("/add")}>
                Add New Employee
            </button>
        </div>
    )
    
}
export default Add;
