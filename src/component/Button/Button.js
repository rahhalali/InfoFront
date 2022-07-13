import React from 'react';

import Button from '@atlaskit/button';

const ButtonPrimaryExample = (props) => {

    const addEmployee = async ()=>{
        console.log("props",props.data);
        let employees = await fetch("http://localhost:8080/api/v2/employees",{
            method:"POST",
            mode:"cors",
                headers: {
                    "Content-Type": "application/json",
                },
            body:JSON.stringify(props.data)
        });
        employees =await employees.json();
        console.log('employees',employees);

    }
    return <Button appearance="primary" onClick={addEmployee}>Primary button</Button>;
};

export default ButtonPrimaryExample;