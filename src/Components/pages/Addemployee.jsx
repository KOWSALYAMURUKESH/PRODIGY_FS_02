
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        id: "",
        age: "",
        doj: "",
        phone: "",
        email: "",
        salary: ""

    });

    const [employeeList, setEmployeeList] = useState([])


    function handleChange(evt) {

        const { name, value } = evt.target;
        setEmployee({ ...employee, [name]: value })

    }

    function handleAdd() {

        const existingList = JSON.parse(localStorage.getItem("employeeList")) || [];
        const updatedlist = ([...existingList, employee]);
        setEmployeeList(updatedlist);
        

        localStorage.setItem("employeeList", JSON.stringify(updatedlist));
        setEmployee({
            name: "",
            id: "",
            age: "",
            doj: "",
            phone: "",
            email: "",
            salary: ""
        });

        navigate("/employeelist");
console.log("added")
console.log(employee)

    }




    return (
        <div className="flex flex-col items-center justify-center mt-32">

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/6 lg:w-1/3 md:w-1/3 ">
                <h2 className="text-2xl font-bold mb-4 text-center">New Employee</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 " >
                            Employee Name
                        </label>
                        <input
                            name="name"
                            className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                            type="text"
                            placeholder="Employee Name"

                            value={employee.name}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Employee ID
                        </label>
                        <input
                            name="id"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-1 focus:shadow-outline"
                            type="text"
                            placeholder="Employee ID"
                            value={employee.id}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Age
                        </label>
                        <input
                            name="age"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-1 focus:shadow-outline"
                            type="number"
                            placeholder="Employee Age"
                            value={employee.age}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Date of Joining
                        </label>
                        <input
                            name="doj"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-1 focus:shadow-outline"
                            type="text"
                            placeholder="Employee's Date of Joing"
                            value={employee.doj}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Phone number
                        </label>
                        <input
                            name="phone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:shadow-outline"
                            type="text"
                            placeholder="Employee phone number"
                            value={employee.phone}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Email ID
                        </label>
                        <input
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:shadow-outline"
                            type="email"
                            placeholder="Employee's Email ID"
                            value={employee.email}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  >
                            Salary
                        </label>
                        <input
                            name="salary"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:shadow-outline"
                            type="number"
                            placeholder="Employee salary"
                            value={employee.salary}
                            onChange={handleChange} />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 w-full rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleAdd} >
                            Save
                        </button>
                    </div>


                </form>

            </div>

        </div>
        );



}

export default AddEmployee;