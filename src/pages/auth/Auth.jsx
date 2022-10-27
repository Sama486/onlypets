import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
      <div className='a-left'>
        <img src={Logo} alt=''/>
        <div className='Webname'>
            <h1>Ewa Media</h1>
            <h6>Explore the ideas ewa</h6>
        </div>
      </div>
      <SignUp />
    </div>
  )
}

function SignUp () {

    return(
        <div className='a-right'>
            <form className='infoForm'>
            

                <h3>Sign up</h3>
                <div>
                    <input 
                    type="text" 
                    placeholder='First Name' 
                    className='infoInput'
                    name='firstname'
                    />
                    <input 
                    type="text" 
                    placeholder='Last Name' 
                    className='infoInput'
                    name='lastname'
                    />
                </div>
            </form>
        </div>
    )
}

export default Auth
