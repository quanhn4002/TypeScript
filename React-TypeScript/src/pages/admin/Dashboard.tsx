import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interface/product'

type Props = {
  products: TProduct[]
  onDel: (id: string | undefined) => void
  // nếu trong data id là string thì truyền vào string, còn nếu là number thì truyền vào number
}

const DashBoard = ({ products, onDel }: Props) => {
  const handleDelete = (id: string | undefined) => {
    // nếu trong data id là string thì truyền vào string, còn nếu là number thì truyền vào number
    onDel(id)
  }
  return (
    <div className='container'>
      <h1>Hello, Admin</h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={140} height={100} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <Link className='btn btn-warning' to={`/admin/edit/${item.id}`}>
                  Update
                </Link>
                <button className='btn btn-danger' onClick={() => handleDelete(String(item.id))}>
                  {/* ở trên string dưới string k ngược lại */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashBoard
