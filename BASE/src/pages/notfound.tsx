import React from 'react'
import { Link } from 'react-router-dom'
const notfound = () => {
  return (
    <div>
      <h1> 404 NOT found</h1>
      <Link to='/'> Quay lại trang</Link>
    </div>
  )
}

export default notfound
