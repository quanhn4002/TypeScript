import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { useForm } from 'react-hook-form'
import { TUser } from '../interface/user'
import instance from '~/api'
import { useNavigate } from 'react-router-dom'

const schemaProduct = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6)
})

const Login = () => {
  const naivgate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUser>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit = (user: TUser) => {
    console.log(user)
    ;(async () => {
      const { data } = await instance.post(`/login`, user)
      console.log(data)
      if (data.user) {
        sessionStorage.setItem('accessToken', data.accessToken)
        const isConfirm = confirm('Register success, do you want to home page ?')
        if (isConfirm) {
          naivgate('/')
        }
      }
    })()
  }

  return (
    <div>
      <div>
        <div className='container'>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            <div className='form-group'>
              <label htmlFor='Email'>Email</label>
              <input type='text' {...register('email')} className='form-control' id='Email' placeholder='Email' />
            </div>
            {errors.email && <span>{errors.email.message}</span>}

            <div className='form-group'>
              <label htmlFor='Password'>Password</label>
              <input
                type='password'
                {...register('password')}
                className='form-control'
                id='Password'
                placeholder='Password'
              />
            </div>
            {errors.password && <span>{errors.password.message}</span>}

            <button type='submit' className='btn btn-primary w-100'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
