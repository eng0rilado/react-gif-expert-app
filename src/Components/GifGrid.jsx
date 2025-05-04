import React, { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/GifUtils';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';


export const GifGrid = ({ category }) => {


    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && (<h2>cargando...</h2>)
            }
            <div className="card-grid">
                {images.map(img => {
                    return (
                        <GifItem
                        key={img.id} 
                        { ...img }/>
                    )
                })}
            </div>
        </>
    )
}
