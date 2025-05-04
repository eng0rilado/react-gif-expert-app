import React from 'react'

export const GifItem = ({title, url, id}) => {
    return (
        <div className="card" key={ id }>
            <img src={ url } ></img>
            <p>{ title }</p>
        </div>
    )
}
