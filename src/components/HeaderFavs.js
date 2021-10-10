import React from 'react'
import { FaBookmark, FaUserPlus } from 'react-icons/fa'

export const HeaderFavs = () => {
    return (
        <header>
            <div className="favs__content">
                <span className="favs__text">Favoritos <FaBookmark className="favs__icon"/></span>
                <div className="favs__separator"></div>
                <span className="favs__text">Agregar <FaUserPlus className="favs__icon"/></span>
            </div>
        </header>
    )
}
