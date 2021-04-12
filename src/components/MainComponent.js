import React, { useState } from 'react'
import FormSuccess from '../FormSuccess'
import '../Form.css'
import Routes from '../Router/Routes'

const MainComponent = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    
    const LogOutForm = () => {
      setIsSubmitted(false)
    }

    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
              <img className='form-img' src='img/img1.jpeg' alt='spaceship' />
            </div>
            {!isSubmitted ? ( <Routes submitForm={submitForm} />
            ) : (
              <FormSuccess LogOutForm={LogOutForm} />
            )}
         </div>
      </>
    )
}

export default MainComponent
