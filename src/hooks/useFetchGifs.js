import React, { useState, useEffect } from 'react'
import { getGifs } from '../Helpers/GifUtils';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNewGifs = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getNewGifs();

        //   return () => {
        //     second
        //   }
    }, []);


    return {
        images,
        isLoading
    };
}
