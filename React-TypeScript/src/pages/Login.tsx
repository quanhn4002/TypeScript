import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <div className='container'>
        <form className='form'>
          <h1>Login</h1>
          <div className='form-group'>
            <label htmlFor='User'>User</label>
            <input type='text' className='form-control' id='User' placeholder='User' />
          </div>
          <div className='form-group'>
            <label htmlFor='PassWord'>PassWord</label>
            <input type='text' className='form-control' id='PassWord' placeholder='PassWord' />
          </div>

          <button type='submit' className='btn btn-primary w-100'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
