import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { PetsContext } from '../Context/PetsContext'
import Button from 'react-bootstrap/Button'

function PetSubmissionForm(){

     // Context
     const { pets, submitPets, loadPets, petError} = useContext(PetsContext)

    //  STATE
    const [petName, setPetName] = useState('')
    const [petBio, setPetBio] = useState('')
    const [petAge, setPetAge] = useState('')
    const [petImageUrl, setPetImageUrl] = useState('')

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
        setPetName('')
        setPetBio('')
        setPetAge('')
        setPetImageUrl('')
    };

    return (
        <div>
            <p>{petError}</p>
                <Form onSubmit={handlePetSubmit}>
                <input 
                type="text"
                placeholder="Pet's name"
                value={petName}
                onChange={handlePetNameChange}
                />
                <input 
                type="text"
                placeholder="Pet's bio"
                value={petBio}
                onChange={handlePetBioChange}
                />
                <input
                type="text"
                placeholder="Pet's age"
                value={petAge}
                onChange={handlePetAgeChange}
                />
                <input
                type="text"
                placeholder="Image URL"
                value={petImageUrl}
                onChange={handlePetImageUrlChange}
                />
                <Button size="sm"type="submit" style={{color:"peachpuff"}}variant="dark">Submit</Button>
                </Form>
        </div>
    )
}

export default PetSubmissionForm