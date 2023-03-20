import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { PetsContext } from '../Context/PetsContext'
import Button from 'react-bootstrap/Button'

function PetSubmissionForm(){

     // Context
     const { pets, submitPets, loadPets} = useContext(PetsContext)

    //  STATE
    const [petName, setPetName] = useState('Pet\'s Name')
    const [petBio, setPetBio] = useState('Pet\'s Bio')
    const [petAge, setPetAge] = useState('Pet\'s Age - Integer only') // add error here if it's not
    const [petImageUrl, setPetImageUrl] = useState('Image URL')

    const handlePetNameChange = (e) => {
        setPetName(e.target.value)
    };
    const handlePetBioChange = (e) => {
        setPetBio(e.target.value)
    };
    const handlePetAgeChange = (e) => {
        setPetAge(e.target.value)
    };

    const handlePetImageUrlChange = (e) => {
        setPetImageUrl(e.target.value)
    };

    // POST Pet
    const handlePetSubmit = (e) => {
        e.preventDefault()
        submitPets({name: petName, bio: petBio, age: petAge, image_url: petImageUrl})
    };

    return (
        <div>
                <Form onSubmit={handlePetSubmit}>
                <input 
                type="text"
                value={petName}
                onChange={handlePetNameChange}
                />
                <input 
                type="text"
                value={petBio}
                onChange={handlePetBioChange}
                />
                <input
                type="text"
                value={petAge}
                onChange={handlePetAgeChange}
                />
                <input
                type="text"
                value={petImageUrl}
                onChange={handlePetImageUrlChange}
                />
                <Button type="submit">Submit</Button>
                </Form>
        </div>
    )
}

export default PetSubmissionForm