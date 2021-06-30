import React,{useState} from 'react'
import AddCategoria from './components/AddCategoria';
import GifGrid from './components/GifGrid';

const GifExpert = () => {

    const [categorias, setCategorias] = useState(['JOJOS']);



    return (
        <>

         <h1> Gif Expert</h1>
            <AddCategoria setCategorias={setCategorias}/>
         <hr/>
              
            <ul>
                {
                    categorias.map(categoria =>
                        <GifGrid key={categoria} categoria={categoria} />
                    )

                }
            </ul>
        </>
        
    )
}

export default GifExpert
