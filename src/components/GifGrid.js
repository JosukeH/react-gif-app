import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  
 const {data,loaded} =useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {loaded && <p>Cargando</p>}
      <div className="card-grid">
        {

        data.map((gif) => (
          <GifGridItem 
          key={gif.id} 
          {...gif} />
        ))
        
        }
      </div> 
  </>
  );
};

export default GifGrid;
