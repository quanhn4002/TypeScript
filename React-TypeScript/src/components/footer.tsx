import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5'>
      <Container>
        <Row className='mb-4'>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Hỗ trợ khách hàng </p>
            <p>Tra cứu tình trạng đơn hàng </p>
            <p> Phương thức thanh toán</p>
            <p>Quy định và hướng dẫn mua hàng</p>
            <p> Chính sách đổi trả sản phẩm</p>
            <p> Chính sách bảo hành Chính sách bảo mật thông tin</p>
          </Col>
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#'>facebook.com</a>
              </li>
              <li>
                <a href='#'>Tiktok.com</a>
              </li>
              <li>
                <a href='#'>0988424242</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: quanhainguyenlm@gmail.com</p>
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
