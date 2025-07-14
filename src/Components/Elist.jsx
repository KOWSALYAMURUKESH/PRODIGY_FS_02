import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function EList() {
   
 const location = useLocation();
  const [employeeList, setEmployeeList] = useState(() => {
    const stored = localStorage.getItem("employeeList");
    return stored ? JSON.parse(stored) : location.state?.employeeList || [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
  }, [employeeList]);

  function handleDelete(index) {
    const updatedList = employeeList.filter((_, i) => i !== index);
    setEmployeeList(updatedList);
    toast.success("Employee deleted successfully");
  }

  function handleEdit(index) {
    setEditIndex(index);
  }

  function handleChange(e, field, index) {
    const updated = [...employeeList];
    updated[index][field] = e.target.value;
    setEmployeeList(updated);
  }

  function handleBlur() {
    setEditIndex(null);
    toast.success("Employee updated successfully");
  }



    return(
        <div className="flex flex-col items-center justify-center mt-10 w-full   ">
            <table  className=" min-w-[800px] text-center table-auto border border-collapse border-gray-400 text-sm overflow-x-auto  ">
               <thead>
                <tr className="bg-gray-200  ">
                    <th className="py-3  border border-gray-400 ">S.No</th>
                    <th className="py-3  border border-gray-400">Employee Name</th>
                    <th className="py-3 border border-gray-400 ">Employee ID</th>
                    <th className="py-3  border border-gray-400 ">Age</th>
                    <th className="py-3  border border-gray-400 ">Date of joining</th>
                    <th className="py-3 border border-gray-400 ">Phone Number</th>
                    <th className="py-3 border border-gray-400 ">Email ID</th>
                    <th className="py-3 border border-gray-400 ">Salary</th>
                    <th className="py-3 border border-gray-400 ">Action</th>

                </tr>
               </thead>
               <tbody>
                 {employeeList.map((emp, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{index + 1}</td>
              {["name", "id", "age", "doj", "phone", "email", "salary"].map(
                (field) => (
                  <td key={field} className="border border-gray-400 p-2">
                    {editIndex === index ? (
                      <input
                        className="w-full border px-1"
                        value={emp[field]}
                        onChange={(e) => handleChange(e, field, index)}
                        onBlur={handleBlur}
                      />
                    ) : (
                      emp[field]
                    )}
                  </td>
                )
              )}
                    
                    
                    
                    
                    <td className="flex justify-center py-1 border  border-gray-400 ">
                        <button className="bg-blue-600 text-white px-4  rounded mr-5 my-2 cursor-pointer"
                        onClick={() => handleEdit(index)}>
                        Edit
                        </button>
                        
                        <button className="bg-red-600 text-white px-4 my-2 rounded cursor-pointer" id="delete" onClick={()=> handleDelete(index)}>Delete</button>
                        
                    </td>
                </tr>
                ))}
                
               </tbody>
            </table>
            

        <ToastContainer position="top-right" autoClose={2000} />

        </div>

















    )
}
export default EList;
