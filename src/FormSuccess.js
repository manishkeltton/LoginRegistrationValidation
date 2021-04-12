import React from 'react'

const FormSuccess = ({LogOutForm}) => {
    return (
        <div>
            <h1>Form Successful</h1>
            <button onClick={LogOutForm}>Logout</button>
        </div>
    )
}

export default FormSuccess
