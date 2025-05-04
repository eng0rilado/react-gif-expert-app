import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // Si la categoria ya existe no se añade
        if (categories.includes(newCategory)) return;
        // Se añade la nueva categoria
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, newCategory]);
    }


    return (
        <>
            {/* {Titulo} */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)}
            />

            {/* {Listado de Gif} */}
            {/* {GIF Item} */}
            {categories.map(category => {
                return <GifGrid
                    key={category}
                    category={category} />
            })}

        </>
    )
}


