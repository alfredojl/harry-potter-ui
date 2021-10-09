import React from 'react'
import { Card } from './Card'

export const CardGrid = ( { data } ) => {
    console.log(data)
    return(
        <div className="card__grid">
        {
            data.map(({ name, birthday, eyeColour, hairColour, gender, image }) => {
                return (
                    <Card
                        key={ name }
                        name={ name }
                        birthday={ birthday }
                        eyeColour={ eyeColour }
                        hairColour={ hairColour }
                        gender={ gender }
                        image= { image }
                    />
                )
            })
        }
        </div>
    )
}
