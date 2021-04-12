import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const useForm = (callback, validate) => {
    const usehistory = useHistory()
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
        // alert(errors)
        console.log("call Submit")
        setSubmitting(true)
        console.log("Submitted Form", values.password)
    }

    function pushSignIn(){
        console.log("signIN" + Object.keys(errors).length)
        if(Object.keys(errors).length === 0 && values.password 
           && values.username && values.password2 && values.email){
                usehistory.push('/signin')
            }
    }

    useEffect(() => {
        // console.log(errors)
        pushSignIn()
        console.log("call useEffect")
        if(Object.keys(errors).length === 2 && 
           isSubmitting){
               console.log("call useEffect")
               callback();
           }
    },[errors])

    return { handleChange, values, handleSubmit, errors}
}

export default useForm
