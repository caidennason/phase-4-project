import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext';
import Dropdown from 'react-bootstrap/Dropdown';

function EditPet({id, name}){

    const {pets, setPets, setPetError} = useContext(PetsContext)
    const [petNameUpdate, setPetNameUpdate] = useState('')
    const [petBioUpdate, setPetBioUpdate] = useState('')
    const [petAgeUpdate, setPetAgeUpdate] = useState('')
    const [petRescueUpdate, setPetRescueUpdate] = useState('')
    const [petAdopterUpdate, setPetAdopterUpdate] = useState('')

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
        <Dropdown>
            <Dropdown.Toggle style={{color:"peachpuff"}}variant="dark">
            Edit {name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Form onSubmit={updatePet}>
                <input
                type="text"
                placeholder="Edit pet name"
                value={petNameUpdate}
                onChange={handlePetNameUpdate}
                /> 
                <input
                type="text"
                placeholder="Edit pet bio"
                value={petBioUpdate}
                onChange={handlePetBioUpdate}
                /> 
                <input
                type="text"
                placeholder="Edit pet age"
                value={petAgeUpdate}
                onChange={handlePetAgeUpdate}
                /> 
                <input
                type="text"
                placeholder="Edit pet rescue"
                value={petRescueUpdate}
                onChange={handlePetRescueUpdate}
                />
                <input
                type="text"
                placeholder="Edit pet adopter"
                value={petAdopterUpdate}
                onChange={handlePetAdopterUpdate}
                /> 
                <Button size="sm" variant="dark" style={{color:"peachpuff"}}type="submit">Update</Button>
            </Form>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default EditPet