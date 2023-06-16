import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelectors, editProduct } from '../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelectors.selectById(state, id));

  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product && product.title && product.price) {
      setTitleValue(product.title);
      setPriceValue(product.price);
    }
  }, [product]);

  const handleEditProduct = async () => {
    const updatedProduct = {
      id,
      title: titleValue,
      price: priceValue
    };

    dispatch(editProduct(updatedProduct));

    // Navigate to home page
    navigate('/');
  };

  return (
    <div>
      <form className="box mt-5" onSubmit={handleSubmit(handleEditProduct)}>
        <div className='field'>
          <label className="label">Title</label>
          <div className='control'>
            <input
              type="text"
              id='title'
              className='input'
              placeholder='Title'
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className="label">Price</label>
          <div className='control'>
            <input
              type="number"
              className='input'
              id='price'
              placeholder='Price'
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-success'>Edit Product</button>
        </div>
      </form>
    </div>
  );
}
