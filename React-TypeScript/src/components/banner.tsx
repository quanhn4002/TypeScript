import Carousel from 'react-bootstrap/Carousel'

function Banner() {
  return (
    <div className='banner'>
      <Carousel data-bs-theme='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://laptoptoday.vn/sites/default/files/styles/anh_slide_pc/public/2021-05/laptop-lenovo.jpg?itok=J_D7jun6'
            alt='First slide'
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://laptopbaominh.com/wp-content/uploads/2015/08/banner-n04.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
