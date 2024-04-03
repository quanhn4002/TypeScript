import { TProduct } from "@/interfaces/product";
import React from "react";
import { Link } from "react-router-dom";
type Props = {
  products: TProduct[];
};
const Home = ({ products }: Props) => {
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price </th>
            <th> Deciption</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/edit/${item.id}`}>update</Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
