import React, { useContext, useState, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'

function Pets(){

    const { pets, setPets, loadPets} = useContext(PetsContext)

    useEffect(() => {
        loadPets()
    }, []);

    console.log('plzzzzz:', pets)

    return (
        <div>
            {pets.map((p) => {
                return <li>{p.bio} {p.name} is {p.age}.</li>
            })}
        </div>
    )

}

export default Pets