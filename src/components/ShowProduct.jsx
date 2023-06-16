import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getProducts, productSelectors, deleteProduct } from "../features/productSlice"
import { Link } from 'react-router-dom';

export default function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll)

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className='box mt-5'>
      <Link to={"add"} className='button is-success mx-3'>Add New</Link>
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className='columns is-gapless'>
                <div style={{display:"flex", gap:30, alignItems:"center"}}>
                  <Link to={`edit/${product.id}`} className='button is-info is-small'>Edit</Link>
                  <button className='button is-danger is-small' onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
