import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <h1>Welcome to Login</h1>
        <form>
            <div className='form-group'>
                <label for='email'>Email:</label>
                <input type='email' className='form-control' id='email' placeholder='Enter email' />
            </div>
            <div className='form-group'>
                <label for='password'>Password:</label>
                <input type='password' className='form-control' id='password' placeholder='Enter password' />
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
      
    </div>
  )
}

export default Login
