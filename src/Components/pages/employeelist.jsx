import Add from "../Add";

import EList from "../Elist";




function EmployeeList() {
    return(
        <div className="mt-24">
            <h1 className="text-center font-bold text-4xl m-10">Employee Management System</h1>
        
         <Add></Add>

         <EList></EList>
         
        </div>
    )
    
}
export default EmployeeList;
