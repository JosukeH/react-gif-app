import React, { useState } from 'react'
import PropTypes from 'prop-types';        

const AddCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState("");
    
    const handleChange  = (e) =>{
        setInputValue(e.target.value );
      
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias((cat) => [inputValue,...cat])
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>

        <input type="text" 
        value={inputValue}
         onChange={handleChange}
         placeholder="Ingrese texto"
         />
        
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}

export default AddCategoria