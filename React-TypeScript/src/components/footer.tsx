import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5'>
      <Container>
        <Row className='mb-4'>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#'>Link 1</a>
              </li>
              <li>
                <a href='#'>Link 2</a>
              </li>
              <li>
                <a href='#'>Link 3</a>
              </li>
              <li>
                <a href='#'>Link 4</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: example@example.com</p>
          </Col>
        </Row>
        <hr className='bg-light' />
        <Row className='text-center'>
          <Col>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
