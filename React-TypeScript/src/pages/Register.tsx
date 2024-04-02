import React from 'react'

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
      <div>
        <div className='container'>
          <form className='form'>
            <h1>Register</h1>
            <div className='form-group'>
              <label htmlFor='User'>UserName</label>
              <input type='text' className='form-control' id='User' placeholder='UserName' />
            </div>

            <div className='form-group'>
              <label htmlFor='Email'>Email</label>
              <input type='text' className='form-control' id='Email' placeholder='Email' />
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
    </div>
  )
}
export default Register
