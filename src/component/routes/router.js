import React from 'react';
import { Routes ,Route} from "react-router-dom";
import AddEmployee from "../addEmployee/addEmployee";
import AddDepartment from "../addDepartment/addDepartment";
import DeleteDepartment from "../deleteDepartment/deleteDepartment";
import Header from "../header/header";

function Routers(props) {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/add-employee" element={<AddEmployee/>}/>
                <Route path='/add-department' element={<AddDepartment/>} />
                <Route path='/delete-department' element={<DeleteDepartment/>} />
            </Routes>
        </div>
    );
}

export default Routers;