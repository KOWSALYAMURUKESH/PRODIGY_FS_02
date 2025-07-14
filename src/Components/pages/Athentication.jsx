import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Athentication() {

    
 
    const Navigate = useNavigate();
    const [ename, setEname] = useState("");
    const [error, setError] = useState(true)
    const [eid, setEid] = useState("")
    const [users, setUsers] = useState([
        {
            username: "Admin",
            password: "1111"
        }
    ]);

    function handleEname(evt) {
        setEname(evt.target.value)

    }

    function handleEid(evt) {
        setEid(evt.target.value)


    }
    function handleLogin(evt) {
        evt.preventDefault();
        
        let userfound = false;
        users.forEach(function (item) {
            if (item.username === ename && item.password === eid) {
                userfound = true;
                console.log("login Successfull")
                Navigate("/employeelist",users)
                console.log(users)
                localStorage.setItem("isLoggedIn", "true"); 
            }
        });
        if (userfound === false) {
            console.log("Login failed")
            setError(false);
            console.log(users)
            console.log("Entered:", ename, eid)
            


        }
    }






    return (
        <div className="flex flex-col items-center justify-center mt-32 ">

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/4 md:w-1/3 lg:1/3">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="Employee Name">
                            Employee Name
                        </label>
                        <input className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline" id="username" type="text" placeholder="Employee Name" value={ename} onChange={handleEname} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Employee ID" >
                            Employee ID
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:shadow-outline" id="password" type="password" placeholder="****" value={eid} onChange={handleEid} />
                    </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 w-full rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
                                Sign In
                            </button>
                        </div>
                        {error ?
                            <p className="text-center mt-3 font-bold">Employees are only able to login</p> : <p className="text-center font-bold mt-3 text-red-600">Please provide valid Employee name and ID</p>}
                    


                </form>

            </div>

        </div>

    );

}
export default Athentication;
