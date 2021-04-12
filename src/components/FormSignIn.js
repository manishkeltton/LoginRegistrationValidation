import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import useForm from '../common/useForm'
import validate from '../common/validation/validateInfo'
import '../Form.css'
import Paths from '../Router/Paths'

const FormSignIn = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login Account</h1>
            
            <div className="form-inputs">
                 <label htmlFor="email" className="form-label">
                    E-mail: 
                 </label>
                 <input 
                       id="email"
                       type="email" 
                       name="email" 
                       className="form-input" 
                       placeholder=" Enter your email"
                       value={values.email}
                       onChange={handleChange}
                   />
                   {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                 <label htmlFor="password" className="form-label">
                    Password:
                 </label>
                 <input 
                       id="password"
                       type="password" 
                       name="password" 
                       className="form-input" 
                       placeholder=" Enter your password"
                       value={values.password}
                       onChange={handleChange}
                   />
                   {errors.password && <p>{errors.password}</p>}
            </div>
            
            <button className="form-input-btn" 
               type='submit'>
                   Sign In
            </button>
            {/* <span className='form-input-login'>
                     Create new account? Signup 
                     <BrowserRouter>
                     <Link to={Paths.SIGNUP}>here</Link>
                     </BrowserRouter>
                 </span> */}
        </form>
   </div>
    )
}

export default FormSignIn
