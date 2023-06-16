import React from 'react'
import { AddProduct, EditProduct, ShowProduct } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<ShowProduct/>}/>
          <Route path='add' element={<AddProduct/>}/>
          <Route path='edit/:id' element={<EditProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}
