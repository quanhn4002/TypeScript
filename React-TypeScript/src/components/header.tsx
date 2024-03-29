import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to='/' className='navLink'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className='navLink'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/register' className='navLink'>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin' className='navLink'>
            Admin Page
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
