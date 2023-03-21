import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext';

function EditPet({id}){

    const {pets, setPets} = useContext(PetsContext)

    const [petNameUpdate, setPetNameUpdate] = useState('Update Pet Name')
    const [petBioUpdate, setPetBioUpdate] = useState('Update Pet Bio')
    const [petAgeUpdate, setPetAgeUpdate] = useState('Update Pet Age')
    const [petRescueUpdate, setPetRescueUpdate] = useState('Update Pet Rescue')

    const handlePetNameUpdate = (e) => {
        console.log(e.target.value)
        setPetNameUpdate(e.target.value)
    }

    const handlePetBioUpdate = (e) => {
        console.log(e.target.value)
        setPetBioUpdate(e.target.value)
    }

    const handlePetAgeUpdate = (e) => {
        console.log(e.target.value)
        setPetAgeUpdate(e.target.value)
    }

    const handlePetRescueUpdate = (e) => {
        console.log(e.target.value)
        setPetRescueUpdate(e.target.value)
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
                rescue_id: petRescueUpdate
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    res.json().then((err) => console.log(err))
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
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default EditPet