import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext';

function EditPet({id}){

    const {pets, setPets, setPetError} = useContext(PetsContext)

    const [petNameUpdate, setPetNameUpdate] = useState('Update Pet Name')
    const [petBioUpdate, setPetBioUpdate] = useState('Update Pet Bio')
    const [petAgeUpdate, setPetAgeUpdate] = useState('Update Pet Age')
    const [petRescueUpdate, setPetRescueUpdate] = useState('Update Pet Rescue')
    const [petAdopterUpdate, setPetAdopterUpdate] = useState('Update Pet Adopter')

    const handlePetNameUpdate = (e) => {
        setPetNameUpdate(e.target.value)
    }

    const handlePetBioUpdate = (e) => {
        setPetBioUpdate(e.target.value)
    }

    const handlePetAgeUpdate = (e) => {
        setPetAgeUpdate(e.target.value)
    }

    const handlePetRescueUpdate = (e) => {
        setPetRescueUpdate(e.target.value)
    }

    const handlePetAdopterUpdate = (e) => {
        setPetAdopterUpdate(e.target.value)
    }


    const updatePet = (e) => { // get id from the pet component
        e.preventDefault()
        fetch(`/pets/${id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
            }, 
            body:JSON.stringify({
                name: petNameUpdate,
                bio: petBioUpdate,
                age: petAgeUpdate,
                rescue_id: petRescueUpdate,
                adopter_id: petAdopterUpdate
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    res.json().then((err) => setPetError(err.error))
                } else {
                    res.json().then((updatedPetObj) => handleUpdatePet(updatedPetObj))
                }
            })
    }

    const handleUpdatePet = (updatedPet) => {
        const updatedPets = pets.map((pet) => {
            if (pet.id === updatedPet.id){
                console.log(updatedPet)
                return updatedPet
             } else {
                 return pet
             }
        })
         setPets(updatedPets)
    }

    return(
        <Form onSubmit={updatePet}>
            <input
            type="text"
            value={petNameUpdate}
            onChange={handlePetNameUpdate}
            />
            <input
            type="text"
            value={petBioUpdate}
            onChange={handlePetBioUpdate}
            />
            <input
            type="text"
            value={petAgeUpdate}
            onChange={handlePetAgeUpdate}
            />
            <input
            type="text"
            value={petRescueUpdate}
            onChange={handlePetRescueUpdate}
            />
            <input
            type="text"
            value={petAdopterUpdate}
            onChange={handlePetAdopterUpdate}
            />
            <Button type="submit">Update</Button>
        </Form>
    )
}

export default EditPet