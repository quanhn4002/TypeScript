type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-body-tertiary text-center '>
      {/* Grid container */}
      <div className='container p-4 bg-dark '>
        {/* Section: Images */}
        <section className=''>
          <div className='row '>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/301' className='w-100 h-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/303' className='w-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/304' className='w-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/305' className='w-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/307' className='w-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-md-12 mb-4 mb-md-0'>
              <div
                data-mdb-ripple-init=''
                className='bg-image hover-overlay shadow-1-strong rounded'
                data-ripple-color='light'
              >
                <img src='https://picsum.photos/200/308' className='w-100' />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Images */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <a className='text-body' href='https://mdbootstrap.com/'>
          Mr Quân
        </a>
      </div>
      {/* Copyright */}
    </footer>
  )
}

export default Footer
