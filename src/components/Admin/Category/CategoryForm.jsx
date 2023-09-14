import React from 'react'
import './categoryForm.css'

const CategoryForm = () => {
  return (
    <div className='form-category'>
      <div className='form-modal'>
        <h3>Crear Categoria</h3>
        <form>
            <label htmlFor="">Ingrese el nombre</label>
            <input type="text" placeholder='nombre..'/>
            <button type='submit'>Crear</button>
        </form>
      </div>
    </div>
  )
}

export default CategoryForm