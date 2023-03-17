import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { PetsContext } from '../Context/PetsContext'
import Button from 'react-bootstrap/Button'
import PetSubmissionForm from './PetSubmissionForm'
import PetCard from './PetCard'

function Pets(){

    // Context
    // const { pets, submitPets, loadPets} = useContext(PetsContext)

    const {loadPets, pets} = useContext(PetsContext)
    useEffect(() => {
        loadPets()
    }, []);
    //

    // State
    // const [petName, setPetName] = useState('Pet\'s Name')
    // const [petBio, setPetBio] = useState('Pet\'s Bio')
    // const [petAge, setPetAge] = useState('Pet\'s Age - Integer only') // add error here if it's not
    // const [petImageUrl, setPetImageUrl] = useState('Image URL')

    // const handlePetNameChange = (e) => {
    //     setPetName(e.target.value)
    //     console.log(e.target.value)
    // }
    // const handlePetBioChange = (e) => {
    //     setPetBio(e.target.value)
    //     console.log(e.target.value)
    // }
    // const handlePetAgeChange = (e) => {
    //     setPetAge(e.target.value)
    //     console.log(e.target.value)
    // }

    // const handlePetImageUrlChange = (e) => {
    //     setPetImageUrl(e.target.value)
    //     console.log(e.target.value)
    // }

    // POST Pet
    // const handlePetSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('Submitted!')
    //     submitPets({name: petName, bio: petBio, age: petAge, image_url: petImageUrl})
    // }

    // YOU CAN PASS PETS AS A PROP!! NOT PROP DRILLING!!

    return (
        <div>
            {/* <Form onSubmit={handlePetSubmit}>
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
            {pets.map((p) => {
                return <PetCard p={p}/>
            })} */}
            <PetSubmissionForm />
            {pets.map((p) => {
                return <PetCard p={p} />
            })}
        </div>
    )

}

export default Pets