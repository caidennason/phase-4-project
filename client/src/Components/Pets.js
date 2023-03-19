import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { PetsContext } from '../Context/PetsContext'
import Button from 'react-bootstrap/Button'
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