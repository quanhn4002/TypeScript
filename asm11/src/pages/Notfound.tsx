import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to='/'> go back to the homepage</Link>
    </div>
  )
}

export default Notfound
