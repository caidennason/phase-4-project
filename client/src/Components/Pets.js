import React, { useContext, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'
import PetSubmissionForm from './PetSubmissionForm'
import PetCard from './PetCard'
import { useNavigate } from 'react-router-dom'
import { RescuesContext } from '../Context/RescueContext'

function Pets(){

    const navigate = useNavigate()
    const {loadPets, pets} = useContext(PetsContext)
    const {currentRescue, isLoading} = useContext(RescuesContext)
    console.log('am i signed in?', currentRescue)

    useEffect(() => {
        if (!currentRescue && !isLoading){
        navigate('/')
        } else {
            loadPets()
        }
    }, [currentRescue, isLoading]);

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