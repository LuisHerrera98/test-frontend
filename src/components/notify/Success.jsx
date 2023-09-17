import React, { useEffect, useState } from 'react'
import './sucess.css'

const Success = ({type}) => {

const [text, setText] = useState("")

const verifyType = () => {
    if(type == "category"){
        setText("Categoria creada")
    }else if(type == "size"){
        setText("Talle creado")
    }

}

useEffect(() => {
  
}, [])


  return (
    <div className='box-success'>
        <h1>{text}</h1>
    </div>
  )
}

export default Success