import React, { useContext, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'
import PetSubmissionForm from './PetSubmissionForm'
import PetCard from './PetCard'

function Pets(){

    const {loadPets, pets, rescues} = useContext(PetsContext)

    useEffect(() => {
        loadPets()
    }, []);

    // if (!rescues){
    //     return <div>Loading...</div>
    // }

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