import React from "react";
import '../components/EmployeeList.css'
import '../components/AddEmployee.css'

const EmployeeList = ({ employees, deleteEmployee, updateEmployee }) => {
    return (
        <div className="tbl">
            <h2>Employees List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (
                            (
                               <tr key={employee.id}>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td><button onClick={()=> updateEmployee(employee.id)} className="btn">Edit</button><button onClick={()=> deleteEmployee(employee.id)} className="btn-del">Delete</button></td>
                               </tr> 
                            )
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;