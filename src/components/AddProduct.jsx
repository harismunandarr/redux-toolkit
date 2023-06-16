import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { saveProduct } from "../features/productSlice"
import { useNavigate } from "react-router-dom"

export default function AddProduct() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createProduct = async (data) => {
    await dispatch(saveProduct(data))
    navigate('/')
  }
  return (
    <div>
      <form className="box mt-5" onSubmit={handleSubmit(createProduct)}>
        <div className='field'>
          <label className="label">Title</label>
          <div className='control'>
            <input type="text" id='title' className='input' placeholder='Title'
            {...register("title")}
            />
          </div>
        </div>
        <div className='field'>
          <label className="label">Price</label>
          <div className='control'>
            <input type="number" className='input' id='price' placeholder='Price'
            {...register("price")}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-success'>Submit</button>
        </div>
      </form>
    </div>
  )
}
