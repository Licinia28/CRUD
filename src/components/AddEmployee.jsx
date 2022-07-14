import React from "react";
import '../components/AddEmployee.css'

const AddEmployee = ({ setFirstname, setLastname, setEmail, addEmployee}) => {
    return (
        <div className="AddEmployee">
            <h1>Add employee</h1>
            <div className="inputs">
                <label htmlFor="firstname">FirstName:</label>
                <input type="text" placeholder="" id="fname" onChange={e => setFirstname(e.target.value)} />
            </div>

            <div className="inputs">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" placeholder="" id="lname" onChange={e => setLastname(e.target.value)} />
            </div>

            <div className="inputs">
                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="" id="email" onChange={e => setEmail(e.target.value)} />
            </div>

            <button onClick={addEmployee}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;

