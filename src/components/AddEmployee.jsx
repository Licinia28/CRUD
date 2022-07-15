import React from "react";
import '../components/AddEmployee.css'

const AddEmployee = ({ setFirstname, setLastname, setEmail, addEmployee}) => {
    return (
        <div className="addEmp">
            <h1>Add employee</h1>
            <div className="inputs">
                <label htmlFor="firstname">FirstName:</label><br></br>
                <input type="text" placeholder="" id="fname" onChange={e => setFirstname(e.target.value)} /><br></br><br></br>
            </div>

            <div className="inputs">
                <label htmlFor="lastname">Lastname:</label><br></br>
                <input type="text" placeholder="" id="" onChange={e => setLastname(e.target.value)} /><br></br><br></br>
            </div>

            <div className="inputs">
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" placeholder="" id="email" onChange={e => setEmail(e.target.value)} /><br></br><br></br>
            </div>

            <button onClick={addEmployee} className="add">Add Employee</button>
        </div>
    )
}

export default AddEmployee;

