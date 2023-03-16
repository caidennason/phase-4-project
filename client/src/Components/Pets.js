import React, { useContext, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'

function Pets(){

    const { pets, setPets, loadPets} = useContext(PetsContext)

    useEffect(() => {
        loadPets()
    }, []);

    return (
        <div>
            {pets.map((p) => {
                return <li key={p.id}>{p.bio} {p.name} is {p.age}.</li>
            })}
        </div>
    )

}

export default Pets