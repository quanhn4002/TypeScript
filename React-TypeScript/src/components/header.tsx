import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <NavLink to='/shop' className='nav-link'>
                Shop
              </NavLink>
              <NavLink to='/Login' className='nav-link'>
                Login
              </NavLink>
              <NavLink to='/register' className='nav-link'>
                Register
              </NavLink>
              <NavLink to='/admin' className='nav-link'>
                Admin
              </NavLink>
            </Nav>

            <Form className='d-flex'>
              <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
