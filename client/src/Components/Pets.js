import React, { useContext, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'
import PetSubmissionForm from './PetSubmissionForm'
import PetCard from './PetCard'

function Pets(){

    const {loadPets, pets} = useContext(PetsContext)

    useEffect(() => {
        loadPets()
    }, []);

    return (
        <div>
            <PetSubmissionForm />
            {pets.map((p) => {
                return <PetCard key={p.id} p={p} />
            })}
        </div>
    )

}

export default Pets