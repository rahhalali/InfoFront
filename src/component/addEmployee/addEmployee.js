import React, {useEffect, useState} from 'react';

// import { useDispatch } from "react-redux";
// import { addTodoAsync } from "../redux/employeeSlice";
// import { useForm } from "react-hook-form";

import "./addEmployee.css"
import ButtonPrimaryExample from "../Button/Button"

function AddEmployee(props) {
    const [addemployee,setEmployee]=useState(
        {
            "first_name":"",
            "phone_number":"",
            "date_of_birth":'',
            "department":{
                "id":0
            }
        }
    )
    const [department,setDepartment]=useState([]);
    useEffect( ()=>{
        const getDepartment =async () =>{
            console.log("hello");
            let department = await fetch("http://localhost:8080/api/v1/departments/",{
                method:"GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            });
            department = await department.json();
            console.log("department",department);
            setDepartment(department);
        }
        getDepartment().then(r=>{
            console.log("R",r);
        });

    },[])

    // const onChangeName = (evt)=>{
    //     setEmployee(prevState => ({
    //         ...prevState,
    //         first_name: evt.target.value,
    //     }))
    // }
    // const onChangePhone = (evt)=>{
    //     setEmployee(prevState => ({
    //         ...prevState,
    //         phone_number: evt.target.value,
    //     }))
    // }
    // const onChangeDate = (evt)=>{
    //     setEmployee(prevState => ({
    //         ...prevState,
    //         date_of_birth: evt.target.value,
    //     }))
    // }
    const onChangeDepartment = (evt)=>{
        setEmployee(prevState => ({
            ...prevState,
            department:{
                id: evt.target.value,
            }
        }))
    }
    const HandleSubmit = () =>{
        console.log(addemployee)
    }

return(
    <div className="container">
        <div className="inner">
            <div className="input">
                <label>Enter Your Name</label>
                <input type="text" onChange={e=>setEmployee(prevState => ({
                    ...prevState,
                    first_name: e.target.value,
                }))}/>
            </div>
            <div className="input">
                <label>Enter Your Phone Number</label>
                <input type="number" onChange={e=>setEmployee(prevState => ({
                    ...prevState,
                    phone_number: e.target.value,
                }))}/>
            </div>
            <div className="input">
                <label>Enter Your Birth Day</label>
                <input type="date" onChange={e=>setEmployee(prevState => ({
                    ...prevState,
                    date_of_birth: e.target.value,
                }))}/>
            </div>
            <div className="input">
                <label>Department</label>
                <select value="banana" onChange={onChangeDepartment}>
                    <option>-----</option>
                    {
                      department && department.length > 0 ? (department.map(option=>(
                                <option value={option.id}>{option.name}</option>
                        )
                        )): ""
                    }
                </select>
            </div>

        </div>

        <input type="submit" value="submit" onClick={()=>HandleSubmit()}/>
        <ButtonPrimaryExample data={addemployee}/>
    </div>
)


    // const submitForm = (data) => {
    //     dispatch(addTodoAsync(data));
    // };
}

export default AddEmployee;