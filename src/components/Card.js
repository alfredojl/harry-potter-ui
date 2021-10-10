import React from 'react';

export const Card = ({
    name,
    birthday,
    eyeColour,
    hairColour,
    gender,
    image
}) => {
    return (
        <div className="card__container">
            <div className="card__left">
            {
                image.length > 0 ?
                <img src={ image } className="card__photo" alt={ name } />
                : <div className="card__no-photo"></div>
            }
            </div>
            <div className="card__right">
                <p className="card__status">Vivo / Estudiante</p>
                <p className="card__title">{ name }</p>
                <p className="card__text"><strong>Cumpleaños:</strong> { birthday }</p>
                <p className="card__text"><strong>Género:</strong> { gender.length > 0 && gender[0].toUpperCase() + gender.slice(1)}</p>
                <p className="card__text"><strong>Color de ojos:</strong> { eyeColour.length > 0 && eyeColour[0].toUpperCase() + eyeColour.slice(1) }</p>
                <p className="card__text"><strong>Color de pelo:</strong> { hairColour.length > 0 && hairColour[0].toUpperCase() + hairColour.slice(1) }</p>
            </div>
            
        </div>
    )
}
