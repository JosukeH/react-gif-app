import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) =>{

    const [state, setState] = useState({
        data: [],
        loaded: true,
    })

    useEffect( () =>{

  

        getGifs(categoria)
        .then(gifs => {
            setState({
                data:gifs,
                loading:false
            });
        })


    }, [categoria])

    return state;
}