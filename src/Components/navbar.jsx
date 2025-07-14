
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function Nav() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)


  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";




  return (
    <div>
      <nav className=" w-full fixed top-0 z-10 bg-gray-800 p-4 text-white  justify-center items-center flex-row ">

       


          <div className="hidden  md:flex gap-16 mx-auto max-w-7xl justify-center  items-center ">
            <Link className="text-2xl font-bold cursor-pointer" to={"/"}>Home</Link>


            <Link className="text-2xl font-bold cursor-pointer " to={"/employeelist"}>Employee Management List</Link>
            <Link className="text-2xl font-bold cursor-pointer" to={"/add"}>Add New Employee</Link>

          
          <div className="absolute right-4 "  >




            {!isLoggedIn ? (

              <Link to="/login" className="font-bold cursor-pointer " >Login</Link>



            ) : (



              <button className="ml-20 font-bold" onClick={() => {
                localStorage.removeItem("isLoggedIn");
                navigate("/login")


              }}>
                Logout
              </button>


            )}

          </div>

</div>


        

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

           <div className="absolute right-4 top-5"  >




            {!isLoggedIn ? (

              <Link to="/login" className="font-bold cursor-pointer " >Login</Link>



            ) : (



              <button className="ml-20 font-bold" onClick={() => {
                localStorage.removeItem("isLoggedIn");
                navigate("/login")


              }}>
                Logout
              </button>


            )}

          </div>


        </div>


        {menuOpen && (
          <div className="md:hidden text-white h-full  flex flex-row items-center w-full  gap-10  py-4">
            <Link className=" block text-sm font-bold cursor-pointer"
              to={"/"}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>


            <Link className="block text-sm font-bold cursor-pointer "
              to={"/employeelist"}
              onClick={() => setMenuOpen(false)}>
              Employee Management List
            </Link>


            <Link className="block text-sm font-bold cursor-pointer"
              to={"/add"}
              onClick={() => setMenuOpen(false)}>
              Add New Employee
            </Link>


          </div>


        )}








      </nav>


    </div>
  )
}
export default Nav;

