import Carousel from 'react-bootstrap/Carousel'

function banner() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100 h-20'
          src='https://i.ytimg.com/vi/vMVwdSp489E/maxresdefault.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://intphcm.com/data/upload/banner-la-gi.jpg' alt='Second slide' />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://i.ytimg.com/vi/vMVwdSp489E/maxresdefault.jpg' alt='Third slide' />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default banner
